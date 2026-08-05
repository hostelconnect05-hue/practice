import { ProblemCard } from "@/components/problem/problem-card";
import { ProgressOverview } from "@/components/problem/progress-overview";
import { ThemeToggle } from "@/components/theme-toggle";
import { getProblemList } from "@/lib/problems";
import { getProgress } from "@/lib/progress";

export default async function HomePage() {
  const [problems, progress] = await Promise.all([getProblemList(), getProgress()]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,_rgba(16,185,129,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.12),transparent_35%),#09090b] px-4 py-8 text-zinc-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.22em] text-zinc-400">Virtusa Online Assessment Practice</p>
            <h1 className="text-4xl font-black tracking-tight text-zinc-50">Virtusa OA Practice</h1>
            <p className="mt-3 max-w-2xl text-zinc-300">
              Practice real Virtusa Online Assessment questions with a LeetCode-like interface.
            </p>
          </div>
          <ThemeToggle />
        </header>

        <ProgressOverview
          solved={progress.solved}
          attempted={progress.attempted}
          successRate={progress.successRate}
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => (
            <ProblemCard key={problem.slug} problem={problem} />
          ))}
        </section>
      </div>
    </main>
  );
}
