import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { normalizeOutput } from "@/lib/utils";
import type { LanguageKey, TestCase } from "@/types/problem";

const DEFAULT_URL = "https://judge0-ce.p.rapidapi.com";

const languageMap: Record<LanguageKey, number> = {
  python: 71,
  java: 62,
  cpp: 54,
};

type Judge0Result = {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  message: string | null;
  time: string | null;
  memory: number | null;
  status?: {
    id: number;
    description: string;
  };
};

export type Verdict =
  | "Accepted"
  | "Wrong Answer"
  | "Time Limit Exceeded"
  | "Memory Limit Exceeded"
  | "Compilation Error"
  | "Runtime Error"
  | "Internal Error";

export type TestRunResult = {
  verdict: Verdict;
  passed: boolean;
  actualOutput: string;
  expectedOutput: string;
  statusDescription: string;
  time: string | null;
  memory: number | null;
};

function getVerdict(result: Judge0Result, expectedOutput: string): Verdict {
  const statusId = result.status?.id ?? 13;
  const stderr = result.stderr ?? "";
  const compileOutput = result.compile_output ?? "";
  const message = result.message ?? "";

  if (statusId === 6 || compileOutput.length > 0) {
    return "Compilation Error";
  }

  if (statusId === 5) {
    return "Time Limit Exceeded";
  }

  if (statusId === 8 || /memory/i.test(stderr + message)) {
    return "Memory Limit Exceeded";
  }

  if (statusId >= 7 && statusId <= 12) {
    return "Runtime Error";
  }

  if (normalizeOutput(expectedOutput).length === 0) {
    return "Accepted";
  }

  const actual = normalizeOutput(result.stdout ?? "");
  const expected = normalizeOutput(expectedOutput);
  if (actual === expected) {
    return "Accepted";
  }

  return "Wrong Answer";
}

async function localExecute(
  sourceCode: string,
  language: LanguageKey,
  stdin: string
): Promise<Judge0Result> {
  const tempDir = path.join(os.tmpdir(), "temp_runs");
  await fs.mkdir(tempDir, { recursive: true });
  const runId = Math.random().toString(36).substring(7);

  if (language === "python") {
    const filePath = path.join(tempDir, `run_${runId}.py`);
    await fs.writeFile(filePath, sourceCode, "utf8");

    return new Promise((resolve) => {
      const startTime = process.hrtime.bigint();
      const child = spawn("python", [filePath]);

      let stdout = "";
      let stderr = "";
      let isTimedOut = false;

      const timer = setTimeout(() => {
        isTimedOut = true;
        child.kill("SIGKILL");
      }, 5000);

      child.stdout.on("data", (data) => { stdout += data; });
      child.stderr.on("data", (data) => { stderr += data; });

      child.on("close", async (code) => {
        clearTimeout(timer);
        const endTime = process.hrtime.bigint();
        const durationSec = Number(endTime - startTime) / 1e9;

        try {
          await fs.unlink(filePath);
        } catch {}

        if (isTimedOut) {
          resolve({
            stdout: null,
            stderr: "Time Limit Exceeded (5.0s)",
            compile_output: null,
            message: "Time Limit Exceeded",
            time: "5.000",
            memory: 0,
            status: { id: 5, description: "Time Limit Exceeded" },
          });
          return;
        }

        if (code !== 0 || stderr.length > 0) {
          resolve({
            stdout: stdout || null,
            stderr: stderr || null,
            compile_output: null,
            message: `Process exited with code ${code}`,
            time: durationSec.toFixed(3),
            memory: 0,
            status: {
              id: 11, // Runtime Error
              description: "Runtime Error",
            },
          });
        } else {
          resolve({
            stdout,
            stderr: null,
            compile_output: null,
            message: null,
            time: durationSec.toFixed(3),
            memory: 0,
            status: {
              id: 3, // Accepted
              description: "Accepted",
            },
          });
        }
      });

      child.stdin.write(stdin);
      child.stdin.end();
    });
  }

  if (language === "java") {
    const javaDir = path.join(tempDir, `java_${runId}`);
    await fs.mkdir(javaDir, { recursive: true });
    const filePath = path.join(javaDir, "Main.java");
    await fs.writeFile(filePath, sourceCode, "utf8");

    return new Promise((resolve) => {
      const javac = spawn("javac", ["Main.java"], { cwd: javaDir });
      let compileOutput = "";
      javac.stderr.on("data", (data) => { compileOutput += data; });
      javac.on("close", (code) => {
        if (code !== 0) {
          fs.rm(javaDir, { recursive: true, force: true }).catch(() => {});
          resolve({
            stdout: null,
            stderr: compileOutput,
            compile_output: compileOutput,
            message: "Compilation Failed",
            time: "0.000",
            memory: 0,
            status: {
              id: 6, // Compilation Error
              description: "Compilation Error",
            },
          });
          return;
        }

        const startTime = process.hrtime.bigint();
        const child = spawn("java", ["Main"], { cwd: javaDir });
        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (data) => { stdout += data; });
        child.stderr.on("data", (data) => { stderr += data; });

        child.on("close", async (runCode) => {
          const endTime = process.hrtime.bigint();
          const durationSec = Number(endTime - startTime) / 1e9;

          fs.rm(javaDir, { recursive: true, force: true }).catch(() => {});

          if (runCode !== 0 || stderr.length > 0) {
            resolve({
              stdout: stdout || null,
              stderr: stderr || null,
              compile_output: null,
              message: `Process exited with code ${runCode}`,
              time: durationSec.toFixed(3),
              memory: 0,
              status: {
                id: 11, // Runtime Error
                description: "Runtime Error",
              },
            });
          } else {
            resolve({
              stdout,
              stderr: null,
              compile_output: null,
              message: null,
              time: durationSec.toFixed(3),
              memory: 0,
              status: {
                id: 3, // Accepted
                description: "Accepted",
              },
            });
          }
        });

        child.stdin.write(stdin);
        child.stdin.end();
      });
    });
  }

  if (language === "cpp") {
    const isWindows = process.platform === "win32";
    const filePath = path.join(tempDir, `run_${runId}.cpp`);
    const exePath = path.join(tempDir, isWindows ? `run_${runId}.exe` : `run_${runId}`);
    await fs.writeFile(filePath, sourceCode, "utf8");

    return new Promise((resolve) => {
      const gpp = spawn("g++", [filePath, "-o", exePath]);
      let compileOutput = "";
      gpp.stderr.on("data", (data) => { compileOutput += data; });
      gpp.on("close", (code) => {
        if (code !== 0) {
          fs.unlink(filePath).catch(() => {});
          resolve({
            stdout: null,
            stderr: compileOutput || "g++ compiler not found or failed.",
            compile_output: compileOutput || "g++ is not installed on this system. Local C++ compilation requires g++.",
            message: "Compilation Failed",
            time: "0.000",
            memory: 0,
            status: {
              id: 6, // Compilation Error
              description: "Compilation Error",
            },
          });
          return;
        }

        const startTime = process.hrtime.bigint();
        const child = spawn(exePath);
        let stdout = "";
        let stderr = "";

        child.stdout.on("data", (data) => { stdout += data; });
        child.stderr.on("data", (data) => { stderr += data; });

        child.on("close", async (runCode) => {
          const endTime = process.hrtime.bigint();
          const durationSec = Number(endTime - startTime) / 1e9;

          try {
            await fs.unlink(filePath);
            await fs.unlink(exePath);
          } catch {}

          if (runCode !== 0 || stderr.length > 0) {
            resolve({
              stdout: stdout || null,
              stderr: stderr || null,
              compile_output: null,
              message: `Process exited with code ${runCode}`,
              time: durationSec.toFixed(3),
              memory: 0,
              status: {
                id: 11, // Runtime Error
                description: "Runtime Error",
              },
            });
          } else {
            resolve({
              stdout,
              stderr: null,
              compile_output: null,
              message: null,
              time: durationSec.toFixed(3),
              memory: 0,
              status: {
                id: 3, // Accepted
                description: "Accepted",
              },
            });
          }
        });

        child.stdin.write(stdin);
        child.stdin.end();
      });
    });
  }

  return {
    stdout: null,
    stderr: "Unsupported language",
    compile_output: null,
    message: "Internal error",
    time: null,
    memory: null,
    status: {
      id: 13,
      description: "Internal Error",
    },
  };
}

async function execute(sourceCode: string, language: LanguageKey, stdin: string): Promise<Judge0Result> {
  const apiKey = process.env.JUDGE0_API_KEY?.trim();
  if (apiKey) {
    const baseUrl = process.env.JUDGE0_API_URL ?? DEFAULT_URL;
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "x-rapidapi-key": apiKey,
    };
    if (process.env.JUDGE0_API_HOST) {
      headers["x-rapidapi-host"] = process.env.JUDGE0_API_HOST;
    }

    try {
      const response = await fetch(`${baseUrl}/submissions?base64_encoded=false&wait=true`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          source_code: sourceCode,
          language_id: languageMap[language],
          stdin,
        }),
        cache: "no-store",
      });

      if (response.ok) {
        return (await response.json()) as Judge0Result;
      }
    } catch {}
  }

  // Fallback to Piston API (100% free, no API key required)
  const pistonLangMap: Record<LanguageKey, { language: string; version: string }> = {
    python: { language: "python", version: "3.10.0" },
    java: { language: "java", version: "15.0.2" },
    cpp: { language: "c++", version: "10.2.0" },
  };

  const pistonLang = pistonLangMap[language];

  try {
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: pistonLang.language,
        version: pistonLang.version,
        files: [{ content: sourceCode }],
        stdin,
      }),
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      const run = data.run || {};
      const isError = run.code !== 0;

      return {
        stdout: run.stdout || (isError ? null : ""),
        stderr: run.stderr || null,
        compile_output: run.stderr || null,
        message: isError ? `Exited with code ${run.code}` : null,
        time: "0.100",
        memory: 0,
        status: {
          id: isError ? 11 : 3,
          description: isError ? "Runtime Error" : "Accepted",
        },
      };
    }
  } catch {}

  return localExecute(sourceCode, language, stdin);
}

export async function runAgainstTests(
  sourceCode: string,
  language: LanguageKey,
  tests: TestCase[]
): Promise<TestRunResult[]> {
  return Promise.all(
    tests.map(async (testCase) => {
      const judge0Result = await execute(sourceCode, language, testCase.input);
      const verdict = getVerdict(judge0Result, testCase.expectedOutput);
      const actualOutput = normalizeOutput(
        judge0Result.stdout ?? judge0Result.stderr ?? judge0Result.compile_output ?? ""
      );

      return {
        verdict,
        passed: verdict === "Accepted",
        actualOutput,
        expectedOutput: normalizeOutput(testCase.expectedOutput),
        statusDescription: judge0Result.status?.description ?? "Unknown",
        time: judge0Result.time,
        memory: judge0Result.memory,
      };
    })
  );
}
