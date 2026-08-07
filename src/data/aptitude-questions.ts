export interface AptitudeQuestion {
  id: number;
  topic: string;
  question: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export const aptitudeQuestions: AptitudeQuestion[] = [
  {
    id: 1,
    topic: "Work & Production Rate",
    question: "A factory can assemble 10 robots per day. If each robot, once built, can help assemble 2 more robots per day, how many robots can be built in 3 days?",
    options: [
      { key: "A", text: "110" },
      { key: "B", text: "90" },
      { key: "C", text: "120" },
      { key: "D", text: "100" },
    ],
    correctAnswer: "A",
    explanation: "Day 1: Factory builds 10 robots. Total available robots = 10. Day 2: Factory builds 10 + (10 existing × 2) = 30 robots. Total available robots = 10 + 30 = 40. Day 3: Factory builds 10 + (40 existing × 2) = 90 robots. Total built across 3 days = 10 + 30 + 70 = 110 robots.",
  },
  {
    id: 2,
    topic: "Profit & Loss",
    question: "A man sells a painting for $200 and earns a profit of $40. What is the profit percentage when he sells the same painting for $240?",
    options: [
      { key: "A", text: "48%" },
      { key: "B", text: "33.33%" },
      { key: "C", text: "62%" },
      { key: "D", text: "50%" },
    ],
    correctAnswer: "D",
    explanation: "Cost Price (CP) = Selling Price - Profit = $200 - $40 = $160. New Selling Price = $240. New Profit = $240 - $160 = $80. Profit Percentage = ($80 / $160) × 100 = 50%.",
  },
  {
    id: 3,
    topic: "Discount & Marked Price",
    question: "A shopkeeper charges $361 after allowing two successive discounts of 5% each on the marked price. Find the marked price.",
    options: [
      { key: "A", text: "$380" },
      { key: "B", text: "$361" },
      { key: "C", text: "$400" },
      { key: "D", text: "$420" },
    ],
    correctAnswer: "C",
    explanation: "Selling Price = Marked Price × (1 - 0.05) × (1 - 0.05) = Marked Price × 0.95 × 0.95 = Marked Price × 0.9025. Marked Price = $361 / 0.9025 = $400.",
  },
  {
    id: 4,
    topic: "Ratio & Averages",
    question: "In a class of 10 boys and 12 girls, the average weight of the girls is 75% of that of the boys. Find the ratio of the total weight of the girls to the total weight of the boys.",
    options: [
      { key: "A", text: "10:13" },
      { key: "B", text: "5:7" },
      { key: "C", text: "9:10" },
      { key: "D", text: "8:7" },
    ],
    correctAnswer: "C",
    explanation: "Let the average weight of a boy = B. Average weight of a girl = 0.75B. Total weight of 12 girls = 12 × 0.75B = 9B. Total weight of 10 boys = 10 × B = 10B. Ratio of Total Girls' Weight to Total Boys' Weight = 9B : 10B = 9:10.",
  },
  {
    id: 5,
    topic: "Speed, Distance & Time",
    question: "Three cars A, B, and C travel equal distances with speeds in the ratio 1 : 5 : 4 respectively. Find the ratio of the time taken by each car.",
    options: [
      { key: "A", text: "20 : 4 : 5" },
      { key: "B", text: "1 : 5 : 4" },
      { key: "C", text: "4 : 5 : 20" },
      { key: "D", text: "5 : 1 : 4" },
    ],
    correctAnswer: "A",
    explanation: "For constant distance, Time is inversely proportional to Speed (Time ∝ 1/Speed). Speed ratio = 1 : 5 : 4. Time ratio = 1/1 : 1/5 : 1/4. Multiplying by LCM(1, 5, 4) = 20 gives 20 : 4 : 5.",
  },
  {
    id: 6,
    topic: "Time & Work",
    question: "Two managers or four executives can complete a piece of work in 4 hours. How much time will one manager and two executives take to complete double the amount of work?",
    options: [
      { key: "A", text: "6 hours" },
      { key: "B", text: "8 hours" },
      { key: "C", text: "4 hours" },
      { key: "D", text: "3 hours" },
    ],
    correctAnswer: "B",
    explanation: "Work rate of 2 Managers = Work rate of 4 Executives ⇒ 1 Manager = 2 Executives. Combined team = 1 Manager + 2 Executives = 2 Executives + 2 Executives = 4 Executives. Since 4 Executives take 4 hours to complete 1 unit of work, they will take 4 × 2 = 8 hours to complete double (2 units) the work.",
  },
];
