import Score from "components/score"
import Grid from "components/grid"
import Gameheader from "./gameheader"

const Game = (props) => {
  return (
    <div className = "h-full flex flex-col">
      <div className="px-10 py-10 flex justify-start">
        <Score nought_score={props.score[0]} circle_score={props.score[1]}/>
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <div className="h-1/6 flex flex-col justify-center items-center">
          <Gameheader turn={props.turn}/>
        </div>
        <div className="h-4/6 flex flex-col justify-center items-center">
          <Grid array ={props.array} onClick={props.onClick}/>
        </div>
      </div>
    </div>
  )
}

export default Game