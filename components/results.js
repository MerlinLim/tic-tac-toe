import NewGameButton from "./newgamebutton"

const Results = ({winner, draw, resetGame}) => {

    let message = ""
    if (draw){
        message = "It's a draw, Try again!"
    }else{
        message = winner + " is the winner!"
    }

  return (
    <div className="w-80 h-80 flex flex-col justify-evenly rounded-lg shadow-lg bg-orange-900">
        <div className="flex justify-center text-xl text-amber-50 pb-20">
          {message}
        </div>
        <div className="flex justify-center">
          <NewGameButton onClick={resetGame} />
        </div>
    </div>
  )
}
export default Results

