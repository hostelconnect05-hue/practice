"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, ArrowRight, BookOpen, Layers, MessageSquare, CheckCircle2, Terminal, Calculator, Brain } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<"all" | "coding" | "rc" | "verbal">("all");

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
              Practice real Virtusa Online Assessment questions including Coding, Reading Comprehension, & Verbal Ability.
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Navigation Tabs */}
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
              onClick={() => setActiveTab("rc")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === "rc"
                  ? "bg-purple-500/10 text-purple-400 shadow-sm border border-purple-500/30"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              <BookOpen className="h-4 w-4 text-purple-400" />
              Reading Comprehension
              <span className="ml-1 rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-bold text-purple-300">
                23 Qs
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
              Verbal Ability
              <span className="ml-1 rounded-full bg-sky-500/20 px-2 py-0.5 text-xs font-bold text-sky-300">
                9 Qs
              </span>
            </button>

            <button
              onClick={() => setActiveTab("tech" as any)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                (activeTab as string) === "tech"
                  ? "bg-amber-500/10 text-amber-400 shadow-sm border border-amber-500/30"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              <Terminal className="h-4 w-4 text-amber-400" />
              Technical Skills
              <span className="ml-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-bold text-amber-300">
                98 Qs
              </span>
            </button>

            <button
              onClick={() => setActiveTab("aptitude" as any)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                (activeTab as string) === "aptitude"
                  ? "bg-orange-500/10 text-orange-400 shadow-sm border border-orange-500/30"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              <Calculator className="h-4 w-4 text-orange-400" />
              Aptitude
              <span className="ml-1 rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-bold text-orange-300">
                20 Qs
              </span>
            </button>

            <button
              onClick={() => setActiveTab("analytical" as any)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                (activeTab as string) === "analytical"
                  ? "bg-pink-500/10 text-pink-400 shadow-sm border border-pink-500/30"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
              }`}
            >
              <Brain className="h-4 w-4 text-pink-400" />
              Analytical Ability
              <span className="ml-1 rounded-full bg-pink-500/20 px-2 py-0.5 text-xs font-bold text-pink-300">
                22 Qs
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
            {activeTab === "rc" ? (
              <BookOpen className="h-5 w-5 text-purple-400" />
            ) : activeTab === "verbal" ? (
              <MessageSquare className="h-5 w-5 text-sky-400" />
            ) : (
              <Code2 className="h-5 w-5 text-emerald-400" />
            )}
            <h2 className="text-xl font-bold text-zinc-100">
              {activeTab === "rc"
                ? "Reading Comprehension Passages"
                : activeTab === "verbal"
                ? "Verbal Ability & Grammar Assessment"
                : activeTab === "coding"
                ? "Coding Problem Statements"
                : "Assessment Modules & Practice"}
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            {activeTab === "rc"
              ? "10 Virtusa Passages (23 Questions)"
              : activeTab === "verbal"
              ? "Grammar & Vocabulary Questions"
              : "Select a module to launch practice"}
          </span>
        </div>

        {/* Section 0: Coding Problems Module Card */}
        {activeTab === "all" && (
          <div className="mb-6 cursor-pointer" onClick={() => setActiveTab("coding")}>
            <Card className="border-emerald-500/30 bg-emerald-950/15 backdrop-blur hover:border-emerald-500/60 hover:bg-emerald-950/25 transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                    Hands-on Coding • 17 Problems
                  </Badge>
                  <span className="text-xs text-emerald-400 font-semibold">17 Algorithmic Coding Questions</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-50 mt-2 flex items-center justify-between">
                  <span>Coding Problem Statements Workspace</span>
                  <ArrowRight className="h-5 w-5 text-emerald-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Practice hands-on coding problems from Virtusa technical online assessments including Maze of People, Count Subsets (Minimum Subarrays), Minimum Length Substring (Full Frequency Match), Reduce the Bill, Count Valid Subarrays, Minimum Length Substring, Social Media Username, Vowel Consonant Rearrange, Frequency Sync, Shopping Cart, Coke Pack Purchase, Index Sort, Minimum Index, and more. Features Monaco code editor, testcase execution, verified 32-bit Java integer constraints, and real-time pass/fail evaluation.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Real-time Code Execution & Compiler
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Visible & Hidden Test Case Verification
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Java 32-bit Signed Integer Range Verified
                  </span>
                </div>
                <div className="inline-flex items-center justify-between gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition">
                  Open Coding Problems (17 Statements)
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 1: Reading Comprehension Card */}
        {(activeTab === "all" || activeTab === "rc") && (
          <div className="mb-4">
            <Card className="border-purple-500/30 bg-purple-950/15 backdrop-blur hover:border-purple-500/50 transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Section 3 • Reading Comprehension
                  </Badge>
                  <span className="text-xs text-purple-400 font-semibold">10 Passages • 23 Questions</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-50 mt-2">
                  Reading Comprehension Passages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Practice all 10 Reading Comprehension passages from Virtusa OAs (Gift-Giving, Storr Lochs Monster, Oral History & Anthropology, Carbon Dioxide & Climate, Bird Flight Evolution, Body Fat & Cognition, Light Spectrum, Guam Snakes, Coastal Blue-Carbon, Van Gogh & Fruit Colour) with instant right/wrong feedback, detailed passage explanations, score tracking, and reattempts.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" /> Full Passages Included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" /> Instant Feedback & Explanations
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" /> Reattempt Enabled
                  </span>
                </div>
                <Link href="/reading-comprehension">
                  <Button className="w-full sm:w-auto mt-2 justify-between gap-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6">
                    Start Reading Comprehension Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 2: Verbal Ability Card */}
        {(activeTab === "all" || activeTab === "verbal") && (
          <div className="mb-6">
            <Card className="border-sky-500/30 bg-sky-950/15 backdrop-blur hover:border-sky-500/50 transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge className="bg-sky-500/20 text-sky-300 border-sky-500/30">
                    Section 3 • Grammar & Vocabulary
                  </Badge>
                  <span className="text-xs text-sky-400 font-semibold">24 Questions</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-50 mt-2">
                  Section 3: Verbal Ability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Practice English grammar, sentence correction, vocabulary synonyms, article selection, and subject-verb agreement with instant feedback, explanations, live scoring, and reattempts.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" /> Sentence Correction & Errors
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" /> Synonyms & Articles
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

        {/* Section 3: Technical Skills Card */}
        {(activeTab === "all" || (activeTab as string) === "tech") && (
          <div className="mb-6">
            <Card className="border-amber-500/30 bg-amber-950/15 backdrop-blur hover:border-amber-500/50 transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                    Section 6 • Technical Skills MCQs
                  </Badge>
                  <span className="text-xs text-amber-400 font-semibold">98 Technical MCQs</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-50 mt-2">
                  Section 6: Technical Skills Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Practice core Virtusa Technical MCQs across C++, Object-Oriented Programming (OOP), Data Structures (Disjoint Set, Priority Queue, Stack, Linked List, Z Algorithm), Operating Systems (Scheduling, File Allocation, Bootloader, Deadlock), and SQL / DBMS (Joins, Date Functions, Grant Permissions, Triggers, Number Conversions).
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> C++ Access Specifiers & OOP
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> Data Structures & OS Kernels
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" /> SQL Queries & Permissions
                  </span>
                </div>
                <Link href="/technical-skills">
                  <Button className="w-full sm:w-auto mt-2 justify-between gap-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6">
                    Start Technical Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 4: Aptitude Card */}
        {(activeTab === "all" || (activeTab as string) === "aptitude") && (
          <div className="mb-6">
            <Card className="border-orange-500/30 bg-orange-950/15 backdrop-blur hover:border-orange-500/50 transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    Section 7 • Quantitative Aptitude
                  </Badge>
                  <span className="text-xs text-orange-400 font-semibold">12 Verified Aptitude Questions</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-50 mt-2">
                  Section 7: Quantitative Aptitude Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Practice mathematical problem solving on work & production rates, profit & loss percentages, successive discounts & marked prices, girl-to-boy weight ratio averages, speed-time-distance ratios, and multi-person work completion times.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange-400" /> Mathematically Verified Answers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange-400" /> Step-by-Step Derivation & Explanations
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange-400" /> Live Scoring & Reattempts
                  </span>
                </div>
                <Link href="/aptitude">
                  <Button className="w-full sm:w-auto mt-2 justify-between gap-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6">
                    Start Aptitude Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 5: Analytical Ability Card */}
        {(activeTab === "all" || (activeTab as string) === "analytical") && (
          <div className="mb-6">
            <Card className="border-pink-500/30 bg-pink-950/15 backdrop-blur hover:border-pink-500/50 transition">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                    Section 8 • Analytical Ability
                  </Badge>
                  <span className="text-xs text-pink-400 font-semibold">12 Verified Analytical Questions</span>
                </div>
                <CardTitle className="text-xl font-bold text-zinc-50 mt-2">
                  Section 8: Analytical Ability Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Practice logical and analytical reasoning on row seating arrangements, letter-word coding-decoding, blood relation family trees, queue order & ranking, and logical syllogism conclusions.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-pink-400" /> Linear Seating & Position Mapping
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-pink-400" /> Word Coding & Pattern Deduction
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-pink-400" /> Family Trees & Syllogism Rules
                  </span>
                </div>
                <Link href="/analytical-ability">
                  <Button className="w-full sm:w-auto mt-2 justify-between gap-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6">
                    Start Analytical Assessment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Section 6: Coding Problems Grid (Visible when Coding Problems tab is selected) */}
        {activeTab === "coding" && (
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
