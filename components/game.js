import Score from "components/score"
import Grid from "components/grid"
import Gameheader from "./gameheader"

const Game = ({score, array, turn, onClick}) => {
  return (
    <div className = "w-full h-full flex flex-col">
      <div className="px-10 py-10 flex justify-start">
        <Score nought_score={score[0]} circle_score={score[1]}/>
      </div>
      <div className="h-1/6"></div> {/*padding*/}
      
      <div className="flex flex-col justify-center self-center">
        <div className="w-96 h-full flex flex-col justify-center items-center">
          <div className="py-10">
            <Gameheader turn={turn}/>
          </div>
            <Grid array ={array} onClick= {onClick}/>
        </div>
      </div>
    </div>
  )
}

export default Game