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
];
