import { BarChart3, CheckCircle2, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProgressOverview({
  solved,
  attempted,
  successRate,
}: {
  solved: number;
  attempted: number;
  successRate: number;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <div>
            <p className="text-xs text-zinc-400">Solved</p>
            <p className="text-xl font-semibold text-zinc-100">{solved}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <ClipboardList className="h-5 w-5 text-orange-300" />
          <div>
            <p className="text-xs text-zinc-400">Attempted</p>
            <p className="text-xl font-semibold text-zinc-100">{attempted}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <BarChart3 className="h-5 w-5 text-sky-300" />
          <div>
            <p className="text-xs text-zinc-400">Success Rate</p>
            <p className="text-xl font-semibold text-zinc-100">{successRate.toFixed(1)}%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
