"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Circle, XCircle } from "lucide-react";
import { DifficultyPill } from "@/components/problem/difficulty-pill";
import { cn } from "@/lib/utils";
import type { ProblemListItem } from "@/types/problem";

export function ProblemSidebar({
  problems,
  solved: initialSolved = [],
  currentSlug,
}: {
  problems: ProblemListItem[];
  solved?: string[];
  currentSlug?: string;
}) {
  const [solvedList, setSolvedList] = useState<string[]>(initialSolved);
  const [attemptedList, setAttemptedList] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedSolved = localStorage.getItem("solved_problems");
        if (storedSolved) {
          const parsed = JSON.parse(storedSolved) as string[];
          setSolvedList(Array.from(new Set([...initialSolved, ...parsed])));
        }

        const storedAttempted = localStorage.getItem("attempted_problems");
        if (storedAttempted) {
          setAttemptedList(JSON.parse(storedAttempted) as string[]);
        }
      } catch {}
    }
  }, [initialSolved]);

  return (
    <aside className="h-full overflow-y-auto border-r border-zinc-800 bg-zinc-950/90 p-3">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-300">
        Problems
      </h2>
      <div className="space-y-2">
        {problems.map((problem) => {
          const isSolved = solvedList.includes(problem.slug);
          const isAttempted = attemptedList.includes(problem.slug) && !isSolved;
          const isActive = currentSlug === problem.slug;

          return (
            <Link
              key={problem.slug}
              href={`/problems/${problem.slug}`}
              className={cn(
                "block rounded-lg border p-3 transition",
                isActive
                  ? "border-emerald-500/40 bg-emerald-500/10"
                  : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700",
              )}
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="text-sm font-medium text-zinc-100">
                  {problem.title}
                </span>
                {isSolved ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                ) : isAttempted ? (
                  <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                ) : (
                  <Circle className="h-4 w-4 shrink-0 text-zinc-500" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <DifficultyPill difficulty={problem.difficulty} />
                <span className="text-xs text-zinc-500">
                  {problem.acceptance}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
