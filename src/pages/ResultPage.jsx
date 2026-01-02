import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Button from "../components/Button";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { message, success } = location.state;
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col gap-15">
      {success && <Confetti width={width} height={height} />}
      <p className="sm:text-3xl text-center">{message}</p>
      <div className="flex gap-5">
        <Button
          text="Home"
          width="w-40 sm:w-70"
          height="h-15 sm:h-18"
          color="#B3A7A7"
          onClick={() => navigate("/select")}
        />
        <Button
          text="Replay"
          width="w-40 sm:w-70"
          height="h-15 sm:h-18"
          onClick={() => navigate("/guessnumber")}
        />
      </div>
    </div>
  );
}
