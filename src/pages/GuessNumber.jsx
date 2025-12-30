import { IoIosArrowBack } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
export default function GuessNumber() {
  const [attempts, setAttempts] = useState(10);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    // ⭐ 전체를 column flex로
    <div className="min-h-screen flex flex-col">
      {/* 상단 헤더 */}
      <div className="flex w-full justify-between items-center p-3 sm:p-5">
        <IoIosArrowBack
          className="text-2xl sm:text-4xl cursor-pointer"
          onClick={() => navigate(-1)}
        />

        <div className="flex items-center gap-5">
          <FaLightbulb className="text-2xl sm:text-4xl text-yellow-400 cursor-pointer" />
          <div className="flex flex-col items-center sm:text-xl">
            <p>남은 횟수</p>
            <p className="font-bold">{attempts}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center flex-1">
        <p className="sm:text-xl text-center leading-relaxed">
          1부터 100 사이 숫자를 맞혀보세요!
          <br />
          당신의 추리력은?
        </p>

        <div className="w-full flex gap-3 justify-center">
          <input
            type="number"
            min={1}
            max={100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="p-3 rounded-md bg-white w-[70%] h-12 sm:w-[30%]"
            placeholder="숫자를 입력하세요"
          />
          <Button text="▶" width="w-12" height="h-12" />
        </div>
      </div>
    </div>
  );
}
