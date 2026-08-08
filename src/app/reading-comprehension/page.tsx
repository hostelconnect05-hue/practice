import { VerbalQuizWorkspace } from "@/components/verbal-quiz-workspace";

export const metadata = {
  title: "Reading Comprehension | Virtusa OA Practice",
  description:
    "Practice Virtusa Reading Comprehension passages (Passages 1 to 10) with instant feedback and score tracking.",
};

export default function ReadingComprehensionPage() {
  return (
    <VerbalQuizWorkspace
      sectionFilter="Reading Comprehension"
      title="Reading Comprehension Assessment"
      subtitle="Practice all 10 Virtusa Reading Comprehension passages (Gift-Giving, Storr Lochs Monster, Oral History, Climate, etc.) with instant answer feedback and detailed explanations."
      badgeText="Reading Comprehension (Passages 1–10)"
    />
  );
}
