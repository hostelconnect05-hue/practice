"use client";

import { useMemo, useState } from "react";
import { Brain, Play, Send } from "lucide-react";
import { CodeEditorPanel } from "@/components/problem/code-editor-panel";
import { DifficultyPill } from "@/components/problem/difficulty-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LanguageKey, ProblemBundle, ProblemListItem } from "@/types/problem";

type RunCaseResult = {
  verdict: string;
  passed: boolean;
  actualOutput: string;
  expectedOutput: string;
  statusDescription: string;
  time: string | null;
  memory: number | null;
};

const languageLabel: Record<LanguageKey, string> = {
  python: "Python",
  java: "Java",
  cpp: "C++",
};

const allLanguages: LanguageKey[] = ["python", "java", "cpp"];

export function ProblemWorkspace({
  bundle,
  related,
}: {
  bundle: ProblemBundle;
  related: ProblemListItem[];
}) {
  const { problem, templates, editorial, visibleTests } = bundle;
  const [language, setLanguage] = useState<LanguageKey>("python");
  const [codeByLanguage, setCodeByLanguage] = useState<Record<LanguageKey, string>>(templates);
  const [customInput, setCustomInput] = useState(visibleTests[0]?.input ?? "");
  const [runResults, setRunResults] = useState<RunCaseResult[]>([]);
  const [submitResults, setSubmitResults] = useState<RunCaseResult[]>([]);
  const [submitVerdict, setSubmitVerdict] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editorialVisible, setEditorialVisible] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);

  const activeCode = codeByLanguage[language] ?? "";
  const currentHint = useMemo(() => {
    if (hintLevel === 0) return "";
    if (hintLevel <= problem.hints.length) return problem.hints[hintLevel - 1];
    return editorial.optimalSolution;
  }, [hintLevel, problem.hints, editorial.optimalSolution]);

  const setActiveCode = (value: string) => {
    setCodeByLanguage((prev) => ({ ...prev, [language]: value }));
  };

  const handleRun = async () => {
    setIsRunning(true);
    setRunResults([]);

    try {
      const response = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: problem.slug,
          language,
          sourceCode: activeCode,
          customInput,
        }),
      });

      const body = (await response.json()) as { results: RunCaseResult[]; error?: string };
      if (!response.ok) {
        throw new Error(body.error ?? "Run failed");
      }
      setRunResults(body.results);
    } catch (error) {
      setRunResults([
        {
          verdict: "Internal Error",
          passed: false,
          actualOutput: error instanceof Error ? error.message : "Unknown error",
          expectedOutput: "",
          statusDescription: "Failed to execute",
          time: null,
          memory: null,
        },
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitResults([]);
    setSubmitVerdict("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: problem.slug,
          language,
          sourceCode: activeCode,
        }),
      });

      const body = (await response.json()) as {
        verdict: string;
        results: RunCaseResult[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(body.error ?? "Submit failed");
      }

      setSubmitVerdict(body.verdict);
      setSubmitResults(body.results);
    } catch (error) {
      setSubmitVerdict("Internal Error");
      setSubmitResults([
        {
          verdict: "Internal Error",
          passed: false,
          actualOutput: error instanceof Error ? error.message : "Unknown error",
          expectedOutput: "",
          statusDescription: "Failed to submit",
          time: null,
          memory: null,
        },
      ]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <section className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <div className="flex flex-wrap items-center gap-3">
          <DifficultyPill difficulty={problem.difficulty} />
          <h1 className="text-2xl font-bold text-zinc-50">{problem.title}</h1>
          <span className="text-xs text-zinc-400">Acceptance {problem.acceptance}</span>
        </div>

        <article className="space-y-4 text-sm text-zinc-200">
          <h2 className="text-lg font-semibold text-zinc-100">Problem Statement</h2>
          <p>{problem.statement}</p>

          <h3 className="text-base font-semibold text-zinc-100">Examples</h3>
          {problem.examples.map((example, index) => (
            <Card key={index}>
              <CardContent className="space-y-2 p-3 text-xs">
                <p>
                  <strong>Input:</strong> {example.input}
                </p>
                <p>
                  <strong>Output:</strong> {example.output}
                </p>
                <p>
                  <strong>Explanation:</strong> {example.explanation}
                </p>
              </CardContent>
            </Card>
          ))}

          <h3 className="text-base font-semibold text-zinc-100">Constraints</h3>
          <ul className="list-disc space-y-1 pl-6">
            {problem.constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>

          <div>
            <h3 className="mb-2 text-base font-semibold text-zinc-100">Hints</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setHintLevel((v) => Math.min(v + 1, problem.hints.length + 1))}
            >
              <Brain className="mr-2 h-4 w-4" />
              AI Hint
            </Button>
            {currentHint ? <p className="mt-2 rounded-lg bg-zinc-950 p-3 text-xs">{currentHint}</p> : null}
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-zinc-100">Editorial</h3>
            <Button variant="ghost" size="sm" onClick={() => setEditorialVisible((v) => !v)}>
              {editorialVisible ? "Hide Editorial" : "Show Editorial"}
            </Button>
            {editorialVisible ? (
              <div className="mt-3 space-y-2 rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-xs">
                <p><strong>Approach:</strong> {editorial.approach}</p>
                <p><strong>Observation:</strong> {editorial.observation}</p>
                <p><strong>Brute Force:</strong> {editorial.bruteForce}</p>
                <p><strong>Optimal Solution:</strong> {editorial.optimalSolution}</p>
                <p><strong>Time Complexity:</strong> {editorial.timeComplexity}</p>
                <p><strong>Space Complexity:</strong> {editorial.spaceComplexity}</p>
                <p><strong>Dry Run:</strong> {editorial.dryRun}</p>
                <p><strong>Edge Cases:</strong> {editorial.edgeCases.join(", ")}</p>
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-zinc-100">Discussion</h3>
            <p>{problem.discussion}</p>
          </div>

          <div>
            <h3 className="mb-2 text-base font-semibold text-zinc-100">Related Problems</h3>
            <div className="flex flex-wrap gap-2">
              {related.map((item) => (
                <Badge key={item.slug}>{item.title}</Badge>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <div className="flex flex-wrap items-center gap-2">
          {allLanguages.map((lang) => (
            <Button
              key={lang}
              variant={language === lang ? "default" : "secondary"}
              size="sm"
              onClick={() => setLanguage(lang)}
            >
              {languageLabel[lang]}
            </Button>
          ))}
        </div>

        <CodeEditorPanel language={language} code={activeCode} onChange={setActiveCode} />

        <div>
          <h3 className="mb-2 text-sm font-semibold text-zinc-100">Custom Input</h3>
          <textarea
            value={customInput}
            onChange={(event) => setCustomInput(event.target.value)}
            className="h-24 w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2 text-xs text-zinc-100 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={handleRun} disabled={isRunning} variant="secondary">
            <Play className="mr-2 h-4 w-4" />
            {isRunning ? "Running..." : "Run Code"}
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-zinc-100">Console Output</h3>
          {runResults.length === 0 ? (
            <p className="text-xs text-zinc-400">Run results will appear here.</p>
          ) : (
            <div className="space-y-2">
              {runResults.map((result, index) => (
                <Card key={`run-${index}`}>
                  <CardContent className="p-3 text-xs">
                    <p className="mb-1 font-semibold">Case {index + 1}: {result.verdict}</p>
                    <p>Expected: {result.expectedOutput || "(custom)"}</p>
                    <p>Actual: {result.actualOutput}</p>
                    <p>Execution Time: {result.time ?? "N/A"} s</p>
                    <p>Memory Used: {result.memory ?? "N/A"} KB</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2 border-t border-zinc-800 pt-3">
          <h3 className="text-sm font-semibold text-zinc-100">Submission</h3>
          <p className="text-xs text-zinc-300">Verdict: {submitVerdict || "Not submitted"}</p>
          {submitResults.map((result, index) => (
            <p key={`submit-${index}`} className="text-xs text-zinc-400">
              Hidden Case {index + 1}: {result.verdict} | Time {result.time ?? "N/A"} s | Memory {result.memory ?? "N/A"} KB
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
