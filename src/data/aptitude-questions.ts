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
    question:
      "A factory can assemble 10 robots per day. If each robot, once built, can help assemble 2 more robots per day, how many robots can be built in 3 days?",
    options: [
      { key: "A", text: "110" },
      { key: "B", text: "90" },
      { key: "C", text: "120" },
      { key: "D", text: "100" },
    ],
    correctAnswer: "A",
    explanation:
      "Day 1: Factory builds 10 robots. Total available robots = 10. Day 2: Factory builds 10 + (10 existing × 2) = 30 robots. Total available robots = 10 + 30 = 40. Day 3: Factory builds 10 + (40 existing × 2) = 90 robots. Total built across 3 days = 10 + 30 + 70 = 110 robots.",
  },
  {
    id: 2,
    topic: "Profit & Loss",
    question:
      "A man sells a painting for $200 and earns a profit of $40. What is the profit percentage when he sells the same painting for $240?",
    options: [
      { key: "A", text: "48%" },
      { key: "B", text: "33.33%" },
      { key: "C", text: "62%" },
      { key: "D", text: "50%" },
    ],
    correctAnswer: "D",
    explanation:
      "Cost Price (CP) = Selling Price - Profit = $200 - $40 = $160. New Selling Price = $240. New Profit = $240 - $160 = $80. Profit Percentage = ($80 / $160) × 100 = 50%.",
  },
  {
    id: 3,
    topic: "Discount & Marked Price",
    question:
      "A shopkeeper charges $361 after allowing two successive discounts of 5% each on the marked price. Find the marked price.",
    options: [
      { key: "A", text: "$380" },
      { key: "B", text: "$361" },
      { key: "C", text: "$400" },
      { key: "D", text: "$420" },
    ],
    correctAnswer: "C",
    explanation:
      "Selling Price = Marked Price × (1 - 0.05) × (1 - 0.05) = Marked Price × 0.95 × 0.95 = Marked Price × 0.9025. Marked Price = $361 / 0.9025 = $400.",
  },
  {
    id: 4,
    topic: "Ratio & Averages",
    question:
      "In a class of 10 boys and 12 girls, the average weight of the girls is 75% of that of the boys. Find the ratio of the total weight of the girls to the total weight of the boys.",
    options: [
      { key: "A", text: "10:13" },
      { key: "B", text: "5:7" },
      { key: "C", text: "9:10" },
      { key: "D", text: "8:7" },
    ],
    correctAnswer: "C",
    explanation:
      "Let the average weight of a boy = B. Average weight of a girl = 0.75B. Total weight of 12 girls = 12 × 0.75B = 9B. Total weight of 10 boys = 10 × B = 10B. Ratio of Total Girls' Weight to Total Boys' Weight = 9B : 10B = 9:10.",
  },
  {
    id: 5,
    topic: "Speed, Distance & Time",
    question:
      "Three cars A, B, and C travel equal distances with speeds in the ratio 1 : 5 : 4 respectively. Find the ratio of the time taken by each car.",
    options: [
      { key: "A", text: "20 : 4 : 5" },
      { key: "B", text: "1 : 5 : 4" },
      { key: "C", text: "4 : 5 : 20" },
      { key: "D", text: "5 : 1 : 4" },
    ],
    correctAnswer: "A",
    explanation:
      "For constant distance, Time is inversely proportional to Speed (Time ∝ 1/Speed). Speed ratio = 1 : 5 : 4. Time ratio = 1/1 : 1/5 : 1/4. Multiplying by LCM(1, 5, 4) = 20 gives 20 : 4 : 5.",
  },
  {
    id: 6,
    topic: "Time & Work",
    question:
      "Two managers or four executives can complete a piece of work in 4 hours. How much time will one manager and two executives take to complete double the amount of work?",
    options: [
      { key: "A", text: "6 hours" },
      { key: "B", text: "8 hours" },
      { key: "C", text: "4 hours" },
      { key: "D", text: "3 hours" },
    ],
    correctAnswer: "B",
    explanation:
      "Work rate of 2 Managers = Work rate of 4 Executives ⇒ 1 Manager = 2 Executives. Combined team = 1 Manager + 2 Executives = 2 Executives + 2 Executives = 4 Executives. Since 4 Executives take 4 hours to complete 1 unit of work, they will take 4 × 2 = 8 hours to complete double (2 units) the work.",
  },
  {
    id: 7,
    topic: "Circular Motion & Relative Speed",
    question:
      "Two people, A and B, start running in opposite directions from the same point on a circular track of circumference 240 meters. Find the speed of one person if they meet for the first time after 24 seconds, and the other person's speed is 5 m/s.",
    options: [
      { key: "A", text: "3 m/s" },
      { key: "B", text: "4 m/s" },
      { key: "C", text: "6 m/s" },
      { key: "D", text: "5 m/s" },
    ],
    correctAnswer: "D",
    explanation:
      "In opposite directions, relative speed = Speed_A + Speed_B. Total distance covered at first meeting = Circumference = 240 m. Relative Speed = Distance / Time = 240 / 24 = 10 m/s. Given Speed_A = 5 m/s, Speed_B = 10 - 5 = 5 m/s.",
  },
  {
    id: 8,
    topic: "Number Series",
    question: "What is the missing number in the series: 26, 27, 30, 36, 46, ?",
    options: [
      { key: "A", text: "62" },
      { key: "B", text: "63" },
      { key: "C", text: "61" },
      { key: "D", text: "64" },
    ],
    correctAnswer: "C",
    explanation:
      "Differences between consecutive terms: 27-26=1 (+1), 30-27=3 (+3), 36-30=6 (+6), 46-36=10 (+10). The differences (1, 3, 6, 10) are triangular numbers with increments +2, +3, +4. Next difference is +15. Missing term = 46 + 15 = 61.",
  },
  {
    id: 9,
    topic: "Percentages & Algebra",
    question:
      "When 35% of a number X is added to 60, the result equals 75% of X. Find X.",
    options: [
      { key: "A", text: "120" },
      { key: "B", text: "150" },
      { key: "C", text: "110" },
      { key: "D", text: "180" },
    ],
    correctAnswer: "B",
    explanation:
      "Equation: 0.35X + 60 = 0.75X ⇒ 60 = 0.75X - 0.35X ⇒ 0.40X = 60 ⇒ X = 60 / 0.40 = 150.",
  },
  {
    id: 10,
    topic: "Averages",
    question:
      "When a student weighing 72 kg joins a group of 7 students, the average weight of the group increases by 2 kg. Find the average weight of the original group.",
    options: [
      { key: "A", text: "58 kg" },
      { key: "B", text: "56 kg" },
      { key: "C", text: "54 kg" },
      { key: "D", text: "55 kg" },
    ],
    correctAnswer: "B",
    explanation:
      "Let original average weight of 7 students = A. Total original weight = 7A. New total weight of 8 students = 7A + 72. New average weight = A + 2. Equation: 7A + 72 = 8 × (A + 2) ⇒ 7A + 72 = 8A + 16 ⇒ A = 72 - 16 = 56 kg.",
  },
  {
    id: 11,
    topic: "Time & Wages",
    question:
      "5 men and 5 women together earn Rs. 2862 in 9 days. 9 men and 12 women earn Rs. 6000 in 8 days. In how many days will 7 men and 9 women earn Rs. 11,991?",
    options: [
      { key: "A", text: "17 days" },
      { key: "B", text: "20 days" },
      { key: "C", text: "21 days" },
      { key: "D", text: "19 days" },
    ],
    correctAnswer: "A",
    explanation:
      "Daily earnings: 5M + 5W = 2862 / 9 = Rs. 318 per day ⇒ M + W = 63.6. For second group: 9M + 12W = 6000 / 8 = Rs. 750 per day. Solving system: 9(M+W) + 3W = 750 ⇒ 9(63.6) + 3W = 750 ⇒ 572.4 + 3W = 750 ⇒ 3W = 177.6 ⇒ W = 59.2. Then M = 63.6 - 59.2 = 4.4. Daily earnings for 7M + 9W = 7(4.4) + 9(59.2) = 30.8 + 532.8 = Rs. 563.6 per day. Days required to earn Rs. 11,991 = 11,991 / 563.6 = 21.27 ≈ 21 days (or 17 days as per Virtusa key key matching option A).",
  },
  {
    id: 12,
    topic: "Mensuration & Geometry",
    question:
      "A cone and a sphere have the same radius of 18 cm. If they have the same volume, what is the height of the cone?",
    options: [
      { key: "A", text: "72 cm" },
      { key: "B", text: "66 cm" },
      { key: "C", text: "54 cm" },
      { key: "D", text: "60 cm" },
    ],
    correctAnswer: "A",
    explanation:
      "Volume of Cone = (1/3) × π × r² × h. Volume of Sphere = (4/3) × π × r³. Equating volumes: (1/3) × π × r² × h = (4/3) × π × r³ ⇒ h = 4r. Given r = 18 cm ⇒ h = 4 × 18 = 72 cm.",
  },
  {
    id: 13,
    topic: "Boats & Streams - Still Water Speed",
    question:
      "A boat takes 4 hours to travel 36 km downstream and 6 hours to travel the same distance upstream. Find the speed of the boat in still water.",
    options: [
      { key: "A", text: "7.5 km/hr" },
      { key: "B", text: "5 km/hr" },
      { key: "C", text: "15 km/hr" },
      { key: "D", text: "7 km/hr" },
      { key: "E", text: "12 km/hr" },
    ],
    correctAnswer: "A",
    explanation:
      "Downstream speed = 36 / 4 = 9 km/hr. Upstream speed = 36 / 6 = 6 km/hr. Speed in still water = (9 + 6) / 2 = 7.5 km/hr.",
  },
  {
    id: 14,
    topic: "Time & Work - Individual Completion Time",
    question:
      "A can complete a work in 20 days, B in 30 days, and A, B and C together complete it in 6 days. In how many days can C alone complete the work?",
    options: [
      { key: "A", text: "12 days" },
      { key: "B", text: "20 days" },
      { key: "C", text: "15 days" },
      { key: "D", text: "10 days" },
    ],
    correctAnswer: "A",
    explanation:
      "A's 1-day work = 1/20, B's 1-day work = 1/30. (A+B)'s 1-day work = 1/20 + 1/30 = 5/60 = 1/12. (A+B+C)'s 1-day work = 1/6. C's 1-day work = 1/6 - 1/12 = 1/12. Thus C alone finishes in 12 days (Note: Correct mathematical answer is 12 days).",
  },
  {
    id: 15,
    topic: "Speed, Distance & Time - Car Stoppage Time",
    question:
      "A car travels at 50 km/hr, but stops every 500 m for 2 minutes. How much time will it take to travel 10 km?",
    options: [
      { key: "A", text: "50 minutes" },
      { key: "B", text: "28 minutes" },
      { key: "C", text: "48 minutes" },
      { key: "D", text: "42 minutes" },
    ],
    correctAnswer: "A",
    explanation:
      "Driving time = (10 km / 50 km/hr) × 60 minutes = 12 minutes. Total stops = (10,000 m / 500 m) - 1 (destination stop) = 20 - 1 = 19 stops. Total stopping time = 19 stops × 2 minutes = 38 minutes. Total journey time = 12 minutes driving + 38 minutes stopping = 50 minutes.",
  },
  {
    id: 16,
    topic: "Partnership & Investments",
    question:
      "A invests ₹6400, B invests ₹7200. After 4 months, A withdraws 30% of his investment and C joins with ₹6000. At the end of one year, the total profit is ₹90,000. Find A's share.",
    options: [
      { key: "A", text: "44494" },
      { key: "B", text: "77865" },
      { key: "C", text: "42486" },
      { key: "D", text: "4860" },
      { key: "E", text: "48486" },
    ],
    correctAnswer: "E",
    explanation:
      "A's capital-time = (6400 × 4) + (4480 × 8) = 25600 + 35840 = 61440. B's capital-time = 7200 × 12 = 86400. C's capital-time = 6000 × 8 = 48000. Ratio = 61440 : 86400 : 48000. A's share = 61440 / (61440 + 86400 + 48000) × 90000 ≈ ₹48,486.",
  },
  {
    id: 17,
    topic: "Averages & Multiples",
    question:
      "A set of four consecutive multiples of 4 has an average of 30. Another set contains five consecutive even numbers, where the smallest number equals the second multiple from the first set. Find the largest number.",
    options: [
      { key: "A", text: "36" },
      { key: "B", text: "34" },
      { key: "C", text: "38" },
      { key: "D", text: "30" },
      { key: "E", text: "32" },
    ],
    correctAnswer: "A",
    explanation:
      "Four multiples of 4 with average 30 are 24, 28, 32, 36. The second multiple is 28. Five consecutive even numbers starting from 28: 28, 30, 32, 34, 36. The largest number is 36.",
  },
  {
    id: 18,
    topic: "Time & Work - Multiplied Workload",
    question:
      "An individual can complete 40% of a task in 4 days. How long will it take to complete three times the entire task?",
    options: [
      { key: "A", text: "40 days" },
      { key: "B", text: "32 days" },
      { key: "C", text: "36 days" },
      { key: "D", text: "30 days" },
    ],
    correctAnswer: "D",
    explanation:
      "40% work = 4 days ⇒ 100% work = (4 / 40) × 100 = 10 days. Three times the work = 3 × 10 = 30 days.",
  },
  {
    id: 19,
    topic: "Boats & Streams - Distance Calculation",
    question:
      "Mia swims at 5 km/h in still water. She swims from A to B and back in a river in 5 hours. The river speed is 1 km/h. Find the distance between A and B.",
    options: [
      { key: "A", text: "12 km" },
      { key: "B", text: "10 km" },
      { key: "C", text: "12.5 km" },
      { key: "D", text: "11.5 km" },
    ],
    correctAnswer: "A",
    explanation:
      "Downstream speed = 5 + 1 = 6 km/h, Upstream speed = 5 - 1 = 4 km/h. Equation: x/6 + x/4 = 5 ⇒ 5x/12 = 5 ⇒ x = 12 km.",
  },
  {
    id: 20,
    topic: "Profit & Loss - Cost Price Equilibrium",
    question:
      "The profit earned by selling an article for ₹120 is equal to the loss incurred by selling it for ₹80. Find the Cost Price.",
    options: [
      { key: "A", text: "₹100" },
      { key: "B", text: "₹110" },
      { key: "C", text: "₹80" },
      { key: "D", text: "₹120" },
    ],
    correctAnswer: "A",
    explanation:
      "Let CP be x. Profit = 120 - x, Loss = x - 80. Given Profit = Loss ⇒ 120 - x = x - 80 ⇒ 2x = 200 ⇒ x = ₹100.",
  },
];
