import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const problems = [
    {
      slug: "minimum-index",
      title: "Minimum Index",
      difficulty: "Medium",
    },
    {
      slug: "smallest-missing-even-number",
      title: "Smallest Missing Even Number",
      difficulty: "Easy",
    },
    {
      slug: "5-days-challenge",
      title: "5 Days Challenge",
      difficulty: "Medium",
    },
    {
      slug: "shopping-cart",
      title: "Shopping Cart",
      difficulty: "Easy",
    },
  ];

  for (const problem of problems) {
    await prisma.problem.upsert({
      where: { slug: problem.slug },
      create: problem,
      update: {
        title: problem.title,
        difficulty: problem.difficulty,
      },
    });
  }

  await prisma.userProgress.upsert({
    where: { userId: "local-user" },
    create: {
      userId: "local-user",
      solvedSlugs: [],
      attemptedSlugs: [],
    },
    update: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
