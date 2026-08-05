import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProblemSidebar } from "@/components/problem/problem-sidebar";
import { ProblemWorkspace } from "@/components/problem/problem-workspace";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { getProblemBundle, getProblemList } from "@/lib/problems";
import { getProgress } from "@/lib/progress";

export default async function ProblemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [problemList, progress, bundle] = await Promise.all([
    getProblemList(),
    getProgress(),
    getProblemBundle(slug),
  ]);

  if (!bundle) {
    notFound();
  }

  const relatedProblems = problemList.filter((item) => bundle.problem.relatedProblems.includes(item.slug));

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[280px_1fr]">
        <ProblemSidebar problems={problemList} solved={progress.solvedSlugs} currentSlug={slug} />

        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between border-b border-zinc-800 p-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <ThemeToggle />
          </header>

          <div className="p-4">
            <ProblemWorkspace bundle={bundle} related={relatedProblems} />
          </div>
        </div>
      </div>
    </main>
  );
}
