import Button from "../components/Button";
import gameController from "../img/game-controller.png"
export default function Mainpage() {
  return (
    <div className="relative flex flex-col gap-8 items-center">
      <img src={gameController} alt="logo" className="absolute w-30 h-30 sm:w-40 sm:h-40 -top-20 -left-5 sm:-top-25 sm:-left-20 rotate-[-20deg] z-0"/>
      <h1 className="text-5xl z-10">Mini Game</h1>
      <Button text="PLAY" />
    </div>
  )
}