import { useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import useReactionTime from "../hooks/useReactionTime";
import { useNavigate } from "react-router-dom";

export default function ReactionTime() {
  const total = 5;
  const { current, status, records, handleClick } = useReactionTime(total);
  const navigate = useNavigate();

  const bgMap = {
    idle: "bg-[#EDEDED]",
    ready: "bg-[#FFBCBC]",
    go: "bg-[#7FFF43]",
  };

  const messageMap = {
    idle: (
      <>
        총 기회는 5번 주어집니다.
        <br />
        화면을 클릭하면 테스트가 시작됩니다.
      </>
    ),
    ready: (
      <div className="flex flex-col">
        <p className="text-2xl font-bold">준비</p>
        <br />
        <p>배경화면이 초록색이 되면 클릭해주세요.</p>
      </div>
    ),
    go: (
      <div className="flex flex-col">
        <p className="text-2xl font-bold">클릭</p>
        <br />
        <p>지금!</p>
      </div>
    ),
  };

  useEffect(() => {
    if (current === total) {
      navigate("/reactiontime/result", { state: { records: records } });
    }
  }, [current, total, navigate, records]);

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar current={current} total={total} />
      {/* 클릭 영역 */}
      <div
        className={`rounded-md h-[60vh] mx-3 text-center flex items-center justify-center p-3 cursor-pointer
        ${bgMap[status]}
        `}
        onClick={handleClick}
      >
        <div className="text-sm sm:text-xl leading-loose">
          {messageMap[status]}
        </div>
      </div>
      {/* 결과 화면 */}
      <div className="flex-1 p-3">
        {records.length === 0 && <p>아직 기록이 없습니다.</p>}

        <ul className="space-y-1 sm:text-xl">
          {records.map((time, idx) => (
            <li key={idx}>
              {idx + 1}회차: {time} ms
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
