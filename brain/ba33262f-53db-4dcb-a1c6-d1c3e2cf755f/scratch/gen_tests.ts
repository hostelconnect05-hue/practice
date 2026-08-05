import { writeFileSync } from "fs";

function solveOne(X: number, Y: number, Z: number): number {
  if (Y >= 2 * X) {
    const twoPacks = Math.ceil(Z / 2);
    return twoPacks * X;
  } else {
    const fourPacks = Math.floor(Z / 4);
    const rem = Z % 4;
    if (rem === 0) {
      return fourPacks * Y;
    } else if (rem <= 2) {
      return fourPacks * Y + Math.min(X, Y);
    } else {
      return fourPacks * Y + Math.min(2 * X, Y);
    }
  }
}

// Generate Visible Test Cases (25 multi-testcase sets)
const visibleSets = [
  // 1. Sample test cases
  [
    [5, 10, 10],
    [5, 8, 10],
    [4, 7, 5]
  ],
  // 2. Small bounds Z=1, 2, 3, 4, 5
  [
    [10, 18, 1],
    [10, 18, 2],
    [10, 18, 3],
    [10, 18, 4],
    [10, 18, 5]
  ],
  // 3. Y == 2*X (Only 2-packs optimal)
  [
    [5, 10, 1],
    [5, 10, 2],
    [5, 10, 3],
    [5, 10, 4],
    [5, 10, 5],
    [5, 10, 6]
  ],
  // 4. Y is slightly larger than X (4-pack is much more economical)
  [
    [10, 11, 1],
    [10, 11, 2],
    [10, 11, 3],
    [10, 11, 4],
    [10, 11, 5],
    [10, 11, 6],
    [10, 11, 7],
    [10, 11, 8]
  ],
  // 5. Buying extra cans is cheaper (4-pack cheaper than 2-pack)
  [
    [10, 9, 1], // wait constraint X < Y <= 2X, but let's test X=10, Y=11
    [10, 12, 1],
    [10, 12, 2],
    [10, 12, 3]
  ]
];

// Generate 25 distinct multi-testcase visible inputs
const visibleCases = [];

// Create 20 multi-testcase visible blocks
for (let b = 1; b <= 20; b++) {
  const tCases: [number, number, number][] = [];
  const count = 3 + (b % 4);
  for (let i = 0; i < count; i++) {
    const X = 5 + (b * 7 + i * 3) % 50;
    const Y = X + 1 + (b * 11 + i * 5) % X;
    const Z = 1 + (b * 17 + i * 19) % 100;
    tCases.push([X, Y, Z]);
  }
  const inputStr = `${tCases.length}\n` + tCases.map(c => `${c[0]} ${c[1]} ${c[2]}`).join('\n') + '\n';
  const expectedStr = tCases.map(c => solveOne(c[0], c[1], c[2])).join('\n');
  visibleCases.push({ input: inputStr, expectedOutput: expectedStr });
}

// Generate 50 hidden test cases (each with T testcases inside or single large inputs)
const hiddenCases = [];

// 1. Boundary & Large Z cases
for (let h = 1; h <= 50; h++) {
  const T = 5;
  const tCases: [number, number, number][] = [];
  for (let i = 0; i < T; i++) {
    let X: number, Y: number, Z: number;
    if (h <= 10) {
      // Small Z
      X = 1 + h * 2;
      Y = X + 1 + (i % X);
      Z = i + 1;
    } else if (h <= 25) {
      // Medium Z
      X = 100 + h * 10 + i;
      Y = X + 10 + i * 5;
      Z = 1000 + h * 500 + i * 100;
    } else if (h <= 40) {
      // Large Z up to 10^9
      X = 1000000 + h * 10000;
      Y = X + 500000 + i * 10000;
      Z = 100000000 + h * 10000000 + i * 5000;
    } else {
      // Stress & Boundary cases (Y = 2X - 1, Y = X + 1, Z = 10^9)
      X = 1000000000 - h * 10;
      Y = 2 * X - (i % 2);
      Z = 1000000000 - i * 100;
    }
    tCases.push([X, Y, Z]);
  }
  const inputStr = `${tCases.length}\n` + tCases.map(c => `${c[0]} ${c[1]} ${c[2]}`).join('\n') + '\n';
  const expectedStr = tCases.map(c => solveOne(c[0], c[1], c[2])).join('\n');
  hiddenCases.push({ input: inputStr, expectedOutput: expectedStr });
}

writeFileSync("d:/virtusa/content/testcases/visible/shopping-cart.json", JSON.stringify(visibleCases, null, 2));
writeFileSync("d:/virtusa/content/testcases/hidden/shopping-cart.json", JSON.stringify(hiddenCases, null, 2));
console.log(`Generated ${visibleCases.length} visible test cases and ${hiddenCases.length} hidden test cases.`);
