import { useLocation, useNavigate } from "react-router-dom";
import GameResultActions from "../components/GameResultActions";
import { getReactionResult } from "../utils/getReactionResult";

export default function ReactionTimeResult() {
  const location = useLocation();
  const { records } = location.state || {};
  const navigate = useNavigate();

  const recordsAverage = (records) => {
    const sum = records.reduce((a, b) => a + b, 0);
    const average = Math.floor(sum / records.length);
    return average;
  };

  const average = recordsAverage(records);
  const result = getReactionResult(average);
  return (
    <div className="text-center space-y-6 sm:space-y-8">
      <p className="text-2xl font-bold sm:text-3xl">반응 속도 테스트 결과</p>
      <div className="flex justify-center items-center gap-3">
        <p className="text-3xl text-[#FFBCBC] font-bold">{average} ms</p>
        <p className="sm:text-xl">({result.percent})</p>
      </div>
      <p className="sm:text-xl">{result.description}</p>
      <GameResultActions
        onHome={() => navigate("/select")}
        onReplay={() => navigate("/reactiontime")}
      />
    </div>
  );
}
