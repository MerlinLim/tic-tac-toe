import Game from "components/game"
import Gameheader from "components/gameheader"

export default function game() {
  return (
    <div className = "w-screen h-screen flex justify-center bg-blue-400">
        <div className="flex flex-col justify-center">
            <div className="py-2">
                <Gameheader/>
            </div>
            <Game />
        </div>
    </div>
  );
}
