export interface QuizQuestion {
  id: number;
  section: string;
  passage?: {
    title: string;
    text: string;
  };
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
  // SECTION: Reading Comprehension - Passage 1: Gift-Giving
  {
    id: 101,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 1: Gift-Giving",
      text: `According to statistics, people spend more than a billion dollars every month to find the perfect gift. While giving gifts is usually a joyful thing, it can leave the giver with ambivalent feelings. On the one hand, they might feel happy about finding a great gift to strengthen their relationship with the person receiving it. But on the other hand, they might feel anxious because they don't want to choose the wrong gift and disappoint the person.

Social psychologists view giving gifts as a positive social tradition, while economists hold a different opinion. Economists often see gift-giving as a waste of resources without much benefit. This is because people tend to buy gifts that the person receiving the gift wouldn't buy for themselves or find too expensive (a phenomenon called "deadweight loss"). For example, someone might spend $200 on a gift when the recipient would only spend $100 on it if they were buying it themselves. This "deadweight loss" shows that people often struggle to choose gifts that the recipient truly likes.

Social psychologists aren't surprised by this because, typically, gift choices are influenced by our feelings of importance, what we think others like, and mistakes in understanding what the recipient wants.`,
    },
    question: "According to statistics, how much do people spend every month to find the perfect gift?",
    options: [
      { key: "A", text: "More than a trillion dollars" },
      { key: "B", text: "Less than a dollar" },
      { key: "C", text: "Approximately a billion dollars" },
      { key: "D", text: "Half a million dollars" },
    ],
    correctAnswer: "C",
    explanation: "The first sentence states that people spend more than a billion dollars every month to find the perfect gift.",
  },
  {
    id: 102,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 1: Gift-Giving",
      text: `According to statistics, people spend more than a billion dollars every month to find the perfect gift. While giving gifts is usually a joyful thing, it can leave the giver with ambivalent feelings. On the one hand, they might feel happy about finding a great gift to strengthen their relationship with the person receiving it. But on the other hand, they might feel anxious because they don't want to choose the wrong gift and disappoint the person.

Social psychologists view giving gifts as a positive social tradition, while economists hold a different opinion. Economists often see gift-giving as a waste of resources without much benefit. This is because people tend to buy gifts that the person receiving the gift wouldn't buy for themselves or find too expensive (a phenomenon called "deadweight loss"). For example, someone might spend $200 on a gift when the recipient would only spend $100 on it if they were buying it themselves. This "deadweight loss" shows that people often struggle to choose gifts that the recipient truly likes.

Social psychologists aren't surprised by this because, typically, gift choices are influenced by our feelings of importance, what we think others like, and mistakes in understanding what the recipient wants.`,
    },
    question: "What ambivalent feelings might the giver experience when giving gifts?",
    options: [
      { key: "A", text: "Excitement and satisfaction" },
      { key: "B", text: "Sadness and excitement" },
      { key: "C", text: "Joy and laughter" },
      { key: "D", text: "Happiness and anxiety" },
    ],
    correctAnswer: "D",
    explanation: "The giver feels happy about strengthening the relationship, but anxious about choosing the wrong gift.",
  },
  {
    id: 103,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 1: Gift-Giving",
      text: `According to statistics, people spend more than a billion dollars every month to find the perfect gift. While giving gifts is usually a joyful thing, it can leave the giver with ambivalent feelings. On the one hand, they might feel happy about finding a great gift to strengthen their relationship with the person receiving it. But on the other hand, they might feel anxious because they don't want to choose the wrong gift and disappoint the person.

Social psychologists view giving gifts as a positive social tradition, while economists hold a different opinion. Economists often see gift-giving as a waste of resources without much benefit. This is because people tend to buy gifts that the person receiving the gift wouldn't buy for themselves or find too expensive (a phenomenon called "deadweight loss"). For example, someone might spend $200 on a gift when the recipient would only spend $100 on it if they were buying it themselves. This "deadweight loss" shows that people often struggle to choose gifts that the recipient truly likes.

Social psychologists aren't surprised by this because, typically, gift choices are influenced by our feelings of importance, what we think others like, and mistakes in understanding what the recipient wants.`,
    },
    question: "The above passage indicates that people value gift-giving because they feel it:",
    options: [
      { key: "A", text: "Strengthens their relationship with the recipient" },
      { key: "B", text: "Eliminates the concept of \"deadweight loss\"" },
      { key: "C", text: "Enhances their economic knowledge" },
      { key: "D", text: "Is the perfect way to express their feelings towards themselves" },
    ],
    correctAnswer: "A",
    explanation: "The passage states that people give gifts because they believe it strengthens their relationship with the recipient.",
  },
  {
    id: 104,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 1: Gift-Giving",
      text: `According to statistics, people spend more than a billion dollars every month to find the perfect gift. While giving gifts is usually a joyful thing, it can leave the giver with ambivalent feelings. On the one hand, they might feel happy about finding a great gift to strengthen their relationship with the person receiving it. But on the other hand, they might feel anxious because they don't want to choose the wrong gift and disappoint the person.

Social psychologists view giving gifts as a positive social tradition, while economists hold a different opinion. Economists often see gift-giving as a waste of resources without much benefit. This is because people tend to buy gifts that the person receiving the gift wouldn't buy for themselves or find too expensive (a phenomenon called "deadweight loss"). For example, someone might spend $200 on a gift when the recipient would only spend $100 on it if they were buying it themselves. This "deadweight loss" shows that people often struggle to choose gifts that the recipient truly likes.

Social psychologists aren't surprised by this because, typically, gift choices are influenced by our feelings of importance, what we think others like, and mistakes in understanding what the recipient wants.`,
    },
    question: "What is the tone of the writer in the above passage?",
    options: [
      { key: "A", text: "Indifferent and detached" },
      { key: "B", text: "Neutral and observant" },
      { key: "C", text: "Joyful and enthusiastic" },
      { key: "D", text: "Critical and skeptical" },
    ],
    correctAnswer: "B",
    explanation: "The author neutrally presents both the psychological and economic perspectives without taking a personal side.",
  },
  {
    id: 105,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 1: Gift-Giving",
      text: `According to statistics, people spend more than a billion dollars every month to find the perfect gift. While giving gifts is usually a joyful thing, it can leave the giver with ambivalent feelings. On the one hand, they might feel happy about finding a great gift to strengthen their relationship with the person receiving it. But on the other hand, they might feel anxious because they don't want to choose the wrong gift and disappoint the person.

Social psychologists view giving gifts as a positive social tradition, while economists hold a different opinion. Economists often see gift-giving as a waste of resources without much benefit. This is because people tend to buy gifts that the person receiving the gift wouldn't buy for themselves or find too expensive (a phenomenon called "deadweight loss"). For example, someone might spend $200 on a gift when the recipient would only spend $100 on it if they were buying it themselves. This "deadweight loss" shows that people often struggle to choose gifts that the recipient truly likes.

Social psychologists aren't surprised by this because, typically, gift choices are influenced by our feelings of importance, what we think others like, and mistakes in understanding what the recipient wants.`,
    },
    question: "What term is used to describe the situation when people buy gifts that the recipient wouldn't buy for themselves?",
    options: [
      { key: "A", text: "Gift paradox" },
      { key: "B", text: "Recipient's conundrum" },
      { key: "C", text: "Giver's dilemma" },
      { key: "D", text: "Deadweight loss" },
    ],
    correctAnswer: "D",
    explanation: "Economists call this situation 'deadweight loss', where the recipient values the gift less than its cost.",
  },
  {
    id: 106,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 1: Gift-Giving",
      text: `According to statistics, people spend more than a billion dollars every month to find the perfect gift. While giving gifts is usually a joyful thing, it can leave the giver with ambivalent feelings. On the one hand, they might feel happy about finding a great gift to strengthen their relationship with the person receiving it. But on the other hand, they might feel anxious because they don't want to choose the wrong gift and disappoint the person.

Social psychologists view giving gifts as a positive social tradition, while economists hold a different opinion. Economists often see gift-giving as a waste of resources without much benefit. This is because people tend to buy gifts that the person receiving the gift wouldn't buy for themselves or find too expensive (a phenomenon called "deadweight loss"). For example, someone might spend $200 on a gift when the recipient would only spend $100 on it if they were buying it themselves. This "deadweight loss" shows that people often struggle to choose gifts that the recipient truly likes.

Social psychologists aren't surprised by this because, typically, gift choices are influenced by our feelings of importance, what we think others like, and mistakes in understanding what the recipient wants.`,
    },
    question: "What does the passage suggest about the relationship between social psychologists and economists regarding gift-giving?",
    options: [
      { key: "A", text: "They collaborate to analyze the cultural impact of gift-giving traditions." },
      { key: "B", text: "They unanimously agree on the adverse effects of gift-giving." },
      { key: "C", text: "They jointly advocate stricter regulations on gift spending." },
      { key: "D", text: "They diverge in their viewpoints, with social psychologists viewing it positively and economists embracing doubt." },
    ],
    correctAnswer: "D",
    explanation: "Social psychologists view gift-giving as a positive social tradition, whereas economists view it as an inefficient waste of resources ('deadweight loss').",
  },

  // SECTION: Reading Comprehension - Passage 2: Storr Lochs Monster
  {
    id: 201,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 2: Storr Lochs Monster",
      text: `A local legend from the Isle of Skye tells of a mysterious creature known as the Storr Lochs Monster. Although many people dismissed the story as folklore, some residents claimed to have seen an unusual creature in the loch. Reports described it as having a long neck and a large body, leading some people to compare it with the famous Loch Ness Monster.

Despite occasional sightings, no scientific evidence has confirmed the monster's existence. Researchers believe that many sightings could be explained by floating logs, large fish, seals, or optical illusions created by weather conditions. Nevertheless, the legend continues to attract tourists and remains an important part of the local culture, contributing to the island's tourism industry.`,
    },
    question: "What is the primary purpose of the passage?",
    options: [
      { key: "A", text: "To prove that the Storr Lochs Monster exists" },
      { key: "B", text: "To describe a local legend and discuss the lack of scientific evidence supporting it" },
      { key: "C", text: "To explain how tourism harms the Isle of Skye" },
      { key: "D", text: "To compare the Storr Lochs Monster with marine animals" },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces the local legend, reported sightings, and explains that no scientific evidence supports its existence.",
  },
  {
    id: 202,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 2: Storr Lochs Monster",
      text: `A local legend from the Isle of Skye tells of a mysterious creature known as the Storr Lochs Monster. Although many people dismissed the story as folklore, some residents claimed to have seen an unusual creature in the loch. Reports described it as having a long neck and a large body, leading some people to compare it with the famous Loch Ness Monster.

Despite occasional sightings, no scientific evidence has confirmed the monster's existence. Researchers believe that many sightings could be explained by floating logs, large fish, seals, or optical illusions created by weather conditions. Nevertheless, the legend continues to attract tourists and remains an important part of the local culture, contributing to the island's tourism industry.`,
    },
    question: "According to the passage, why do researchers doubt the existence of the monster?",
    options: [
      { key: "A", text: "Because nobody has visited the loch" },
      { key: "B", text: "Because scientific evidence has not confirmed its existence, and sightings may have natural explanations" },
      { key: "C", text: "Because the monster is too small to observe" },
      { key: "D", text: "Because the government banned research" },
    ],
    correctAnswer: "B",
    explanation: "Researchers explain sightings using natural phenomena like floating logs, fish, seals, or weather illusions.",
  },
  {
    id: 203,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 2: Storr Lochs Monster",
      text: `A local legend from the Isle of Skye tells of a mysterious creature known as the Storr Lochs Monster. Although many people dismissed the story as folklore, some residents claimed to have seen an unusual creature in the loch. Reports described it as having a long neck and a large body, leading some people to compare it with the famous Loch Ness Monster.

Despite occasional sightings, no scientific evidence has confirmed the monster's existence. Researchers believe that many sightings could be explained by floating logs, large fish, seals, or optical illusions created by weather conditions. Nevertheless, the legend continues to attract tourists and remains an important part of the local culture, contributing to the island's tourism industry.`,
    },
    question: "What role does the legend play today?",
    options: [
      { key: "A", text: "It discourages tourism." },
      { key: "B", text: "It has been completely forgotten." },
      { key: "C", text: "It attracts tourists and contributes to the local culture." },
      { key: "D", text: "It has been scientifically proven." },
    ],
    correctAnswer: "C",
    explanation: "The passage notes that the legend remains an important part of local culture and boosts the island's tourism.",
  },

  // SECTION: Grammar & Vocabulary
  {
    id: 1,
    section: "Grammar & Vocabulary",
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
    section: "Grammar & Vocabulary",
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
    section: "Grammar & Vocabulary",
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
    section: "Grammar & Vocabulary",
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
    section: "Grammar & Vocabulary",
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
    section: "Grammar & Vocabulary",
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
    section: "Grammar & Vocabulary",
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
    section: "Grammar & Vocabulary",
    question: "Rearrange the phrases to form a complete sentence:",
    sentence: "(A) have been, they were not\n(B) they were widely explored and exploited\n(C) Inhospitable as the deserts might\n(D) materials, from metal ores to building stones.\n(E) impenetrable; evidence shows that\n(F) in ancient times for a wide range of",
    options: [
      { key: "A", text: "CAEFDB" },
      { key: "B", text: "CEAFDB" },
      { key: "C", text: "CAEDBF" },
      { key: "D", text: "CAEBFD" },
    ],
    correctAnswer: "A",
    explanation: "Correct order is CAEFDB:\n(C) Inhospitable as the deserts might\n(A) have been, they were not\n(E) impenetrable; evidence shows that\n(F) in ancient times for a wide range of\n(D) materials, from metal ores to building stones.\n(B) they were widely explored and exploited",
  },
  {
    id: 10,
    section: "Grammar & Vocabulary",
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
