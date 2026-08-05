import { Badge } from "@/components/ui/badge";
import type { Difficulty } from "@/types/problem";

const colorMap: Record<Difficulty, string> = {
  Easy: "border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
  Medium: "border-orange-500/40 bg-orange-500/15 text-orange-300",
  Hard: "border-red-500/40 bg-red-500/15 text-red-300",
};

export function DifficultyPill({ difficulty }: { difficulty: Difficulty }) {
  return <Badge className={colorMap[difficulty]}>{difficulty}</Badge>;
}
