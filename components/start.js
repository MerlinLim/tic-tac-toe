import NewGameButton from "./newgamebutton"

const Start = () => {
  return (
    <div className="w-80 h-80 flex flex-col justify-evenly rounded-lg shadow-lg bg-orange-900">
        <div className="flex justify-center text-xl text-amber-50 pb-20">
          Tic-Tac-Toe
        </div>
        <div className="flex justify-center">
          <NewGameButton />
        </div>
    </div>
  )
}
export default Start

