"use client";

import { useEffect, useState } from "react";
import { BarChart3, CheckCircle2, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProgressOverview({
  solved: initialSolved = 0,
  attempted: initialAttempted = 0,
  successRate: initialSuccessRate = 0,
}: {
  solved?: number;
  attempted?: number;
  successRate?: number;
}) {
  const [stats, setStats] = useState({
    solved: initialSolved,
    attempted: initialAttempted,
    successRate: initialSuccessRate,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const solvedArr = JSON.parse(
          localStorage.getItem("solved_problems") || "[]",
        ) as string[];
        const attemptedArr = JSON.parse(
          localStorage.getItem("attempted_problems") || "[]",
        ) as string[];

        // Combine solved into attempted set to ensure solved is a subset of attempted
        const uniqueAttempted = Array.from(
          new Set([...attemptedArr, ...solvedArr]),
        );
        const uniqueSolved = Array.from(new Set(solvedArr));

        const solvedCount = Math.max(initialSolved, uniqueSolved.length);
        const attemptedCount = Math.max(
          initialAttempted,
          uniqueAttempted.length,
        );
        const rate =
          attemptedCount === 0 ? 0 : (solvedCount / attemptedCount) * 100;

        setStats({
          solved: solvedCount,
          attempted: attemptedCount,
          successRate: rate,
        });
      } catch {}
    }
  }, [initialSolved, initialAttempted]);

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <div>
            <p className="text-xs text-zinc-400">Solved</p>
            <p className="text-xl font-semibold text-zinc-100">
              {stats.solved}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <ClipboardList className="h-5 w-5 text-orange-300" />
          <div>
            <p className="text-xs text-zinc-400">Attempted</p>
            <p className="text-xl font-semibold text-zinc-100">
              {stats.attempted}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <BarChart3 className="h-5 w-5 text-sky-300" />
          <div>
            <p className="text-xs text-zinc-400">Success Rate</p>
            <p className="text-xl font-semibold text-zinc-100">
              {stats.successRate.toFixed(1)}%
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
