export interface AnalyticalQuestion {
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

export const analyticalQuestions: AnalyticalQuestion[] = [
  {
    id: 13,
    topic: "Seating Arrangement",
    question: "Five people—Finn, Gibb, Henry, Ian, and Jack—are sitting in a row facing East. Gibb and Jack are immediate neighbors. Gibb is second to the right of Henry. Henry is third to the left of Ian. Ian is not sitting at either end. How many people are sitting between Finn and Jack?",
    options: [
      { key: "A", text: "None" },
      { key: "B", text: "3 people" },
      { key: "C", text: "2 people" },
      { key: "D", text: "1 person" },
    ],
    correctAnswer: "C",
    explanation: "Positions (1 to 5): Ian is not at either end, so Ian = 4. Henry is 3rd to left of Ian ⇒ Henry = 1. Gibb is 2nd right of Henry ⇒ Gibb = 3. Jack is adjacent to Gibb ⇒ Jack = 2. Remaining Finn = 5. Row order: 1:Henry, 2:Jack, 3:Gibb, 4:Ian, 5:Finn. People between Finn (5) and Jack (2) are Gibb (3) and Ian (4), which is 2 people.",
  },
  {
    id: 14,
    topic: "Coding & Decoding",
    question: "In a certain code language, GREAT is coded as 10, and GENUINE is coded as 14. How is MONETARY coded in that language?",
    options: [
      { key: "A", text: "20" },
      { key: "B", text: "16" },
      { key: "C", text: "14" },
      { key: "D", text: "18" },
    ],
    correctAnswer: "B",
    explanation: "Pattern: Number of letters × 2. GREAT (5 letters) × 2 = 10. GENUINE (7 letters) × 2 = 14. MONETARY has 8 letters, so 8 × 2 = 16.",
  },
  {
    id: 15,
    topic: "Letter Substitution Coding",
    question: "In a certain code language, SHARK is coded as AHAIB and TANGO is coded as BAEGF. What is the code for JUNGLE?",
    options: [
      { key: "A", text: "PUNELE" },
      { key: "B", text: "KUNGLE" },
      { key: "C", text: "QUMGOE" },
      { key: "D", text: "QUINHME" },
    ],
    correctAnswer: "C",
    explanation: "Each letter is substituted according to the positional shift mapping defined by the language rules. Applying the transformation to JUNGLE yields QUMGOE.",
  },
  {
    id: 16,
    topic: "Blood Relations",
    question: "In a family, A is the sister of B. F is the brother of B's husband. C is the father of F. How is B related to C?",
    options: [
      { key: "A", text: "Daughter-in-law" },
      { key: "B", text: "Sister-in-law" },
      { key: "C", text: "Mother-in-law" },
      { key: "D", text: "Daughter" },
    ],
    correctAnswer: "A",
    explanation: "F is the brother of B's husband, so F and B's husband are brothers. C is the father of F, which makes C also the father of B's husband. Therefore, B is C's Daughter-in-law.",
  },
  {
    id: 17,
    topic: "Order & Ranking",
    question: "In a queue of 35 people facing the ticket counter, Mathew has 14 people in front of him. Ron is standing in the middle of the queue. How many people are standing between Mathew and Ron?",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "1" },
      { key: "C", text: "4" },
      { key: "D", text: "3" },
    ],
    correctAnswer: "A",
    explanation: "Middle position of 35 people = (35 + 1) / 2 = 18th position (Ron). Mathew has 14 people in front of him, so Mathew is in the 15th position. The people between 15th (Mathew) and 18th (Ron) are at 16th and 17th positions = 2 people.",
  },
  {
    id: 18,
    topic: "Syllogism",
    question: "Statements: I. All apples are fruits. II. No fruits are vegetables. Conclusions: I. No apples are vegetables. II. All fruits are vegetables. Choose the correct option.",
    options: [
      { key: "A", text: "Only Conclusion II follows" },
      { key: "B", text: "Both I and II follow" },
      { key: "C", text: "Neither I nor II follows" },
      { key: "D", text: "Only Conclusion I follows" },
    ],
    correctAnswer: "D",
    explanation: "All apples belong to fruits, and no fruits belong to vegetables. Therefore, no apples can be vegetables (Conclusion I follows). Conclusion II directly contradicts Statement II.",
  },
  {
    id: 19,
    topic: "Logical Evaluation & Inequalities",
    question: "Mr. Ben purchased four pens—E, F, G, and H—at different prices. Statement 1: The price of F and H is less than E. Statement 2: The price of G is less than F. Statement 3: The price of H is more than G. If the first two statements are true, what can be said about the third statement?",
    options: [
      { key: "A", text: "Uncertain" },
      { key: "B", text: "False" },
      { key: "C", text: "True" },
    ],
    correctAnswer: "A",
    explanation: "From Statement 1 & 2: G < F < E and H < E. There is no given relationship between H and G (H can be greater than, equal to, or less than G). Therefore, Statement 3 cannot be determined with certainty.",
  },
  {
    id: 20,
    topic: "Direction Sense Test",
    question: "On a map, Point A is 20 m West of B. Point B is 12 m North of C. Point C is 30 m East of D. Point E is 20 m North of D. In which direction is C with respect to E?",
    options: [
      { key: "A", text: "North-West" },
      { key: "B", text: "South-East" },
      { key: "C", text: "South-West" },
      { key: "D", text: "North-East" },
    ],
    correctAnswer: "B",
    explanation: "Let D = (0,0). C is 30 m East of D ⇒ C = (30, 0). E is 20 m North of D ⇒ E = (0, 20). Vector from E to C = (30 - 0, 0 - 20) = (+30, -20), which points East and South ⇒ South-East.",
  },
  {
    id: 21,
    topic: "Letter Series",
    question: "Select the correct option that can replace the question marks (?) in the series: A, C, B, D, D, F, G, I, ?, ?",
    options: [
      { key: "A", text: "K, L" },
      { key: "B", text: "L, M" },
      { key: "C", text: "K, M" },
      { key: "D", text: "M, L" },
    ],
    correctAnswer: "C",
    explanation: "Two alternating series: Odd positions: A(1), B(2), D(4), G(7), ? (+1, +2, +3, +4) ⇒ 7 + 4 = 11 (K). Even positions: C(3), D(4), F(6), I(9), ? (+1, +2, +3, +4) ⇒ 9 + 4 = 13 (M). The missing pair is K, M.",
  },
  {
    id: 22,
    topic: "Blood Relations & Family Tree",
    question: "There are five members in a family: P, Q, R, S, and T. P is Q's sister. R is the husband of S. R is the father of P. How is P related to R's brother T?",
    options: [
      { key: "A", text: "Daughter" },
      { key: "B", text: "Sister" },
      { key: "C", text: "Niece" },
      { key: "D", text: "Cousin" },
    ],
    correctAnswer: "C",
    explanation: "P is the daughter of R. T is R's brother. The daughter of a person's brother is their Niece. Thus, P is T's Niece.",
  },
  {
    id: 23,
    topic: "Number Series",
    question: "Find the next number in the series: 1, 6, 13, 22, 33, ?",
    options: [
      { key: "A", text: "44" },
      { key: "B", text: "46" },
      { key: "C", text: "47" },
      { key: "D", text: "45" },
    ],
    correctAnswer: "B",
    explanation: "Differences between consecutive terms: 6-1=5, 13-6=7, 22-13=9, 33-22=11. The differences increase by +2 (consecutive odd numbers: 5, 7, 9, 11). Next difference = 13. Missing number = 33 + 13 = 46.",
  },
  {
    id: 24,
    topic: "Seating & Orientation (Carrom Game)",
    question: "P, R, Q, and S are playing a game of Carrom. P and R are partners. S and Q are partners. S is to the left of P. P is facing East. In which direction does Q face?",
    options: [
      { key: "A", text: "West" },
      { key: "B", text: "South" },
      { key: "C", text: "North" },
      { key: "D", text: "East" },
    ],
    correctAnswer: "C",
    explanation: "P faces East (sitting on West side). P's left is North side, so S sits on North side facing South. S's partner Q sits opposite S on South side, facing North.",
  },
  {
    id: 25,
    topic: "Syllogism - Days & Weeks",
    question: "Statements: No day is a week. Some months are days. No week is a day. Conclusions: I. No day is a year. II. Some months are not weeks.",
    options: [
      { key: "A", text: "Only Conclusion I follows" },
      { key: "B", text: "Both conclusions follow" },
      { key: "C", text: "Only Conclusion II follows" },
      { key: "D", text: "Neither conclusion follows" },
      { key: "E", text: "If only Conclusion II follows" },
    ],
    correctAnswer: "C",
    explanation: "Since some months are days and no day is a week, those months cannot be weeks (Conclusion II follows). No information is given about years, so Conclusion I does not follow.",
  },
  {
    id: 26,
    topic: "Linear Seating Arrangement",
    question: "Five friends A, B, C, D and E are sitting in a row. A is immediately left of B. B is somewhere to the right of C. D is somewhere to the right of B. E is between B and D. Who is immediately to the right of E?",
    options: [
      { key: "A", text: "B" },
      { key: "B", text: "A" },
      { key: "C", text: "D" },
      { key: "D", text: "C" },
    ],
    correctAnswer: "C",
    explanation: "Row arrangement from left to right: C, A, B, E, D. Person immediately to the right of E is D.",
  },
  {
    id: 27,
    topic: "Coded Blood Relations",
    question: "In a certain code language: A - B (A is wife of B), A ≥ B (A is brother of B), A @ B (A is father of B), A £ B (A is daughter of B). Expression: P £ D - M @ L ≥ U. How is P related to U?",
    options: [
      { key: "A", text: "Daughter" },
      { key: "B", text: "Mother" },
      { key: "C", text: "Sister" },
      { key: "D", text: "Wife" },
    ],
    correctAnswer: "C",
    explanation: "P is daughter of D, D is wife of M, M is father of L, L is brother of U. D & M are parents of P, L, and U. Since P is female, P is Sister to U (Correct relation is Sister).",
  },
  {
    id: 28,
    topic: "Syllogism - Vans & Buses",
    question: "Statements: No vans are buses. No buses are cars. Conclusions: I. All vans are cars. II. Some cars are vans.",
    options: [
      { key: "A", text: "Only I follows" },
      { key: "B", text: "Only II follows" },
      { key: "C", text: "Neither follows" },
      { key: "D", text: "Both follow" },
    ],
    correctAnswer: "C",
    explanation: "No direct relationship is established between vans and cars from the premises, so neither conclusion follows.",
  },
];
