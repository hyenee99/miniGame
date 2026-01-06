import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function ProgressBar({ current, total }) {
  const progressPercent = (current / total) * 100;
  const navigate = useNavigate();

  return (
    <div className="p-3 flex items-center gap-3">
      <IoIosArrowBack
        className="text-2xl sm:text-4xl cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <div className="rounded-md bg-white h-4 w-[90%] sm:w-full overflow-hidden">
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
