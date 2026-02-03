import { useState } from "react";
import { getRandomQuestions } from "../utils/randomQuestions";
import { Questions } from "../data/questions";
import { quizResultTexts } from "../utils/quizResultText";

export function useQuiz() {
  const [questions, setQuestions] = useState(() =>
    getRandomQuestions(Questions, 10),
  );
  console.log(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("question"); // "question" | "result" | "final"
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCnt, setCorrectCnt] = useState(0);
  const [error, setError] = useState("");

  const currentQuestion = questions[currentIndex];
  const rate = Math.round((correctCnt / questions.length) * 100);
  const resultText = quizResultTexts.find((r) => rate >= r.min).text;
  const percentile = 100 - rate;

  const checkAnswer = (userAnswer) => {
    if (currentQuestion.type === "subjective") {
      const normalize = (v) => v.trim().replace(/\s+/g, "").toLowerCase();

      return normalize(currentQuestion.answer) === normalize(userAnswer);
    }

    return currentQuestion.answer === userAnswer;
  };

  const handleSubmit = (answer) => {
    if (currentQuestion.type === "subjective") {
      if (!answer || answer.trim() === "") {
        setError("답을 입력해주세요!");
        return;
      }
    }
    setError("");

    const correct = checkAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      setCorrectCnt((prev) => prev + 1);
    }
    setPhase("result");
  };

  const handleNext = () => {
    if (currentIndex + 1 === questions.length) {
      setPhase("final");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setUserAnswer("");
      setIsCorrect(null);
      setPhase("question");
    }
  };

  const resetQuiz = () => {
    setQuestions(getRandomQuestions(Questions, 10));
    setCurrentIndex(0);
    setCorrectCnt(0);
    setUserAnswer("");
    setIsCorrect(null);
    setPhase("question");
  };

  return {
    currentIndex,
    phase,
    userAnswer,
    isCorrect,
    error,
    currentQuestion,
    percentile,
    resultText,

    setUserAnswer,
    handleSubmit,
    handleNext,
    resetQuiz,
  };
}
