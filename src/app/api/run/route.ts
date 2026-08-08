import { NextResponse } from "next/server";
import { runAgainstTests } from "@/lib/judge0";
import { getVisibleTests } from "@/lib/problems";
import type { LanguageKey, TestCase } from "@/types/problem";

type RequestBody = {
  slug?: string;
  language?: LanguageKey;
  sourceCode?: string;
  customInput?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;
    if (!body.slug || !body.language || !body.sourceCode) {
      return NextResponse.json(
        { error: "slug, language, and sourceCode are required" },
        { status: 400 },
      );
    }

    const visibleTests = await getVisibleTests(body.slug);
    const tests: TestCase[] = body.customInput?.trim()
      ? [{ input: body.customInput, expectedOutput: "" }, ...visibleTests]
      : visibleTests;

    const results = await runAgainstTests(
      body.sourceCode,
      body.language,
      tests,
    );

    const normalized = body.customInput?.trim()
      ? [
          {
            ...results[0],
            expectedOutput: "(custom input)",
          },
          ...results.slice(1),
        ]
      : results;

    return NextResponse.json({ results: normalized });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to run code" },
      { status: 500 },
    );
  }
}
