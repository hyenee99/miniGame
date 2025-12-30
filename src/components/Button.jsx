export default function Button({
  width = 'w-70',
  height = 'h-15',
  color='#FFBCBC',
  text,
}) {
  return (
    <button
      className={`${width} ${height} text-3xl font-bold rounded-2xl cursor-pointer bg-[#FFFCD8] hover:bg-[#fbf4a7]`}
      style={{color:color}}
    >
      {text}
    </button>
  )
}
