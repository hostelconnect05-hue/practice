"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, RefreshCw, Trophy, ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { verbalAbilityQuestions } from "@/data/verbal-questions";

export function VerbalQuizWorkspace() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectOption = (questionId: number, optionKey: string) => {
    // Immediate feedback allowed prior to submission or live
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    verbalAbilityQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const total = verbalAbilityQuestions.length;
  const percentage = Math.round((score / total) * 100);

  const handleReattempt = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,_rgba(16,185,129,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.12),transparent_35%),#09090b] px-4 py-8 text-zinc-100">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-zinc-300 hover:text-zinc-100">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 px-3 py-1">
            Section 3: Verbal Ability
          </Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight text-zinc-50">
            Verbal Ability Assessment
          </h1>
          <p className="text-sm text-zinc-400">
            Select an option for each question to see immediate feedback. Click <strong>Submit Assessment</strong> at the bottom to view your final score.
          </p>
        </div>

        {/* Quiz Submission Score Banner */}
        {submitted && (
          <Card className="border-emerald-500/40 bg-emerald-950/20 text-zinc-100 shadow-xl">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-50">Assessment Results</h2>
                    <p className="text-sm text-zinc-300 mt-1">
                      You scored <strong className="text-emerald-400 text-lg">{score}</strong> / {total} ({percentage}%)
                    </p>
                  </div>
                </div>
                <Button onClick={handleReattempt} className="gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-5">
                  <RefreshCw className="h-4 w-4" />
                  Reattempt Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Question List */}
        <div className="space-y-6">
          {verbalAbilityQuestions.map((q, idx) => {
            const userSelection = selectedAnswers[q.id];

            return (
              <Card key={q.id} className="border-zinc-800 bg-zinc-900/70 backdrop-blur">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold text-emerald-400">
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
                        {userSelection === q.correctAnswer ? "Correct" : "Incorrect"}
                      </Badge>
                  {q.passage && (
                    <div className="mt-3 rounded-xl border border-sky-500/30 bg-sky-950/20 p-4 text-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-sky-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                          {q.passage.title}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-300 whitespace-pre-line">
                        {q.passage.text}
                      </p>
                    </div>
                  )}

                  {q.sentence && (
                    <p className="mt-2 rounded-lg bg-zinc-950/80 p-3 font-medium text-zinc-100 border border-zinc-800/80 whitespace-pre-line font-mono text-xs leading-relaxed">
                      {q.sentence}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="space-y-3 pt-2">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {q.options.map((opt) => {
                      const isSelected = userSelection === opt.key;
                      const isCorrect = opt.key === q.correctAnswer;

                      let btnStyle = "border-zinc-800 bg-zinc-900/90 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800";

                      if (userSelection) {
                        if (isSelected) {
                          if (isCorrect) {
                            btnStyle = "border-emerald-500/60 bg-emerald-950/40 text-emerald-200 font-semibold ring-1 ring-emerald-500/50";
                          } else {
                            btnStyle = "border-rose-500/60 bg-rose-950/40 text-rose-200 font-semibold ring-1 ring-rose-500/50";
                          }
                        } else if (isCorrect) {
                          btnStyle = "border-emerald-500/40 bg-emerald-950/20 text-emerald-300 font-medium";
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectOption(q.id, opt.key)}
                          className={`flex items-center justify-between rounded-xl border p-3 text-left transition ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">
                              {opt.key}
                            </span>
                            <span className="text-sm">{opt.text}</span>
                          </div>

                          {userSelection && isSelected && (
                            <span>
                              {isCorrect ? (
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                              ) : (
                                <XCircle className="h-5 w-5 text-rose-400 shrink-0" />
                              )}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Explanation Block */}
                  {userSelection && (
                    <div
                      className={`mt-4 rounded-xl border p-4 text-sm transition ${
                        userSelection === q.correctAnswer
                          ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-200"
                          : "border-rose-500/30 bg-rose-950/20 text-rose-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-semibold mb-1">
                        {userSelection === q.correctAnswer ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                            Correct Answer!
                          </>
                        ) : (
                          <>
                            <XCircle className="h-4 w-4 text-rose-400" />
                            Wrong Answer (Correct Answer: Option {q.correctAnswer})
                          </>
                        )}
                      </div>
                      <p className="text-xs opacity-90 leading-relaxed mt-1 whitespace-pre-line">
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Submit Button Section */}
        <div className="flex items-center justify-center pt-4">
          {!submitted ? (
            <Button
              onClick={() => {
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto min-w-[240px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-6 text-base shadow-lg shadow-emerald-950/50"
            >
              Submit Assessment
            </Button>
          ) : (
            <Button
              onClick={handleReattempt}
              variant="outline"
              className="w-full sm:w-auto gap-2 border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/30 font-semibold py-6 text-base"
            >
              <RefreshCw className="h-4 w-4" />
              Reattempt Assessment
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
