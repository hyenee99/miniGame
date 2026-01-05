import ProgressBar from "../components/ProgressBar";
import useReactionTime from "../hooks/useReactionTime";

export default function ReactionTime() {
  const total = 5;
  const { current, status, handleClick } = useReactionTime(total);

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

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar current={current} total={total} />
      <div
        className={`rounded-md h-[50%] flex-2 mx-3 text-center flex items-center justify-center p-3 cursor-pointer
        ${bgMap[status]}
        `}
        onClick={handleClick}
      >
        <div className="text-sm sm:text-xl leading-loose">
          {messageMap[status]}
        </div>
      </div>
      <div className="flex-1">결과 화면</div>
    </div>
  );
}
