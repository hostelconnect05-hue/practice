import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getHiddenTests } from "@/lib/problems";
import { markAttempt } from "@/lib/progress";
import { runAgainstTests } from "@/lib/judge0";
import type { LanguageKey } from "@/types/problem";

type RequestBody = {
  slug?: string;
  language?: LanguageKey;
  sourceCode?: string;
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

    const tests = await getHiddenTests(body.slug);
    const results = await runAgainstTests(
      body.sourceCode,
      body.language,
      tests,
    );
    const firstFailure = results.find((result) => !result.passed);
    const verdict = firstFailure?.verdict ?? "Accepted";

    if (process.env.DATABASE_URL) {
      try {
        await prisma.submission.create({
          data: {
            problemSlug: body.slug,
            language: body.language,
            status: verdict,
            executionTime: results[0]?.time ?? null,
            memory: results[0]?.memory ?? null,
          },
        });
      } catch {
        // Keep submission UX responsive even when DB is temporarily unavailable.
      }
    }

    await markAttempt(body.slug, verdict === "Accepted");

    return NextResponse.json({
      verdict,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to submit code",
      },
      { status: 500 },
    );
  }
}
