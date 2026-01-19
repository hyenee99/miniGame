import { useNavigate } from "react-router-dom";
import GameResultActions from "./GameResultActions";

export default function QuizFinal({ percent, resultText, onReplay }) {
  const navigate = useNavigate();
  return (
    <div className="text-center space-y-10 p-5">
      <p className="text-xl sm:text-3xl">
        당신은 <span className="text-red-500">상위 {percent}% </span>입니다
      </p>
      <p className="whitespace-pre-line sm:text-xl">{resultText}</p>
      <GameResultActions
        onHome={() => navigate("/select")}
        onReplay={onReplay}
      />
    </div>
  );
}
