import Button from "./button"
import Score from "./score"
import { ImCross } from "react-icons/im";

const Start = ({toggleGame, toggleSettings}) => {
  return (
    <div className = "h-full flex flex-col">
      <div className="px-10 py-10 flex justify-start">
        <Score nought_score={0} circle_score={0}/>
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <div className="w-96 h-[24rem] md:w-3/4 md:h-[30rem] self-center">
          <div className="h-4/6 flex flex-col justify-center text-center
                          text-4xl md:text-5xl font-bold">
            Tic-Tac-Toe
          </div>
          <div className="h-2/6 flex flex-col justify-around">
            <div className="flex justify-center">
              <Button text = {"New Game"} onClick = {toggleGame}/>
            </div>
            <div className="flex justify-center">
              <Button text = {"Settings"} onClick = {toggleSettings}/>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
export default Start

