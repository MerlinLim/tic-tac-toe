import Score from "./score"
import Button from "./button"

const Results = ({score, winner, draw, resetGame, toggleSettings}) => {

    let message = ""
    if (draw){
        message = "It's a draw, try again!"
    }else{
        message = winner + " Wins!"
    }

    return (
      <div className = "h-full flex flex-col">
        <div className="px-10 py-10 flex justify-start">
          <Score nought_score={score[0]} circle_score={score[1]}/>
        </div>
        <div className="w-full h-full flex flex-col justify-center">
          <div className="w-96 h-[24rem] md:w-3/4 md:h-[30rem] self-center">
            <div className="h-4/6 flex flex-col justify-center text-center
                            text-4xl md:text-5xl font-bold">
              {message}
            </div>
            <div className="h-2/6 flex flex-col justify-around">
              <div className="flex justify-center">
                <Button text = {"New Game"} onClick = {resetGame}/>
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
export default Results

