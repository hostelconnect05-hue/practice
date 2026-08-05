import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DifficultyPill } from "@/components/problem/difficulty-pill";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProblemListItem } from "@/types/problem";

export function ProblemCard({ problem }: { problem: ProblemListItem }) {
  return (
    <Card className="group transition hover:border-zinc-600">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between gap-3">
          <DifficultyPill difficulty={problem.difficulty} />
          <span className="text-xs text-zinc-400">Acceptance {problem.acceptance}</span>
        </div>
        <CardTitle className="text-zinc-100">{problem.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-5 flex flex-wrap gap-2">
          {problem.topics.map((topic) => (
            <Badge key={topic} className="text-zinc-300">
              {topic}
            </Badge>
          ))}
        </div>
        <Link href={`/problems/${problem.slug}`}>
          <Button className="w-full justify-between" variant="secondary">
            Solve
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
