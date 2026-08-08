import { HomePageClient } from "@/components/home-page-client";
import { getProblemList } from "@/lib/problems";
import { getProgress } from "@/lib/progress";

export default async function HomePage() {
  const [problems, progress] = await Promise.all([
    getProblemList(),
    getProgress(),
  ]);

  return <HomePageClient problems={problems} progress={progress} />;
}
