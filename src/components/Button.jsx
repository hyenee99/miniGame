export default function Button({
  width = "w-70",
  height = "h-18",
  color = "#FFBCBC",
  text,
  onClick,
}) {
  return (
    <button
      className={`${width} ${height} text-2xl sm:text-3xl font-bold rounded-xl cursor-pointer bg-[#FFFCD8] hover:bg-[#fbf4a7]`}
      style={{ color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
