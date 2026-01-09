import { useState } from "react";
import { Questions } from "../data/questions";
import { getRandomQuestions } from "../utils/randomQuestions";

export default function QuizPage() {
  const [questions] = useState(() => getRandomQuestions(Questions, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(questions);
  return <div>퀴즈페이지</div>;
}
