"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  RefreshCw,
  Trophy,
  ArrowLeft,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { analyticalQuestions } from "@/data/analytical-questions";

const STORAGE_KEY_ANSWERS = "virtusa_analytical_answers";
const STORAGE_KEY_SUBMITTED = "virtusa_analytical_submitted";

export function AnalyticalQuizWorkspace() {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem(STORAGE_KEY_ANSWERS);
      const savedSubmitted = localStorage.getItem(STORAGE_KEY_SUBMITTED);
      if (savedAnswers) {
        setSelectedAnswers(JSON.parse(savedAnswers));
      }
      if (savedSubmitted) {
        setSubmitted(JSON.parse(savedSubmitted));
      }
    } catch (e) {
      console.error("Failed to load saved analytical state", e);
    }
  }, []);

  const handleSelectOption = (questionId: number, optionKey: string) => {
    setSelectedAnswers((prev) => {
      const updated = {
        ...prev,
        [questionId]: optionKey,
      };
      try {
        localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save answer", e);
      }
      return updated;
    });
  };

  const calculateScore = () => {
    let score = 0;
    analyticalQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const total = analyticalQuestions.length;
  const percentage = total === 0 ? 0 : Math.round((score / total) * 100);

  const handleSubmit = () => {
    setSubmitted(true);
    try {
      localStorage.setItem(STORAGE_KEY_SUBMITTED, JSON.stringify(true));
    } catch (e) {
      console.error("Failed to save submitted state", e);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReattempt = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    try {
      localStorage.removeItem(STORAGE_KEY_ANSWERS);
      localStorage.removeItem(STORAGE_KEY_SUBMITTED);
    } catch (e) {
      console.error("Failed to clear state", e);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,_rgba(168,85,247,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.12),transparent_35%),#09090b] px-4 py-8 text-zinc-100">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <Link href="/">
            <Button
              variant="ghost"
              className="gap-2 text-zinc-300 hover:text-zinc-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 px-3 py-1">
            Section 8: Analytical Ability
          </Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight text-zinc-50">
            Section 8: Analytical Ability Assessment
          </h1>
          <p className="text-sm text-zinc-400">
            Practice analytical reasoning questions on seating arrangements,
            letter & word coding-decoding, blood relations, order & ranking
            queues, and logical syllogisms. Select an option for immediate
            feedback.
          </p>
        </div>

        {/* Score Banner */}
        {submitted && (
          <Card className="border-purple-500/40 bg-purple-950/20 backdrop-blur">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-purple-400" />
                <CardTitle className="text-xl font-bold text-purple-300">
                  Assessment Complete!
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-baseline gap-4">
                <span className="text-4xl font-black text-purple-400">
                  {score} / {total}
                </span>
                <span className="text-lg font-semibold text-zinc-300">
                  ({percentage}% Score)
                </span>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  onClick={handleReattempt}
                  className="gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reattempt Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Question List */}
        <div className="space-y-6">
          {analyticalQuestions.map((q, idx) => {
            const userSelection = selectedAnswers[q.id];

            return (
              <Card
                key={q.id}
                className="border-zinc-800 bg-zinc-900/70 backdrop-blur"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold text-purple-400">
                        Q{idx + 1}
                      </span>
                      <CardTitle className="text-base font-semibold text-zinc-200">
                        {q.question}
                      </CardTitle>
                    </div>
                    {userSelection && (
                      <Badge
                        className={
                          userSelection === q.correctAnswer
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                            : "bg-rose-500/20 text-rose-300 border-rose-500/30"
                        }
                      >
                        {userSelection === q.correctAnswer
                          ? "Correct"
                          : "Incorrect"}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-1">
                    <Badge className="border border-zinc-700 bg-transparent text-zinc-400 text-[10px]">
                      {q.topic}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 pt-2">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {q.options.map((opt) => {
                      const isSelected = userSelection === opt.key;
                      const isCorrect = opt.key === q.correctAnswer;

                      let btnStyle =
                        "border-zinc-800 bg-zinc-900/90 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800";

                      if (userSelection) {
                        if (isSelected) {
                          if (isCorrect) {
                            btnStyle =
                              "border-emerald-500/60 bg-emerald-950/40 text-emerald-200 font-semibold ring-1 ring-emerald-500/50";
                          } else {
                            btnStyle =
                              "border-rose-500/60 bg-rose-950/40 text-rose-200 font-semibold ring-1 ring-rose-500/50";
                          }
                        } else if (isCorrect) {
                          btnStyle =
                            "border-emerald-500/40 bg-emerald-950/20 text-emerald-300 border-dashed";
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectOption(q.id, opt.key)}
                          className={`flex items-center justify-between rounded-lg border p-3 text-left text-sm transition ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-zinc-800/80 text-xs font-bold text-zinc-300">
                              {opt.key}
                            </span>
                            <span>{opt.text}</span>
                          </div>
                          {userSelection && isSelected && (
                            <span>
                              {isCorrect ? (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <XCircle className="h-4 w-4 text-rose-400" />
                              )}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Explanation Card */}
                  {userSelection && (
                    <div className="mt-3 rounded-xl border border-purple-500/30 bg-purple-950/20 p-4 text-zinc-200">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="h-4 w-4 text-purple-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                          Analytical Derivation
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-300">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Submit Assessment Button */}
        {!submitted && (
          <div className="pt-4 text-center">
            <Button
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-6 text-base shadow-lg shadow-purple-900/30"
            >
              Submit Analytical Assessment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
