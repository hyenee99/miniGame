export default function ProgressBar({ current, total }) {
  const progressPercent = (current / total) * 100;

  return (
    <div className="p-3 flex items-center gap-3">
      <div className="rounded-md bg-white h-4 w-[95%] sm:w-full overflow-hidden">
        <div
          className="h-full bg-[#FFBCBC] transition-all duration-300 rounded-md"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div>
        {current}/{total}
      </div>
    </div>
  );
}
