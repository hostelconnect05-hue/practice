export type Difficulty = "Easy" | "Medium" | "Hard";

export type ProblemExample = {
  input: string;
  output: string;
  explanation: string;
};

export type ProblemData = {
  slug: string;
  title: string;
  difficulty: Difficulty;
  topics: string[];
  acceptance: string;
  statement: string;
  examples: ProblemExample[];
  constraints: string[];
  hints: string[];
  relatedProblems: string[];
  discussion: string;
};

export type EditorialData = {
  approach: string;
  observation: string;
  bruteForce: string;
  optimalSolution: string;
  timeComplexity: string;
  spaceComplexity: string;
  dryRun: string;
  edgeCases: string[];
};

export type TestCase = {
  input: string;
  expectedOutput: string;
};

export type LanguageKey = "java" | "python";

export type ProblemBundle = {
  problem: ProblemData;
  editorial: EditorialData;
  templates: Record<LanguageKey, string>;
  visibleTests: TestCase[];
};

export type ProblemListItem = Pick<
  ProblemData,
  "slug" | "title" | "difficulty" | "topics" | "acceptance"
>;
