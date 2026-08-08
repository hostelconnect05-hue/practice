import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import type {
  EditorialData,
  ProblemBundle,
  ProblemData,
  ProblemListItem,
  TestCase,
} from "@/types/problem";

const root = process.cwd();

const problemDir = path.join(root, "content", "problems");
const editorialDir = path.join(root, "content", "editorials");
const templateDir = path.join(root, "content", "templates");
const visibleTestDir = path.join(root, "content", "testcases", "visible");
const hiddenTestDir = path.join(root, "content", "testcases", "hidden");
const problemOrder = [
  "minimum-index",
  "smallest-missing-even-number",
  "5-days-challenge",
  "shopping-cart",
  "index-sort",
  "frequency-sync",
  "vowel-consonant-rearrange",
  "river-current",
];

async function loadJson<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

export const getProblemList = cache(async (): Promise<ProblemListItem[]> => {
  const files = await fs.readdir(problemDir);
  const problems = await Promise.all(
    files
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        const problem = await loadJson<ProblemData>(
          path.join(problemDir, file),
        );
        return {
          slug: problem.slug,
          title: problem.title,
          difficulty: problem.difficulty,
          topics: problem.topics,
          acceptance: problem.acceptance,
        };
      }),
  );

  return problems.sort((a, b) => {
    const idxA = problemOrder.indexOf(a.slug);
    const idxB = problemOrder.indexOf(b.slug);
    const orderA = idxA === -1 ? 999 : idxA;
    const orderB = idxB === -1 ? 999 : idxB;
    return orderA - orderB;
  });
});

export const getProblemBundle = cache(
  async (rawSlug: string): Promise<ProblemBundle | null> => {
    const normalizedSlug = decodeURIComponent(rawSlug)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
    const problemPath = path.join(problemDir, `${normalizedSlug}.json`);

    try {
      const [problem, editorial, templates, visibleTests] = await Promise.all([
        loadJson<ProblemData>(problemPath),
        loadJson<EditorialData>(
          path.join(editorialDir, `${normalizedSlug}.json`),
        ),
        loadJson<ProblemBundle["templates"]>(
          path.join(templateDir, `${normalizedSlug}.json`),
        ),
        loadJson<TestCase[]>(
          path.join(visibleTestDir, `${normalizedSlug}.json`),
        ),
      ]);

      return {
        problem,
        editorial,
        templates,
        visibleTests,
      };
    } catch {
      return null;
    }
  },
);

export async function getHiddenTests(rawSlug: string): Promise<TestCase[]> {
  const normalizedSlug = decodeURIComponent(rawSlug)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
  return loadJson<TestCase[]>(
    path.join(hiddenTestDir, `${normalizedSlug}.json`),
  );
}

export async function getVisibleTests(rawSlug: string): Promise<TestCase[]> {
  const normalizedSlug = decodeURIComponent(rawSlug)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
  return loadJson<TestCase[]>(
    path.join(visibleTestDir, `${normalizedSlug}.json`),
  );
}
