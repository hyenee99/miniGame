import Button from "./Button";

export default function GameResultActions({ onHome, onReplay }) {
  return (
    <div className="flex gap-5">
      <Button
        text="Home"
        width="w-40 sm:w-70"
        height="h-15 sm:h-18"
        color="#B3A7A7"
        onClick={onHome}
      />
      <Button
        text="Replay"
        width="w-40 sm:w-70"
        height="h-15 sm:h-18"
        onClick={onReplay}
      />
    </div>
  );
}
