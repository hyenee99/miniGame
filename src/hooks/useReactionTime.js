import { useRef } from "react";
import { useState } from "react";

export default function useReactionTime(total) {
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("idle");
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);
  const [records, setRecords] = useState([]);

  const startGame = () => {
    setStatus("ready");
    const randomTime = Math.random() * 3000 + 2000;
    timeoutRef.current = setTimeout(() => {
      setStatus("go");
      startTimeRef.current = Date.now(); //초록색이 된 시점 저장
    }, randomTime);
  };

  const handleClick = () => {
    if (status === "idle") {
      // 처음 시작
      if (current > total) return;
      startGame();
      return;
    }

    if (status === "ready") {
      // 준비 상태
      clearTimeout(timeoutRef.current);
      startGame();
      return;
    }

    if (status === "go") {
      // 시작 상태
      setRecords((prev) => [...prev, reactionTime]);
      setCurrent((prev) => prev + 1);
      const reactionTime = Date.now() - startTimeRef.current;
      startGame();
    }
  };

  return {
    current,
    status,
    handleClick,
    records,
  };
}
