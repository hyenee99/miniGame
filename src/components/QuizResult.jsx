import Button from "./Button";

export default function QuizResult({ isCorrect, answer }) {
  return (
    <>
      {isCorrect ? (
        <div className="text-xl flex flex-col gap-20 items-center sm:text-2xl">
          정답!🥳
          <Button text="▶" width="w-30" height="h-12" />
        </div>
      ) : (
        <div className="flex flex-col gap-20 text-xl items-center sm:text-2xl">
          <div className="space-y-5">
            <p>오답!😅</p> <p>정답은 {answer} 입니다.</p>
          </div>
          <Button text="▶" width="w-30" height="h-12" />
        </div>
      )}
    </>
  );
}
