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
const problemOrder = ["minimum-index", "smallest-missing-even-number", "5-days-challenge", "shopping-cart", "index-sort", "frequency-sync", "vowel-consonant-rearrange"];

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
        const problem = await loadJson<ProblemData>(path.join(problemDir, file));
        return {
          slug: problem.slug,
          title: problem.title,
          difficulty: problem.difficulty,
          topics: problem.topics,
          acceptance: problem.acceptance,
        };
      })
  );

  return problems.sort((a, b) => problemOrder.indexOf(a.slug) - problemOrder.indexOf(b.slug));
});

export const getProblemBundle = cache(async (slug: string): Promise<ProblemBundle | null> => {
  const problemPath = path.join(problemDir, `${slug}.json`);

  try {
    const [problem, editorial, templates, visibleTests] = await Promise.all([
      loadJson<ProblemData>(problemPath),
      loadJson<EditorialData>(path.join(editorialDir, `${slug}.json`)),
      loadJson<ProblemBundle["templates"]>(path.join(templateDir, `${slug}.json`)),
      loadJson<TestCase[]>(path.join(visibleTestDir, `${slug}.json`)),
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
});

export async function getHiddenTests(slug: string): Promise<TestCase[]> {
  return loadJson<TestCase[]>(path.join(hiddenTestDir, `${slug}.json`));
}

export async function getVisibleTests(slug: string): Promise<TestCase[]> {
  return loadJson<TestCase[]>(path.join(visibleTestDir, `${slug}.json`));
}
