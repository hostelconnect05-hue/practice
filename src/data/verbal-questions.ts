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
  // PASSAGE 1: Gift-Giving
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
    question: "What ambivalent feelings might the giver experience when giving gifts? (Variant)",
    options: [
      { key: "A", text: "Sadness and excitement" },
      { key: "B", text: "Excitement and satisfaction" },
      { key: "C", text: "Happiness and anxiety" },
      { key: "D", text: "Joy and laughter" },
    ],
    correctAnswer: "C",
    explanation: "The giver feels happy about strengthening the relationship, but anxious about choosing the wrong gift.",
  },
  {
    id: 107,
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

  // PASSAGE 2: Storr Lochs Monster
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
    id: 204,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 2: Storr Lochs Monster (Fossil Discovery)",
      text: `A fierce predator named the Storr Lochs Monster, which lived 170 million years ago, has been unveiled for the first time, half a century after it was discovered. The fossilized skeleton of the dolphin-like animal was found on the Isle of Skye, Scotland, in 1966. According to researchers from the University of Edinburgh, it is the most complete skeleton of a sea-living reptile from the age of dinosaurs that has ever been found in Scotland.

A partnership between the University of Edinburgh, National Museums Scotland, and energy company SSE has enabled the fossil to be extracted from the rock that encased it for millions of years. The fossil has been preserved in National Museums Scotland's storage facility for 50 years. Now, by pooling expertise, the new collaboration will enable experts to form a clearer picture of the fossil. A team of palaeontologists will study the fossil, which belongs to an extinct family of marine reptiles known as ichthyosaurs.

The ancient animals thrived in prehistoric seas at the same time that the dinosaurs were ruling the land. This discovery will help unveil how ichthyosaurs evolved during the Middle Jurassic Period, a part of Earth's history that has long been shrouded in mystery owing to a lack of fossil evidence from the time. The Isle of Skye is one of the few places in the world where fossils from the Middle Jurassic Period can be found. In folklore, the Loch Ness Monster or 'Nessie' is an aquatic being that reputedly inhabits Loch Ness in the Scottish Highlands. Although its description varies, it is similar to other supposed lake monsters in Scotland and elsewhere.`,
    },
    question: "How did the partnership between various organizations help?",
    options: [
      { key: "A", text: "It helped in preserving the fossil." },
      { key: "B", text: "It helped the team understand how the creature became extinct." },
      { key: "C", text: "It helped in the extraction of the fossils from the rock." },
      { key: "D", text: "It helped in collecting funds for the extraction procedure of the fossil." },
    ],
    correctAnswer: "C",
    explanation: "The passage states that a partnership between the University of Edinburgh, National Museums Scotland, and SSE enabled the fossil to be extracted from the rock that encased it.",
  },
  {
    id: 205,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 2: Storr Lochs Monster (Fossil Discovery)",
      text: `A fierce predator named the Storr Lochs Monster, which lived 170 million years ago, has been unveiled for the first time, half a century after it was discovered. The fossilized skeleton of the dolphin-like animal was found on the Isle of Skye, Scotland, in 1966. According to researchers from the University of Edinburgh, it is the most complete skeleton of a sea-living reptile from the age of dinosaurs that has ever been found in Scotland.

A partnership between the University of Edinburgh, National Museums Scotland, and energy company SSE has enabled the fossil to be extracted from the rock that encased it for millions of years. The fossil has been preserved in National Museums Scotland's storage facility for 50 years. Now, by pooling expertise, the new collaboration will enable experts to form a clearer picture of the fossil. A team of palaeontologists will study the fossil, which belongs to an extinct family of marine reptiles known as ichthyosaurs.

The ancient animals thrived in prehistoric seas at the same time that the dinosaurs were ruling the land. This discovery will help unveil how ichthyosaurs evolved during the Middle Jurassic Period, a part of Earth's history that has long been shrouded in mystery owing to a lack of fossil evidence from the time. The Isle of Skye is one of the few places in the world where fossils from the Middle Jurassic Period can be found. In folklore, the Loch Ness Monster or 'Nessie' is an aquatic being that reputedly inhabits Loch Ness in the Scottish Highlands. Although its description varies, it is similar to other supposed lake monsters in Scotland and elsewhere.`,
    },
    question: "What does the term 'shrouded in mystery' mean?",
    options: [
      { key: "A", text: "Covered in historical significance" },
      { key: "B", text: "Found under mysterious conditions" },
      { key: "C", text: "Magical attributes or properties" },
      { key: "D", text: "Lack of clear information" },
    ],
    correctAnswer: "D",
    explanation: "'Shrouded in mystery' refers to something that lacks clear information or is poorly understood due to missing evidence.",
  },
  {
    id: 206,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 2: Storr Lochs Monster (Fossil Discovery)",
      text: `A fierce predator named the Storr Lochs Monster, which lived 170 million years ago, has been unveiled for the first time, half a century after it was discovered. The fossilized skeleton of the dolphin-like animal was found on the Isle of Skye, Scotland, in 1966. According to researchers from the University of Edinburgh, it is the most complete skeleton of a sea-living reptile from the age of dinosaurs that has ever been found in Scotland.

A partnership between the University of Edinburgh, National Museums Scotland, and energy company SSE has enabled the fossil to be extracted from the rock that encased it for millions of years. The fossil has been preserved in National Museums Scotland's storage facility for 50 years. Now, by pooling expertise, the new collaboration will enable experts to form a clearer picture of the fossil. A team of palaeontologists will study the fossil, which belongs to an extinct family of marine reptiles known as ichthyosaurs.

The ancient animals thrived in prehistoric seas at the same time that the dinosaurs were ruling the land. This discovery will help unveil how ichthyosaurs evolved during the Middle Jurassic Period, a part of Earth's history that has long been shrouded in mystery owing to a lack of fossil evidence from the time. The Isle of Skye is one of the few places in the world where fossils from the Middle Jurassic Period can be found. In folklore, the Loch Ness Monster or 'Nessie' is an aquatic being that reputedly inhabits Loch Ness in the Scottish Highlands. Although its description varies, it is similar to other supposed lake monsters in Scotland and elsewhere.`,
    },
    question: "Which family of reptiles does the unveiled fossil in the passage belong to?",
    options: [
      { key: "A", text: "Heterodontosaurus" },
      { key: "B", text: "Syntarsus" },
      { key: "C", text: "Ichthyosaurs" },
      { key: "D", text: "Dilophosaurus" },
    ],
    correctAnswer: "C",
    explanation: "The passage explicitly states that the fossil belongs to an extinct family of marine reptiles known as ichthyosaurs.",
  },

  // PASSAGE 3: Oral History and Anthropology
  {
    id: 301,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 3: Oral History and Anthropology",
      text: `Language is an intricate part of any culture, and researchers recognise the advantages of oral history while studying social anthropology. At the turn of the century, ethnologists harboured a keen desire to "hear" and record the life stories of the Australian Aboriginals. The purpose was to gather anthropological data and supplement their field observations. Moreover, these personal tales would grant them more profound access to Aboriginal culture and help preserve many rapidly disappearing traditions for future generations.

However, many arguments were raised against this method of acquiring anthropological data. Many researchers, for instance, deemed personal stories to be of limited utility due to "the distortion of cultural realities by memory." Others claimed that investigators do not spend sufficient time with their interviewees to fully grasp customs and sometimes stain the community's cultural trademarks with their cultural, psychological, and emotional perceptions.

Furthermore, the process of transcribing these stories from oral to written form is not without its drawbacks. The resulting documents are often unreliable due to the inherent limitations of the Indo-European language family, which leads to the exclusion of "unimportant" terms for which there is no direct English equivalent. This selective translation often results in the loss of nuanced meanings, either due to the tribe's limited vocabulary or its religious constraints.

Notwithstanding these shortcomings, oral history remains a crucial tool for ethnologists. Investigating cultural conventions through personal impressions, imperfect as they are, provides more insight into the workings of minds and emotions than theories developed by many ethnologists.`,
    },
    question: "Fill in the blank(s). The primary purpose of the passage is to _______.",
    options: [
      { key: "A", text: "assess a methodology" },
      { key: "B", text: "correct a theory" },
      { key: "C", text: "clarify a misunderstanding" },
      { key: "D", text: "question an explanation" },
    ],
    correctAnswer: "A",
    explanation: "The passage evaluates oral history as a research methodology by analyzing its benefits, drawbacks, and ultimate value.",
  },
  {
    id: 302,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 3: Oral History and Anthropology",
      text: `Language is an intricate part of any culture, and researchers recognise the advantages of oral history while studying social anthropology. At the turn of the century, ethnologists harboured a keen desire to "hear" and record the life stories of the Australian Aboriginals. The purpose was to gather anthropological data and supplement their field observations. Moreover, these personal tales would grant them more profound access to Aboriginal culture and help preserve many rapidly disappearing traditions for future generations.

However, many arguments were raised against this method of acquiring anthropological data. Many researchers, for instance, deemed personal stories to be of limited utility due to "the distortion of cultural realities by memory." Others claimed that investigators do not spend sufficient time with their interviewees to fully grasp customs and sometimes stain the community's cultural trademarks with their cultural, psychological, and emotional perceptions.

Furthermore, the process of transcribing these stories from oral to written form is not without its drawbacks. The resulting documents are often unreliable due to the inherent limitations of the Indo-European language family, which leads to the exclusion of "unimportant" terms for which there is no direct English equivalent. This selective translation often results in the loss of nuanced meanings, either due to the tribe's limited vocabulary or its religious constraints.

Notwithstanding these shortcomings, oral history remains a crucial tool for ethnologists. Investigating cultural conventions through personal impressions, imperfect as they are, provides more insight into the workings of minds and emotions than theories developed by many ethnologists.`,
    },
    question: "Which of the given statements best describes the organisation of the passage?",
    options: [
      { key: "A", text: "It presents arguments against the use of oral history in anthropological research." },
      { key: "B", text: "It provides an overview of a research method, its benefits, and its critiques." },
      { key: "C", text: "It describes the challenges faced by ethnologists in studying Aboriginal culture." },
      { key: "D", text: "It primarily focuses on the limitations of translating oral stories to written formats." },
    ],
    correctAnswer: "B",
    explanation: "The passage introduces the research method, outlines its advantages, discusses its limitations and criticisms, and concludes with its significance.",
  },

  // PASSAGE 4: Carbon Dioxide and Climate
  {
    id: 401,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 4: Carbon Dioxide and Climate",
      text: `Carbon dioxide molecules act as a one-way shield and maintain the Earth's heat balance. These molecules mainly allow the radiation from the sun that is of visible wavelength to pass through but absorb the longer-wavelength infrared radiation emanating back from the Earth's surface. Without this absorption, so much heat would escape into the atmosphere that the oceans would completely freeze.

Today, however, excessive burning of fossil fuels and deforestation have steeply increased the level of atmospheric carbon dioxide. Mathematical models indicate that this could lead to a global rise in the Earth's temperature and have catastrophic consequences for human society. One mathematical model has predicted that as the level of atmospheric carbon dioxide doubles, the average surface temperature will rise by 2.5°C.

The model assumes that the atmospheric temperature decreases by 6°C per kilometre above the Earth's surface and that the atmosphere's relative humidity is constant. However, the relative humidity can remain constant only if water vapour increases. The temperature rises because water vapour also absorbs infrared radiation. With greater absorption of infrared radiation and the resulting warming of the Earth's surface, more ice from the polar regions would melt, reducing the Earth's reflective capacity. More radiation would, in turn, be absorbed, raising the temperature even further.`,
    },
    question: "Fill in the blank(s). The primary purpose of the passage is to _______.",
    options: [
      { key: "A", text: "Elaborate on the significance of increasing carbon dioxide in the atmosphere" },
      { key: "B", text: "Warn about the advantages of excessive burning of fossil fuels" },
      { key: "C", text: "Recommend the usage of alternative fuels" },
      { key: "D", text: "Illustrate the usefulness of mathematical models in predicting temperature" },
    ],
    correctAnswer: "A",
    explanation: "The passage focuses on carbon dioxide's role in the heat balance and the global consequences of its increasing levels in the atmosphere.",
  },
  {
    id: 402,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 4: Carbon Dioxide and Climate",
      text: `Carbon dioxide molecules act as a one-way shield and maintain the Earth's heat balance. These molecules mainly allow the radiation from the sun that is of visible wavelength to pass through but absorb the longer-wavelength infrared radiation emanating back from the Earth's surface. Without this absorption, so much heat would escape into the atmosphere that the oceans would completely freeze.

Today, however, excessive burning of fossil fuels and deforestation have steeply increased the level of atmospheric carbon dioxide. Mathematical models indicate that this could lead to a global rise in the Earth's temperature and have catastrophic consequences for human society. One mathematical model has predicted that as the level of atmospheric carbon dioxide doubles, the average surface temperature will rise by 2.5°C.

The model assumes that the atmospheric temperature decreases by 6°C per kilometre above the Earth's surface and that the atmosphere's relative humidity is constant. However, the relative humidity can remain constant only if water vapour increases. The temperature rises because water vapour also absorbs infrared radiation. With greater absorption of infrared radiation and the resulting warming of the Earth's surface, more ice from the polar regions would melt, reducing the Earth's reflective capacity. More radiation would, in turn, be absorbed, raising the temperature even further.`,
    },
    question: "According to the above passage, which of the given statements has been true for the last fifty years?",
    options: [
      { key: "A", text: "More forests were saved than during any other previous period." },
      { key: "B", text: "The average temperature of the Earth's surface has decreased by 2.5°C." },
      { key: "C", text: "The level of atmospheric carbon dioxide has significantly increased." },
      { key: "D", text: "The Earth's atmosphere was more humid than it is today." },
    ],
    correctAnswer: "C",
    explanation: "The passage notes that excessive burning of fossil fuels and deforestation have steeply increased atmospheric carbon dioxide levels.",
  },

  // PASSAGE 5: Bird Flight Evolution
  {
    id: 501,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 5: Bird Flight Evolution",
      text: `Scientists are interested in understanding whether the ability to fly in birds evolved just once or multiple times. There are over 10,000 species of birds, and around half of them can fly. Among these flying birds, some have developed similar flying abilities independently.

To determine if flight evolved just once or multiple times, researchers examine the characteristics of different bird groups. Recent studies have shown that certain groups of birds evolved their flight independently from each other. This challenges the idea that flight evolved only once from a common ancestor.

While many flying birds share similar adaptations for flight, such as wings and hollow bones, they also exhibit differences in other characteristics. For example, the evolution of flight in birds like pigeons and hummingbirds occurred separately. Despite both these birds being capable of flight, they have distinct differences in their body structures, behaviours, and habitats.

Further research into the genetic and anatomical features of flying birds will help scientists understand how flight evolved independently in different groups of birds.`,
    },
    question: "Which of the given statements accurately reflects the current understanding of bird flight evolution?",
    options: [
      { key: "A", text: "All flying birds share identical genetic and anatomical features." },
      { key: "B", text: "Flight in birds evolved only once in a single common ancestor." },
      { key: "C", text: "Pigeons and hummingbirds evolved together." },
      { key: "D", text: "Flight in birds evolved independently in different groups." },
    ],
    correctAnswer: "D",
    explanation: "Recent studies indicate that flight in birds evolved independently in different groups rather than once in a single common ancestor.",
  },
  {
    id: 502,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 5: Bird Flight Evolution",
      text: `Scientists are interested in understanding whether the ability to fly in birds evolved just once or multiple times. There are over 10,000 species of birds, and around half of them can fly. Among these flying birds, some have developed similar flying abilities independently.

To determine if flight evolved just once or multiple times, researchers examine the characteristics of different bird groups. Recent studies have shown that certain groups of birds evolved their flight independently from each other. This challenges the idea that flight evolved only once from a common ancestor.

While many flying birds share similar adaptations for flight, such as wings and hollow bones, they also exhibit differences in other characteristics. For example, the evolution of flight in birds like pigeons and hummingbirds occurred separately. Despite both these birds being capable of flight, they have distinct differences in their body structures, behaviours, and habitats.

Further research into the genetic and anatomical features of flying birds will help scientists understand how flight evolved independently in different groups of birds.`,
    },
    question: "According to the above passage, how many species of birds are capable of flight?",
    options: [
      { key: "A", text: "Over 5,000" },
      { key: "B", text: "Over 10,000" },
      { key: "C", text: "Exactly 10,000" },
      { key: "D", text: "Less than 5,000" },
    ],
    correctAnswer: "A",
    explanation: "With over 10,000 bird species and around half capable of flight, the total is over 5,000 species.",
  },

  // PASSAGE 6: Body Fat and Cognitive Function
  {
    id: 601,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 6: Body Fat and Cognitive Function",
      text: `According to a recent study, greater body fat is a risk factor for reduced cognitive function, for instance, in adults. For the research, cardiovascular risk factors like diabetes, high blood pressure, and vascular brain injury were taken into account. The link between body fat and lower cognitive scores remained. This suggested other, not yet confirmed, pathways that linked excess body fat to reduced cognitive function.

In the study, 9,166 participants were measured using bioelectrical impedance analysis to assess their total body fat. Also, 6,733 participants underwent magnetic resonance imaging (MRI) to measure abdominal fat packed around the organs, known as visceral fat, and the MRI also assessed vascular brain injury—areas in the brain affected by reduced blood flow.

"Our results suggest that strategies to prevent or reduce having too much body fat may preserve cognitive function," said lead author Sonia Anand. She added that "the effect of increased body fat persisted even after adjusting for its effect on increasing cardiovascular risk factors, which should prompt researchers to investigate which other pathways may link excess fat to reduced cognitive function."`,
    },
    question: "What is the opposite of the word 'persisted' as used in the passage?",
    options: [
      { key: "A", text: "Survived" },
      { key: "B", text: "Abandoned" },
      { key: "C", text: "Persevered" },
      { key: "D", text: "Diligence" },
    ],
    correctAnswer: "B",
    explanation: "'Persisted' means continued; its direct antonym is 'abandoned' (discontinued or stopped).",
  },
  {
    id: 602,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 6: Body Fat and Cognitive Function",
      text: `According to a recent study, greater body fat is a risk factor for reduced cognitive function, for instance, in adults. For the research, cardiovascular risk factors like diabetes, high blood pressure, and vascular brain injury were taken into account. The link between body fat and lower cognitive scores remained. This suggested other, not yet confirmed, pathways that linked excess body fat to reduced cognitive function.

In the study, 9,166 participants were measured using bioelectrical impedance analysis to assess their total body fat. Also, 6,733 participants underwent magnetic resonance imaging (MRI) to measure abdominal fat packed around the organs, known as visceral fat, and the MRI also assessed vascular brain injury—areas in the brain affected by reduced blood flow.

"Our results suggest that strategies to prevent or reduce having too much body fat may preserve cognitive function," said lead author Sonia Anand. She added that "the effect of increased body fat persisted even after adjusting for its effect on increasing cardiovascular risk factors, which should prompt researchers to investigate which other pathways may link excess fat to reduced cognitive function."`,
    },
    question: "Which word can replace 'affected' as used in the passage?",
    options: [
      { key: "A", text: "Influenced" },
      { key: "B", text: "Pondered" },
      { key: "C", text: "Rendered" },
      { key: "D", text: "Indulged" },
    ],
    correctAnswer: "A",
    explanation: "In this context, 'affected' means influenced or impacted.",
  },
  {
    id: 603,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 6: Body Fat and Cognitive Function",
      text: `According to a recent study, greater body fat is a risk factor for reduced cognitive function, for instance, in adults. For the research, cardiovascular risk factors like diabetes, high blood pressure, and vascular brain injury were taken into account. The link between body fat and lower cognitive scores remained. This suggested other, not yet confirmed, pathways that linked excess body fat to reduced cognitive function.

In the study, 9,166 participants were measured using bioelectrical impedance analysis to assess their total body fat. Also, 6,733 participants underwent magnetic resonance imaging (MRI) to measure abdominal fat packed around the organs, known as visceral fat, and the MRI also assessed vascular brain injury—areas in the brain affected by reduced blood flow.

"Our results suggest that strategies to prevent or reduce having too much body fat may preserve cognitive function," said lead author Sonia Anand. She added that "the effect of increased body fat persisted even after adjusting for its effect on increasing cardiovascular risk factors, which should prompt researchers to investigate which other pathways may link excess fat to reduced cognitive function."`,
    },
    question: "Which factor was NOT taken into account during the study?",
    options: [
      { key: "A", text: "Arthritis" },
      { key: "B", text: "Diabetes" },
      { key: "C", text: "Vascular brain injury" },
      { key: "D", text: "High blood pressure" },
    ],
    correctAnswer: "A",
    explanation: "The study evaluated diabetes, high blood pressure, and vascular brain injury; arthritis was not included.",
  },

  // PASSAGE 7: Human Eye and Light Spectrum
  {
    id: 701,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 7: Human Eye and Light Spectrum",
      text: `All the known colors are represented by the light spectrum. Despite there being almost an infinite number of colors, human eyes can only see a tiny fraction of this spectrum. Humans see a certain color when a specific type of wavelength is emitted. For example, red is characterized by a wavelength between 635–700 nanometers. It is on the extreme end of the visible spectrum, as we can only see colors emitted at wavelengths between 390–700 nanometers.

Red is a type of pure color. It is created from a single wavelength. Colors such as pink are created from a mix of different wavelengths. It is our eyes' cone cells that allow us to process these colors. There are three types of cone cells and each reacts differently depending on the wavelength they detect. It is this that gives us our perception of color.

Another type of cell found mostly in our retinas can detect every dry dim light. These are called rod cells and are used almost entirely for night vision and peripheral vision. Scientists have been able to use wavelengths of light despite not being able to see them. One example is infrared light, which has wavelengths longer than those found in visible light. Infrared light has been used to improve our night vision, forecast the weather, and diagnose illnesses.`,
    },
    question: "Which of the following can be logically deduced about the human eye?",
    options: [
      { key: "A", text: "Rod cells detect colours." },
      { key: "B", text: "Humans' ability to see colours depends on the reaction of cone cells to different wavelengths." },
      { key: "C", text: "Different people perceive colours differently, creating infinite colour options." },
      { key: "D", text: "Cone cells detect only dim light." },
    ],
    correctAnswer: "B",
    explanation: "The text states that three types of cone cells react to different wavelengths, giving humans perception of color.",
  },
  {
    id: 702,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 7: Human Eye and Light Spectrum",
      text: `All the known colors are represented by the light spectrum. Despite there being almost an infinite number of colors, human eyes can only see a tiny fraction of this spectrum. Humans see a certain color when a specific type of wavelength is emitted. For example, red is characterized by a wavelength between 635–700 nanometers. It is on the extreme end of the visible spectrum, as we can only see colors emitted at wavelengths between 390–700 nanometers.

Red is a type of pure color. It is created from a single wavelength. Colors such as pink are created from a mix of different wavelengths. It is our eyes' cone cells that allow us to process these colors. There are three types of cone cells and each reacts differently depending on the wavelength they detect. It is this that gives us our perception of color.

Another type of cell found mostly in our retinas can detect every dry dim light. These are called rod cells and are used almost entirely for night vision and peripheral vision. Scientists have been able to use wavelengths of light despite not being able to see them. One example is infrared light, which has wavelengths longer than those found in visible light. Infrared light has been used to improve our night vision, forecast the weather, and diagnose illnesses.`,
    },
    question: "Which statement CANNOT be inferred from the passage?",
    options: [
      { key: "A", text: "Only 25% of the light spectrum is visible to humans." },
      { key: "B", text: "Infrared light has wavelengths longer than visible light." },
      { key: "C", text: "Humans recognise colours when specific wavelengths are emitted." },
      { key: "D", text: "Humans can only see some colours in the light spectrum." },
    ],
    correctAnswer: "A",
    explanation: "The passage notes that humans see 'a tiny fraction' of the light spectrum, but never mentions a 25% statistic.",
  },
  {
    id: 703,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 7: Human Eye and Light Spectrum",
      text: `All the known colors are represented by the light spectrum. Despite there being almost an infinite number of colors, human eyes can only see a tiny fraction of this spectrum. Humans see a certain color when a specific type of wavelength is emitted. For example, red is characterized by a wavelength between 635–700 nanometers. It is on the extreme end of the visible spectrum, as we can only see colors emitted at wavelengths between 390–700 nanometers.

Red is a type of pure color. It is created from a single wavelength. Colors such as pink are created from a mix of different wavelengths. It is our eyes' cone cells that allow us to process these colors. There are three types of cone cells and each reacts differently depending on the wavelength they detect. It is this that gives us our perception of color.

Another type of cell found mostly in our retinas can detect every dry dim light. These are called rod cells and are used almost entirely for night vision and peripheral vision. Scientists have been able to use wavelengths of light despite not being able to see them. One example is infrared light, which has wavelengths longer than those found in visible light. Infrared light has been used to improve our night vision, forecast the weather, and diagnose illnesses.`,
    },
    question: "Which statement is TRUE according to the passage?",
    options: [
      { key: "A", text: "Different colours emit different wavelengths." },
      { key: "B", text: "Pink is created by mixing two colours." },
      { key: "C", text: "Higher-intensity colours have longer wavelengths." },
      { key: "D", text: "Pure colours are found only at the extreme end of the spectrum." },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly states that humans perceive a color when a specific type of wavelength is emitted.",
  },

  // PASSAGE 8: Guam Snakes
  {
    id: 801,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 8: Guam Snakes",
      text: `Guam is known for having lots of snakes—more than a million of them. In an attempt to control the excessive population, government biologists provided the snakes with special mice filled with Tylenol, a medication harmful to snakes. However, since snakes reproduce quickly, residents wonder whether this plan will work.

The government's main task is now to keep these snakes off nearby islands, where tourism is important. For example, Hawaii's tourism industry depends heavily on native birds, which are threatened if snakes spread there.

Authorities say they are studying snake behaviour to address the problem more effectively while gathering information that could help if Hawaii ever becomes overpopulated with snakes.`,
    },
    question: "Why does the author mention that authorities are studying snake behaviour?",
    options: [
      { key: "A", text: "To emphasise that studying snake behaviour is unnecessary." },
      { key: "B", text: "To indicate preparations for a mice overpopulation." },
      { key: "C", text: "To highlight efforts to understand snake behaviour for public safety." },
      { key: "D", text: "To suggest authorities are not taking effective action." },
    ],
    correctAnswer: "C",
    explanation: "The research aims to understand snake behavior to effectively control populations and protect public safety and wildlife.",
  },

  // PASSAGE 9: Coastal Blue-Carbon Ecosystems
  {
    id: 901,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 9: Coastal Blue-Carbon Ecosystems",
      text: `The coastal ecosystems of mangroves, tidal marshes, and seagrass meadows provide numerous benefits that are essential for climate change adaptation along coasts globally. These include protection from storms and sea-level rise, prevention of shoreline erosion, regulation of coastal water quality, provision of habitat for commercially important fisheries and endangered marine species, and food security for many coastal communities.

Additionally, these ecosystems sequester and store significant amounts of coastal blue carbon from the atmosphere and ocean and are recognised for mitigating climate change.

Despite these benefits, they are among the most threatened ecosystems on Earth, with 340,000 to 980,000 hectares being destroyed annually.`,
    },
    question: "What is the synonym of 'marshes'?",
    options: [
      { key: "A", text: "Wasteland" },
      { key: "B", text: "Lake" },
      { key: "C", text: "Desert" },
      { key: "D", text: "Swamp" },
    ],
    correctAnswer: "D",
    explanation: "'Marshes' refers to wetland areas, making 'Swamp' the accurate synonym.",
  },
  {
    id: 902,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 9: Coastal Blue-Carbon Ecosystems",
      text: `The coastal ecosystems of mangroves, tidal marshes, and seagrass meadows provide numerous benefits that are essential for climate change adaptation along coasts globally. These include protection from storms and sea-level rise, prevention of shoreline erosion, regulation of coastal water quality, provision of habitat for commercially important fisheries and endangered marine species, and food security for many coastal communities.

Additionally, these ecosystems sequester and store significant amounts of coastal blue carbon from the atmosphere and ocean and are recognised for mitigating climate change.

Despite these benefits, they are among the most threatened ecosystems on Earth, with 340,000 to 980,000 hectares being destroyed annually.`,
    },
    question: "Which option is NOT a benefit provided by coastal ecosystems?",
    options: [
      { key: "A", text: "Mitigating climate change" },
      { key: "B", text: "Protection from drought" },
      { key: "C", text: "Protection from sea storms" },
      { key: "D", text: "Regulation of coastal water quality" },
    ],
    correctAnswer: "B",
    explanation: "Coastal ecosystems protect from storms, erosion, and sea-level rise, but 'Protection from drought' is not mentioned.",
  },
  {
    id: 903,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 9: Coastal Blue-Carbon Ecosystems",
      text: `The coastal ecosystems of mangroves, tidal marshes, and seagrass meadows provide numerous benefits that are essential for climate change adaptation along coasts globally. These include protection from storms and sea-level rise, prevention of shoreline erosion, regulation of coastal water quality, provision of habitat for commercially important fisheries and endangered marine species, and food security for many coastal communities.

Additionally, these ecosystems sequester and store significant amounts of coastal blue carbon from the atmosphere and ocean and are recognised for mitigating climate change.

Despite these benefits, they are among the most threatened ecosystems on Earth, with 340,000 to 980,000 hectares being destroyed annually.`,
    },
    question: "What is the synonym of 'meadows'?",
    options: [
      { key: "A", text: "Lagoon" },
      { key: "B", text: "Desert" },
      { key: "C", text: "Pond" },
      { key: "D", text: "Pasture" },
    ],
    correctAnswer: "D",
    explanation: "'Meadows' refers to grassland areas, synonymous with 'Pasture'.",
  },

  // PASSAGE 10: Vincent van Gogh and Fruit Colour
  {
    id: 1001,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 10: Vincent van Gogh & Fruit Colour",
      text: `Part A: Vincent van Gogh
Vincent van Gogh frequently experienced seizures due to temporal lobe epilepsy. His behaviour was also influenced by bipolar disorder, leading to strong religious and artistic enthusiasm, periods of exhaustion, depression, and eventually suicide.

To relieve anxiety and depression, he turned to absinthe, a toxic alcoholic drink containing thujone, which may have worsened his condition. Other theories suggest that the drug digitalis may have contributed to the yellow tint seen in many of his paintings. Some also believe that lead poisoning from lead-based paints affected his vision.

His famous painting The Starry Night has been linked to retinal swelling, hallucinations, and even mathematical turbulence patterns such as Kolmogorov scaling. The passage also mentions that autistic individuals often possess strong pattern-recognition abilities, which may have influenced his artistic style.

Part B: Fruit Colour and Seed Dispersal
Fruit colour helps fruits attract animals that eat them and disperse their seeds. A study of 383 tropical plant species in Costa Rica and Peru found that black was the most common fruit colour eaten by birds, followed by red. The study concluded that colourful fruits improve the chances of successful seed dispersal because they are easier for animals to locate.`,
    },
    question: "What does the word 'affinity' mean in the passage?",
    options: [
      { key: "A", text: "Confusion" },
      { key: "B", text: "Attraction" },
      { key: "C", text: "Dislike" },
      { key: "D", text: "Suspicion" },
    ],
    correctAnswer: "B",
    explanation: "'Affinity' refers to a natural liking or attraction toward something.",
  },
  {
    id: 1002,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 10: Vincent van Gogh & Fruit Colour",
      text: `Part A: Vincent van Gogh
Vincent van Gogh frequently experienced seizures due to temporal lobe epilepsy. His behaviour was also influenced by bipolar disorder, leading to strong religious and artistic enthusiasm, periods of exhaustion, depression, and eventually suicide.

To relieve anxiety and depression, he turned to absinthe, a toxic alcoholic drink containing thujone, which may have worsened his condition. Other theories suggest that the drug digitalis may have contributed to the yellow tint seen in many of his paintings. Some also believe that lead poisoning from lead-based paints affected his vision.

His famous painting The Starry Night has been linked to retinal swelling, hallucinations, and even mathematical turbulence patterns such as Kolmogorov scaling. The passage also mentions that autistic individuals often possess strong pattern-recognition abilities, which may have influenced his artistic style.

Part B: Fruit Colour and Seed Dispersal
Fruit colour helps fruits attract animals that eat them and disperse their seeds. A study of 383 tropical plant species in Costa Rica and Peru found that black was the most common fruit colour eaten by birds, followed by red. The study concluded that colourful fruits improve the chances of successful seed dispersal because they are easier for animals to locate.`,
    },
    question: "The author mentions Van Gogh's autistic condition mainly to:",
    options: [
      { key: "A", text: "Inform about Kolmogorov scaling." },
      { key: "B", text: "Explain the yellow tint." },
      { key: "C", text: "Explain the cause of his death." },
      { key: "D", text: "Illustrate how it influenced The Starry Night." },
    ],
    correctAnswer: "D",
    explanation: "The text connects pattern recognition associated with autism to the complex mathematical turbulence depicted in The Starry Night.",
  },
  {
    id: 1003,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 10: Vincent van Gogh & Fruit Colour",
      text: `Part A: Vincent van Gogh
Vincent van Gogh frequently experienced seizures due to temporal lobe epilepsy. His behaviour was also influenced by bipolar disorder, leading to strong religious and artistic enthusiasm, periods of exhaustion, depression, and eventually suicide.

To relieve anxiety and depression, he turned to absinthe, a toxic alcoholic drink containing thujone, which may have worsened his condition. Other theories suggest that the drug digitalis may have contributed to the yellow tint seen in many of his paintings. Some also believe that lead poisoning from lead-based paints affected his vision.

His famous painting The Starry Night has been linked to retinal swelling, hallucinations, and even mathematical turbulence patterns such as Kolmogorov scaling. The passage also mentions that autistic individuals often possess strong pattern-recognition abilities, which may have influenced his artistic style.

Part B: Fruit Colour and Seed Dispersal
Fruit colour helps fruits attract animals that eat them and disperse their seeds. A study of 383 tropical plant species in Costa Rica and Peru found that black was the most common fruit colour eaten by birds, followed by red. The study concluded that colourful fruits improve the chances of successful seed dispersal because they are easier for animals to locate.`,
    },
    question: "Which method did Van Gogh use to relieve anxiety and depression?",
    options: [
      { key: "A", text: "Consuming absinthe" },
      { key: "B", text: "Prescription drugs" },
      { key: "C", text: "Swallowing paint" },
      { key: "D", text: "Drinking kerosene" },
    ],
    correctAnswer: "A",
    explanation: "The passage explicitly states that he consumed absinthe to relieve anxiety and depression.",
  },
  {
    id: 1004,
    section: "Reading Comprehension",
    passage: {
      title: "Passage 10: Vincent van Gogh & Fruit Colour",
      text: `Part A: Vincent van Gogh
Vincent van Gogh frequently experienced seizures due to temporal lobe epilepsy. His behaviour was also influenced by bipolar disorder, leading to strong religious and artistic enthusiasm, periods of exhaustion, depression, and eventually suicide.

To relieve anxiety and depression, he turned to absinthe, a toxic alcoholic drink containing thujone, which may have worsened his condition. Other theories suggest that the drug digitalis may have contributed to the yellow tint seen in many of his paintings. Some also believe that lead poisoning from lead-based paints affected his vision.

His famous painting The Starry Night has been linked to retinal swelling, hallucinations, and even mathematical turbulence patterns such as Kolmogorov scaling. The passage also mentions that autistic individuals often possess strong pattern-recognition abilities, which may have influenced his artistic style.

Part B: Fruit Colour and Seed Dispersal
Fruit colour helps fruits attract animals that eat them and disperse their seeds. A study of 383 tropical plant species in Costa Rica and Peru found that black was the most common fruit colour eaten by birds, followed by red. The study concluded that colourful fruits improve the chances of successful seed dispersal because they are easier for animals to locate.`,
    },
    question: "What can be concluded about the relationship between fruit colour and seed dispersal?",
    options: [
      { key: "A", text: "Bright colours reduce seed dispersal." },
      { key: "B", text: "Plants with colourful fruits have a higher chance of successful seed dispersal." },
      { key: "C", text: "Seed dispersal is more effective when fruits are difficult to find." },
      { key: "D", text: "Fruit colour does not significantly impact seed dispersal." },
    ],
    correctAnswer: "B",
    explanation: "The study concluded that colorful fruits improve seed dispersal success because they are more easily located by animals.",
  },

  // GRAMMAR & VOCABULARY
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
