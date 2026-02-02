import { useState } from "react";

export default function useGuessNumber() {
  const [attempts, setAttempts] = useState(10);
  const [value, setValue] = useState("");
  const [answer] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [message, setMessage] = useState("");
  const [shakeKey, setShakekey] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hintCount, setHintCount] = useState(0); // 사용한 힌트 횟수
  const [upDownHint, setUpDownHint] = useState(null);
  const [history, setHistory] = useState([]);

  const getHint = () => {
    if (hintCount === 0) {
      return answer > 50
        ? "힌트 💡: 50보다 큽니다"
        : "힌트 💡: 50보다 작습니다";
    }

    if (hintCount === 1) {
      return answer % 2 === 0 ? "힌트 💡: 짝수입니다" : "힌트 💡: 홀수입니다";
    }

    if (hintCount === 2) {
      const min = Math.max(1, answer - 5);
      const max = Math.min(100, answer + 5);
      return `힌트 💡: ${min} ~ ${max} 사이입니다`;
    }

    return "더 이상 힌트가 없습니다";
  };

  const handleSubmit = () => {
    setMessage("");
    if (value === "") return;

    setHasSubmitted(true);

    const numberValue = Number(value);

    if (numberValue < 1 || numberValue > 100) {
      setMessage("1부터 100 사이의 값을 입력해주세요");
      return;
    }

    setAttempts((prev) => prev - 1);
    if (numberValue === answer) {
      setIsCorrect(true);
    } else {
      setHistory((prev) => [
        {
          value: numberValue,
          result: numberValue > answer ? "Down!" : "Up!",
        },
        ...prev,
      ]);

      if (numberValue > answer ? setUpDownHint("Down!") : setUpDownHint("Up!"));
      setShakekey((prev) => prev + 1);
    }

    setValue("");
  };

  return {
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
    upDownHint,
    history,
  };
}
