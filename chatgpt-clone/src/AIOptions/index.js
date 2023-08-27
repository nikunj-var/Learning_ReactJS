const arrayItems = [
  {
    name: "Q&A",
    id: "q&a",
    description: "Answer questions based on existing knowledge",
  },
  {
    name: "Grammar Correction",
    id: "grammarCorrection",
    description: "Correct sentences into Standard English",
    option: {
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 50,
    },
  },
  {
    name: "Summarize for a 2nd grader",
    id: "summary",
    description: "Translate difficult text into simpler concepts.",
  },
  {
    name: "English to other languages",
    id: "translate",
    description: "Translate English text into French,Spanish and ",
  },
  {
    name: "Movie to Emoji",
    id: "movieToEmoji",
    description: "Convert movie titles into emoji",
  },
  {
    name: "Explain code",
    id: "explainCode",
    description: "Explain a complicated piece of code",
  },
  {
    name: "Javascript to Python",
    id: "jstopy",
    description: "Convert simple Js expressions into Python",
  },
];
export default arrayItems;
