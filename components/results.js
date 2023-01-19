import Score from "./score"
import Button from "./button"

const Results = ({score, winner, draw, resetGame, toggleSettings}) => {

    let message = ""
    if (draw){
        message = "It's a draw, Try again!"
    }else{
        message = winner + " Wins!"
    }

    return (
      <div className = "w-full h-full flex flex-col">
        <div className="w-full px-10 py-10 flex justify-start">
          <Score nought_score={score[0]} circle_score={score[1]}/>
        </div>
        <div className="h-1/4"></div> {/*padding*/}
        <div className="flex flex-col justify-center self-center">
          <div className="box-border w-96 h-96 flex flex-col">
              <div className="w-full h-5/6 flex flex-col justify-center text-center text-5xl font-bold">
                {message}
              </div>
              <div className="h-40 flex flex-col justify-evenly">
                <div className="flex justify-center">
                  <Button text = {"Try Again"} onClick = {resetGame}/>
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

