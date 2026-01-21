import Button from "../components/Button";
import QuizResult from "../components/QuizResult";
import QuizFinal from "../components/QuizFinal";
import { useQuiz } from "../hooks/useQuiz";

export default function QuizPage() {
  const {
    phase,
    userAnswer,
    setUserAnswer,
    isCorrect,
    error,
    currentQuestion,
    percentile,
    resultText,
    handleSubmit,
    handleNext,
    resetQuiz,
  } = useQuiz();

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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(userAnswer);
                  }
                }}
                placeholder="답을 입력하세요"
                className="border-2 border-[#FFBCBC] rounded-md bg-white w-[75%] sm:w-[30%] p-3"
              />
              <Button
                text="▶"
                width="w-12"
                height="h-12"
                type="submit"
                onClick={() => handleSubmit(userAnswer)}
              />
            </div>
          )}
          {error && <p className="text-sm text-red-500">{error}</p>}

          {/* 객관식인 경우 */}
          {currentQuestion.type === "objective" && (
            <div className="flex flex-col gap-5 w-[70%] sm:w-[30%]">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSubmit(idx)}
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
            <QuizResult
              isCorrect={isCorrect}
              answer={currentQuestion.answer}
              onNext={handleNext}
            />
          )}

          {currentQuestion.type === "objective" && (
            <QuizResult
              isCorrect={isCorrect}
              answer={currentQuestion.options[currentQuestion.answer]}
              onNext={handleNext}
            />
          )}
        </>
      )}

      {phase === "final" && (
        <QuizFinal
          percent={percentile}
          resultText={resultText}
          onReplay={resetQuiz}
        />
      )}
    </div>
  );
}
