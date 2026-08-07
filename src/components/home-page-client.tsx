"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, ArrowRight, BookOpen, Layers, MessageSquare, CheckCircle2 } from "lucide-react";
import { ProblemCard } from "@/components/problem/problem-card";
import { ProgressOverview } from "@/components/problem/progress-overview";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProblemListItem } from "@/types/problem";

export function HomePageClient({
  problems,
  progress,
}: {
  problems: ProblemListItem[];
  progress: { solved: number; attempted: number; successRate: number };
}) {
  const [activeTab, setActiveTab] = useState<"all" | "coding" | "verbal">("all");

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,_rgba(16,185,129,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.12),transparent_35%),#09090b] px-4 py-8 text-zinc-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Virtusa Online Assessment Practice
            </p>
            <h1 className="text-4xl font-black tracking-tight text-zinc-50">Virtusa OA Practice</h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Practice real Virtusa Online Assessment questions including Coding Problems & Verbal Ability.
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Navigation Tabs (All / Coding / Verbal Ability) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === "all"
                  ? "bg-zinc-800 text-emerald-400 shadow-sm border border-zinc-700/60"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              <Layers className="h-4 w-4" />
              All Overview
            </button>

            <button
              onClick={() => setActiveTab("coding")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === "coding"
                  ? "bg-emerald-500/10 text-emerald-400 shadow-sm border border-emerald-500/30"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              <Code2 className="h-4 w-4 text-emerald-400" />
              Coding Problems
              <span className="ml-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-300">
                {problems.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("verbal")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === "verbal"
                  ? "bg-sky-500/10 text-sky-400 shadow-sm border border-sky-500/30"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              <MessageSquare className="h-4 w-4 text-sky-400" />
              Section 3: Verbal Ability
              <span className="ml-1 rounded-full bg-sky-500/20 px-2 py-0.5 text-xs font-bold text-sky-300">
                27 Qs
              </span>
            </button>
          </div>

          <div className="text-xs text-zinc-500 hidden md:block font-mono">
            Virtusa OA Assessment Portal
          </div>
        </div>

        {/* Progress Overview Statistics */}
        <ProgressOverview
          solved={progress.solved}
          attempted={progress.attempted}
          successRate={progress.successRate}
        />

        {/* Section Header */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {activeTab === "verbal" ? (
              <MessageSquare className="h-5 w-5 text-sky-400" />
            ) : (
              <Code2 className="h-5 w-5 text-emerald-400" />
            )}
            <h2 className="text-xl font-bold text-zinc-100">
              {activeTab === "verbal"
                ? "Section 3: Verbal Ability & Reading Comprehension"
                : activeTab === "coding"
                ? "Coding Problem Statements"
                : "Assessment Modules & Coding Problems"}
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            {activeTab === "verbal" ? "27 Practice Questions with 10 Reading Comprehension Passages" : "Select a problem to launch the workspace"}
          </span>
        </div>

        {/* Tab 1: Verbal Ability Card (when verbal or all tab selected) */}
        {(activeTab === "all" || activeTab === "verbal") && (
          <div className="mb-6">
            <Card className="border-sky-500/30 bg-sky-950/15 backdrop-blur hover:border-sky-500/50 transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge className="bg-sky-500/20 text-sky-300 border-sky-500/30">
                    Section 3 • Reading Comprehension & Grammar
                  </Badge>
                  <span className="text-xs text-sky-400 font-semibold">27 Questions (10 Passages + Grammar)</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-50 mt-2">
                  Section 3: Verbal Ability & Reading Comprehension
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Complete collection of all 10 Virtusa Reading Comprehension Passages (Gift-Giving, Storr Lochs Monster, Oral History, Carbon Dioxide, Bird Flight, Body Fat, Light Spectrum, Guam Snakes, Coastal Blue-Carbon, Van Gogh) along with grammar, vocabulary, sentence correction, and subject-verb agreement questions.
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" /> Instant Feedback
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" /> Detailed Explanations
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" /> Reattempt Enabled
                  </span>
                </div>
                <Link href="/verbal-ability">
                  <Button className="w-full sm:w-auto mt-2 justify-between gap-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6">
                    Start Verbal Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tab 2: Coding Problems Grid (when coding or all tab selected) */}
        {(activeTab === "all" || activeTab === "coding") && (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {problems.map((problem) => (
              <ProblemCard key={problem.slug} problem={problem} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
