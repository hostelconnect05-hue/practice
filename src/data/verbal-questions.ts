export interface QuizQuestion {
  id: number;
  question: string;
  sentence?: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export const verbalAbilityQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Sentence Correction:",
    sentence: "We wish there was a easy route to take from here.",
    options: [
      { key: "A", text: "is a easy" },
      { key: "B", text: "was an easy" },
      { key: "C", text: "were a easy" },
      { key: "D", text: "is a easier" },
      { key: "E", text: "No error" },
    ],
    correctAnswer: "B",
    explanation: "'Easy' begins with a vowel sound, so 'an' should be used instead of 'a'.",
  },
  {
    id: 2,
    question: "Fill in the blank:",
    sentence: "Joanne _______ for a driving test at this moment.",
    options: [
      { key: "A", text: "had appeared" },
      { key: "B", text: "appeared" },
      { key: "C", text: "is appearing" },
      { key: "D", text: "have been appearing" },
    ],
    correctAnswer: "C",
    explanation: "'At this moment' indicates the present continuous tense ('is appearing').",
  },
  {
    id: 3,
    question: "Identify the error in the sentence:",
    sentence: "For who are you waiting so late at night, by the side of the road?",
    options: [
      { key: "A", text: "For who" },
      { key: "B", text: "waiting" },
      { key: "C", text: "at night" },
      { key: "D", text: "by the side" },
    ],
    correctAnswer: "A",
    explanation: "After the preposition 'for', the correct objective pronoun is 'whom', not 'who'.",
  },
  {
    id: 5,
    question: "Fill in the blank:",
    sentence: "The Parkers were not fond of following the crowd; none of them hesitated to be _______.",
    options: [
      { key: "A", text: "unique" },
      { key: "B", text: "ordinary" },
      { key: "C", text: "impolite" },
      { key: "D", text: "mediocre" },
    ],
    correctAnswer: "A",
    explanation: "Since they did not like following the crowd, they preferred to be 'unique'.",
  },
  {
    id: 6,
    question: "Choose the correct synonym:",
    sentence: "What is the correct synonym for 'Educational'?",
    options: [
      { key: "A", text: "Impractical" },
      { key: "B", text: "Didactic" },
      { key: "C", text: "Ribaldry" },
      { key: "D", text: "Ancon" },
    ],
    correctAnswer: "B",
    explanation: "'Didactic' means intended to teach or educate.",
  },
  {
    id: 7,
    question: "Choose the correct articles:",
    sentence: "In a world where dreams could become reality, _______ idea could become _______ art.",
    options: [
      { key: "A", text: "no article, an" },
      { key: "B", text: "an, no article" },
      { key: "C", text: "the, no article" },
      { key: "D", text: "an, an" },
    ],
    correctAnswer: "B",
    explanation: "We say 'an idea' (vowel sound) and 'become art' (art is an uncountable noun here).",
  },
  {
    id: 8,
    question: "Fill in the blanks:",
    sentence: "It was good fortune that Emily _______ a seatbelt when her car collided last month; she _______ serious injury in that accident.",
    options: [
      { key: "A", text: "wore, escaped" },
      { key: "B", text: "was wearing, escaped" },
      { key: "C", text: "had worn, had escaped" },
      { key: "D", text: "wears, escaped" },
    ],
    correctAnswer: "B",
    explanation: "The collision occurred while Emily 'was wearing' a seatbelt (past continuous). The second action is simple past ('escaped').",
  },
  {
    id: 9,
    question: "Rearrange the phrases to form a complete sentence:",
    sentence: "Rearrange the jumbled phrases to form a coherent sentence.",
    options: [
      { key: "A", text: "CAEFDB" },
      { key: "B", text: "CEAFDB" },
      { key: "C", text: "CAEDBF" },
      { key: "D", text: "CAEBFD" },
    ],
    correctAnswer: "A",
    explanation: "Correct order is CAEFDB: 'Inhospitable as the deserts might have been, they were not impenetrable; evidence shows that they were widely explored and exploited in ancient times for a wide range of materials, from metal ores to building stones.'",
  },
  {
    id: 10,
    question: "Subject-Verb Agreement:",
    sentence: "The best two things about the party _______ the food and the music.",
    options: [
      { key: "A", text: "was" },
      { key: "B", text: "were" },
      { key: "C", text: "have been" },
      { key: "D", text: "has been" },
    ],
    correctAnswer: "B",
    explanation: "The subject 'two things' is plural, so the correct past tense verb is 'were'.",
  },
];
