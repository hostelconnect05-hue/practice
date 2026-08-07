"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, ArrowRight, BookOpen, Layers } from "lucide-react";
import { ProblemCard } from "@/components/problem/problem-card";
import { ProgressOverview } from "@/components/problem/progress-overview";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import type { ProblemListItem } from "@/types/problem";

export function HomePageClient({
  problems,
  progress,
}: {
  problems: ProblemListItem[];
  progress: { solved: number; attempted: number; successRate: number };
}) {
  const [activeTab, setActiveTab] = useState<"all" | "coding">("all");

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
              Practice real Virtusa Online Assessment questions with a LeetCode-like interface.
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Navigation Tabs (All / Coding Problems) */}
        <div className="flex items-center justify-between gap-4 border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2">
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
              <span className="ml-1.5 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-300">
                {problems.length}
              </span>
            </button>
          </div>

          <div className="text-xs text-zinc-500 hidden sm:block font-mono">
            {problems.length} Assessment Questions Available
          </div>
        </div>

        {/* Progress Overview Statistics */}
        <ProgressOverview
          solved={progress.solved}
          attempted={progress.attempted}
          successRate={progress.successRate}
        />

        {/* Tab Content Header */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-zinc-100">
              {activeTab === "coding" ? "Coding Problem Statements" : "All Assessment Problems"}
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            Select a problem to open the interactive editor
          </span>
        </div>

        {/* Problem Grid List */}
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => (
            <ProblemCard key={problem.slug} problem={problem} />
          ))}
        </section>
      </div>
    </main>
  );
}
