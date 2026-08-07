import { VerbalQuizWorkspace } from "@/components/verbal-quiz-workspace";

export const metadata = {
  title: "Section 3: Verbal Ability | Virtusa OA Practice",
  description: "Practice Section 3 Verbal Ability questions from Virtusa Online Assessment with instant answers and score tracking.",
};

export default function VerbalAbilityPage() {
  return (
    <VerbalQuizWorkspace
      sectionFilter="Grammar & Vocabulary"
      title="Section 3: Verbal Ability Assessment"
      subtitle="Practice English grammar, sentence correction, vocabulary, synonyms, and subject-verb agreement with instant feedback and detailed explanations."
      badgeText="Section 3: Grammar & Vocabulary"
    />
  );
}
