import { useState } from "react";
import { Questions } from "../data/questions";
import { getRandomQuestions } from "../utils/randomQuestions";

export default function QuizPage() {
  const [questions] = useState(() => getRandomQuestions(Questions, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const currentQuestion = questions[currentIndex];
  console.log(questions);

  return (
    <div className="flex flex-col gap-10 items-center w-full p-3 text-center">
      <h2 className="text-xl sm:text-2xl leading-relaxed">
        {currentQuestion.question}
      </h2>
      {/* 주관식인 경우 */}
      {currentQuestion.type === "subjective" && (
        <input
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="답을 입력하세요"
          className="border-2 border-[#FFBCBC] rounded-md bg-white w-[85%] sm:w-[30%] p-3"
        />
      )}

      {/* 객관식인 경우 */}
      {currentQuestion.type === "objective" && (
        <div className="flex flex-col gap-5 w-[70%] sm:w-[30%]">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setUserAnswer(idx)}
              className="border-2 border-[#FFBCBC] p-3 sm:p-3 rounded-md bg-white/70 hover:bg-[#F6F6F6] cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
