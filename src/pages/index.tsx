import { useState } from "react"

import Game from "components/game"
import Gameheader from "components/gameheader"
import Results from "components/results"
import Start from "components/start.js"

export default function Home() {
  const[start, setStart] = useState(true)
  const[win, setWin] = useState(false)
  const[draw, setDraw] = useState(false)
  const[turn, setTurn] = useState('X')
  const [array, setArray] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]);

  function toggleGame(){
    setStart(false)
  }

  function resetGame(){
    setTurn(turn === 'X'? 'O': 'X')
    setWin(false)
    setDraw(false)
    setArray([
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]);
  }

  function updateTurn(){
    turn === 'X'? setTurn('O') : setTurn('X')
  }

  function checkWin(array:string[], turn:string){
    // See horizontal
    for (let i = 0; i < 3; i++){
      if (array[0 + i * 3] === turn &&
          array[1 + i * 3] === turn &&
          array[2 + i * 3] === turn){
            console.log("hello!")
            return turn
          }
    }

    // See vertical
    for (let i = 0; i < 3; i++){
      if (array[0 + i] === turn &&
          array[3 + i] === turn &&
          array[6 + i] === turn){
            return turn
          }
    }

    // See diagonal
    if (array[0] === turn &&
        array[4] === turn &&
        array[8] === turn){
          return turn
        }

    // See diagonal
    if (array[2] === turn &&
        array[4] === turn &&
        array[6] === turn){
          return turn
      }
    // check for empty cells
    for (let i = 0; i < 9; i++){
      if (array[i] === ""){
        return ""
      }
    }

    // No cell empty, return draw
    return "draw"

  }

  function onClick(id:number) {
    const newArr = [...array]
    newArr[id] = turn
    setArray(newArr)
    const res = checkWin(newArr, turn)
    if (res === turn){
      setWin(true)
      return
    } else if (res == "draw") {
      setDraw(true)
      return
    }
    updateTurn()
  }

  let page = <></>
  if (start){
    page = 
      <div className="flex flex-col justify-center">
        <Start toggleGame={toggleGame}/>
      </div>
  } else if (!start && (win || draw)){
    page =
    <div className="flex flex-col justify-center">
      <Results winner={turn} draw={draw} resetGame={resetGame}/>
    </div>
  } else if(!start && !win){
    page =
    <div className="flex flex-col justify-center">
      <div className="py-2">
          <Gameheader turn={turn}/>
      </div>
      <Game array={array} onClick={onClick}/>
    </div>
  }

  return (
    <div className = "w-screen h-screen flex justify-center bg-blue-400">
      {page}
    </div>
  );
}
