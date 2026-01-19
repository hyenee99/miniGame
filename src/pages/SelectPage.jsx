import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Selectpage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10">
      <Button
        text="숫자 맞히기"
        color="#1F2937"
        onClick={() => navigate("/guessnumber")}
      />
      <Button
        text="반응 속도 테스트"
        color="#1F2937"
        onClick={() => navigate("/reactiontime")}
      />
      <Button
        text="상식 퀴즈"
        color="#1F2937"
        onClick={() => navigate("/quiz")}
      />
    </div>
  );
}
