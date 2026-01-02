import { IoIosArrowBack } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useGuessNumber from "../hooks/useGuessNumber";
export default function GuessNumber() {
  const navigate = useNavigate();
  const {
    attempts,
    answer,
    value,
    setValue,
    isCorrect,
    message,
    hintCount,
    setHintCount,
    shakeKey,
    handleSubmit,
    hasSubmitted,
    getHint,
  } = useGuessNumber();

  console.log(answer);

  useEffect(() => {
    if (isCorrect) {
      navigate("/guessnumber/result", {
        state: {
          message: `축하합니다! ${10 - attempts} 번 만에 정답을 맞혔습니다!🎉`,
          success: true,
        },
      });
    } else if (attempts === 0 && !isCorrect) {
      navigate("/guessnumber/result", {
        state: {
          message: `아쉽네요! 정답은 ${answer} 이었습니다!`,
          success: false,
        },
      });
    }
  }, [isCorrect, navigate, attempts, answer]);

  const handleHintClick = () => {
    if (attempts > 5) {
      toast("⚠️ 힌트는 기회가 5번 이하일 때만 사용할 수 있어요");
      return;
    }

    if (hintCount >= 3) {
      toast("❌ 힌트를 모두 사용했어요");
      return;
    }

    const hint = getHint();
    toast(hint);
    setHintCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex w-full justify-between items-center p-3 sm:p-5">
        <IoIosArrowBack
          className="text-2xl sm:text-4xl cursor-pointer"
          onClick={() => navigate(-1)}
        />

        <div className="flex items-center gap-5">
          <FaLightbulb
            className={`
              text-2xl sm:text-4xl
              cursor-pointer
              ${attempts <= 5 ? "text-yellow-400" : "text-gray-500"}
            `}
            onClick={handleHintClick}
          />
          <div className="flex flex-col items-center sm:text-xl">
            <p>남은 횟수</p>
            <p
              className={`font-bold ${
                attempts < 3 ? "text-red-400" : "text-black"
              }`}
            >
              {attempts}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center flex-1">
        <p className="sm:text-3xl text-center leading-relaxed">
          1부터 100 사이 숫자를 맞혀보세요!
          <br />
          당신의 추리력은?
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-full flex gap-3 justify-center"
        >
          <input
            key={shakeKey}
            type="number"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className={`
              p-3 rounded-md bg-white w-[70%] h-12 sm:w-[30%]
              transition
              ${
                hasSubmitted && !isCorrect
                  ? "border-2 border-red-400 shake"
                  : "border border-gray-300"
              }
          `}
            placeholder="숫자를 입력하세요"
          />
          <Button text="▶" width="w-12" height="h-12" type="submit" />
        </form>
        {!isCorrect && message && (
          <p className="text-red-400 text-sm">{message}</p>
        )}
      </div>
    </div>
  );
}
