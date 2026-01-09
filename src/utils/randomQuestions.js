export function getRandomQuestions(questions, count = 10) {
  return [...questions].sort(() => Math.random() - 0.5).slice(0, count);
}
