import { useState } from "react"

import GamePage from "@/components/GameFlow/gamePage"
import Results from "@/components/results"
import Home from "@/components/GameFlow/home"
import {checkWin} from "@/utils/logic"
// import  from "@/game/game"

export default function TicTacToe() {
  const[session, toggleSession] = useState(false)

  function toggleGame(){
    toggleSession(true)
  }

  let page = <></>
  if (!session){
    page = <Home toggleGame={toggleGame}/>
  } else if(session){
    page = <GamePage/>
  }

  return (
    <div className = "w-screen h-[85vh] md:h-screen flex-1">
      {page}
    </div>
  );
}
