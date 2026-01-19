import { useState } from "react";
import { Questions } from "../data/questions";
import { getRandomQuestions } from "../utils/randomQuestions";
import Button from "../components/Button";
import QuizResult from "../components/QuizResult";

export default function QuizPage() {
  const [questions] = useState(() => getRandomQuestions(Questions, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("question"); // "question" | "result" | "final"
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const currentQuestion = questions[currentIndex];
  console.log(questions);

  const checkAnswer = (userAnswer) => {
    if (currentQuestion.type === "subjective") {
      const normalize = (v) => v.trim().replace(/\s+/g, "").toLowerCase();

      return normalize(currentQuestion.answer) === normalize(userAnswer);
    }

    return currentQuestion.answer === userAnswer;
  };

  const handleSubmit = () => {
    const correct = checkAnswer(userAnswer);
    console.log(correct ? "맞음" : "틀림");
    setIsCorrect(correct);
    setPhase("result");
  };

  return (
    <div className="flex flex-col gap-10 items-center w-full p-3 text-center">
      {phase === "question" && (
        <>
          <h2 className="text-xl sm:text-2xl leading-relaxed">
            {currentQuestion.question}
          </h2>
          {/* 주관식인 경우 */}
          {currentQuestion.type === "subjective" && (
            <div className="w-full flex gap-3 justify-center">
              <input
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="답을 입력하세요"
                className="border-2 border-[#FFBCBC] rounded-md bg-white w-[75%] sm:w-[30%] p-3"
              />
              <Button
                text="▶"
                width="w-12"
                height="h-12"
                type="submit"
                onClick={handleSubmit}
              />
            </div>
          )}

          {/* 객관식인 경우 */}
          {currentQuestion.type === "objective" && (
            <div className="flex flex-col gap-5 w-[70%] sm:w-[30%]">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setUserAnswer(idx);
                    handleSubmit(idx);
                  }}
                  className="border-2 border-[#FFBCBC] p-3 sm:p-3 rounded-md bg-white/70 hover:bg-[#F6F6F6] cursor-pointer"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {phase === "result" && (
        <>
          {currentQuestion.type === "subjective" && (
            <QuizResult isCorrect={isCorrect} answer={currentQuestion.answer} />
          )}

          {currentQuestion.type === "objective" && (
            <QuizResult
              isCorrect={isCorrect}
              answer={currentQuestion.options[currentQuestion.answer]}
            />
          )}
        </>
      )}
    </div>
  );
}
