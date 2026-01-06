import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Button from "../components/Button";
import GameResultActions from "../components/GameResultActions";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { message, success } = location.state;
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col gap-15">
      {success && <Confetti width={width} height={height} />}
      <p className="sm:text-3xl text-center">{message}</p>
      <GameResultActions
        onHome={() => navigate("/select")}
        onReplay={() => navigate("/guessnumber")}
      />
    </div>
  );
}
