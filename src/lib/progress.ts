import { prisma } from "@/lib/prisma";

const USER_ID = "local-user";

export type ProgressSummary = {
  solved: number;
  attempted: number;
  successRate: number;
  solvedSlugs: string[];
  attemptedSlugs: string[];
};

export async function getProgress(): Promise<ProgressSummary> {
  if (!process.env.DATABASE_URL) {
    return {
      solved: 0,
      attempted: 0,
      successRate: 0,
      solvedSlugs: [],
      attemptedSlugs: [],
    };
  }

  try {
    const progress = await prisma.userProgress.upsert({
      where: { userId: USER_ID },
      update: {},
      create: { userId: USER_ID, solvedSlugs: [], attemptedSlugs: [] },
    });

    const solved = progress.solvedSlugs.length;
    const attempted = progress.attemptedSlugs.length;
    const successRate = attempted === 0 ? 0 : (solved / attempted) * 100;

    return {
      solved,
      attempted,
      successRate,
      solvedSlugs: progress.solvedSlugs,
      attemptedSlugs: progress.attemptedSlugs,
    };
  } catch {
    return {
      solved: 0,
      attempted: 0,
      successRate: 0,
      solvedSlugs: [],
      attemptedSlugs: [],
    };
  }
}

export async function markAttempt(slug: string, accepted: boolean): Promise<void> {
  if (!process.env.DATABASE_URL) {
    return;
  }

  let progress;
  try {
    progress = await prisma.userProgress.upsert({
      where: { userId: USER_ID },
      update: {},
      create: { userId: USER_ID, solvedSlugs: [], attemptedSlugs: [] },
    });
  } catch {
    return;
  }

  const attempted = new Set(progress.attemptedSlugs);
  attempted.add(slug);

  const solved = new Set(progress.solvedSlugs);
  if (accepted) {
    solved.add(slug);
  }

  try {
    await prisma.userProgress.update({
      where: { userId: USER_ID },
      data: {
        attemptedSlugs: Array.from(attempted),
        solvedSlugs: Array.from(solved),
      },
    });
  } catch {
    return;
  }
}
