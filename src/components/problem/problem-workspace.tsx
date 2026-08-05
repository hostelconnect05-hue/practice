"use client";

import { useMemo, useState } from "react";
import { Brain, History, Play, Send, X } from "lucide-react";
import { CodeEditorPanel } from "@/components/problem/code-editor-panel";
import { DifficultyPill } from "@/components/problem/difficulty-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
  java: "Java",
  python: "Python",
};

const allLanguages: LanguageKey[] = ["java", "python"];

export function ProblemWorkspace({
  bundle,
  related,
}: {
  bundle: ProblemBundle;
  related: ProblemListItem[];
}) {
  const { problem, templates, editorial, visibleTests } = bundle;
  const [language, setLanguage] = useState<LanguageKey>("java");

  // Load saved code and solved state from localStorage
  const [codeByLanguage, setCodeByLanguage] = useState<Record<LanguageKey, string>>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`code_${problem.slug}`);
      if (saved) {
        try { return JSON.parse(saved); } catch {}
      }
    }
    return templates;
  });

  const [solvedSet, setSolvedSet] = useState<Set<string>>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("solved_problems");
      if (saved) {
        try { return new Set(JSON.parse(saved)); } catch {}
      }
    }
    return new Set();
  });

  const [customInput, setCustomInput] = useState(visibleTests[0]?.input ?? "");
  const [runResults, setRunResults] = useState<RunCaseResult[]>([]);
  const [submitResults, setSubmitResults] = useState<RunCaseResult[]>([]);
  const [submitVerdict, setSubmitVerdict] = useState<string>("");

  type SubmissionItem = {
    id: string;
    timestamp: string;
    language: LanguageKey;
    verdict: string;
    code: string;
  };

  const [submissionHistory, setSubmissionHistory] = useState<SubmissionItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`submissions_${problem.slug}`);
      if (saved) {
        try { return JSON.parse(saved); } catch {}
      }
    }
    return [];
  });

  const [showHistoryModal, setShowHistoryModal] = useState(false);
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
    setCodeByLanguage((prev) => {
      const updated = { ...prev, [language]: value };
      if (typeof window !== "undefined") {
        localStorage.setItem(`code_${problem.slug}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  const markProblemAttempted = () => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("attempted_problems");
        const list = stored ? (JSON.parse(stored) as string[]) : [];
        if (!list.includes(problem.slug)) {
          list.push(problem.slug);
          localStorage.setItem("attempted_problems", JSON.stringify(list));
        }
      } catch {}
    }
  };

  const handleRun = async () => {
    markProblemAttempted();
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
    markProblemAttempted();
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

      // Save submission entry to history
      const newSubmission: SubmissionItem = {
        id: Math.random().toString(36).substring(7),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        language,
        verdict: body.verdict,
        code: activeCode,
      };

      setSubmissionHistory((prev) => {
        const updated = [newSubmission, ...prev];
        if (typeof window !== "undefined") {
          localStorage.setItem(`submissions_${problem.slug}`, JSON.stringify(updated));
        }
        return updated;
      });

      if (body.verdict === "Accepted") {
        setSolvedSet((prev) => {
          const next = new Set(prev);
          next.add(problem.slug);
          if (typeof window !== "undefined") {
            localStorage.setItem("solved_problems", JSON.stringify(Array.from(next)));
          }
          return next;
        });
      }
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

        <div className="flex flex-wrap items-center gap-2">
          <Button onClick={handleRun} disabled={isRunning} variant="secondary">
            <Play className="mr-2 h-4 w-4" />
            {isRunning ? "Running..." : "Run Code"}
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <Button
            onClick={() => setShowHistoryModal(true)}
            variant="outline"
            className="border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800"
          >
            <History className="mr-2 h-4 w-4 text-emerald-400" />
            Submissions ({submissionHistory.length})
          </Button>
        </div>

        {/* Submissions Modal / Drawer */}
        {showHistoryModal ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <History className="h-5 w-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-zinc-50">Past Submissions ({submissionHistory.length})</h3>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowHistoryModal(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {submissionHistory.length === 0 ? (
                <p className="py-8 text-center text-sm text-zinc-400">No past submitted answers for this problem yet.</p>
              ) : (
                <div className="max-h-96 space-y-3 overflow-y-auto pr-2">
                  {submissionHistory.map((sub, idx) => (
                    <div
                      key={sub.id || idx}
                      onClick={() => {
                        setLanguage(sub.language);
                        setActiveCode(sub.code);
                        setShowHistoryModal(false);
                      }}
                      className="group cursor-pointer rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-xs space-y-2 transition hover:border-emerald-500/50 hover:bg-zinc-900"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "font-bold text-sm",
                              sub.verdict === "Accepted" ? "text-emerald-400" : "text-rose-400"
                            )}
                          >
                            {sub.verdict}
                          </span>
                          <span className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] font-mono text-zinc-300 uppercase">
                            {sub.language}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-zinc-500">{sub.timestamp}</span>
                          <span className="text-[11px] font-medium text-emerald-400 opacity-0 transition group-hover:opacity-100">
                            Click to Open →
                          </span>
                        </div>
                      </div>

                      <pre className="max-h-36 overflow-x-auto rounded border border-zinc-800/80 bg-zinc-950 p-2 font-mono text-[11px] text-zinc-300 pointer-events-none">
                        {sub.code}
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* Submission Verdict Banner */}
        {submitVerdict ? (
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-zinc-100">Submission Result</h3>
              <span
                className={cn(
                  "font-bold text-sm",
                  submitVerdict === "Accepted" ? "text-emerald-400" : "text-rose-400"
                )}
              >
                {submitVerdict}
              </span>
            </div>
            <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
              {submitResults.map((result, index) => (
                <div key={`sub-res-${index}`} className="flex items-center justify-between rounded bg-zinc-900/60 p-2 text-xs">
                  <span className="text-zinc-300 font-medium">Hidden Case {index + 1}</span>
                  <span className={result.passed ? "text-emerald-400 font-semibold" : "text-rose-400 font-semibold"}>
                    {result.verdict} {result.time ? `(${result.time}s)` : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-100">Console Output</h3>
            {runResults.length > 0 ? (
              <span className="text-xs text-zinc-400">{runResults.filter(r => r.passed).length} / {runResults.length} Passed</span>
            ) : null}
          </div>

          {runResults.length === 0 ? (
            <p className="text-xs text-zinc-400">Run results will appear here.</p>
          ) : (
            <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
              {runResults.map((result, index) => (
                <Card key={`run-${index}`} className="border-zinc-800 bg-zinc-950">
                  <CardContent className="p-3 text-xs space-y-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-zinc-200">Case {index + 1}</span>
                      <span className={result.passed ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                        {result.verdict}
                      </span>
                    </div>
                    <p className="text-zinc-400">Expected: <span className="font-mono text-zinc-200">{result.expectedOutput || "(custom)"}</span></p>
                    <p className="text-zinc-400">Actual: <span className="font-mono text-zinc-200">{result.actualOutput}</span></p>
                    <div className="flex gap-4 pt-1 text-[11px] text-zinc-500">
                      <span>Time: {result.time ?? "N/A"} s</span>
                      <span>Memory: {result.memory ?? "N/A"} KB</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
