import { useState } from "react"

import Game from "components/game"
import Results from "components/results"
import Start from "components/start.js"
import Settings from "components/settings"

export default function Home() {
  const[session, toggleSession] = useState(false)
  const[showSettings, setShowSettings] = useState(false)
  const[win, setWin] = useState(false)
  const[draw, setDraw] = useState(false)
  const[turn, setTurn] = useState('X')
  const[score, setScore] = useState([0, 0])
  const[array, setArray] = useState([
    '','','',
    '','','',
    '','',''
  ]);

  function toggleGame(){
    toggleSession(true)
  }

  function toggleSettings(){
    setShowSettings(!showSettings)
  }

  function addScore(winner:string){
    let newScore = []
    if (winner === "X"){
      newScore = [score[0] + 1, score[1]]
    } else if (winner === "O"){
      newScore = [score[0], score[1] + 1]
    }else{
      newScore = score
    }
    setScore(newScore)
  }

  function resetGame(){
    setTurn(turn === 'X'? 'O': 'X')
    setWin(false)
    setDraw(false)
    setArray([
      '','','',
      '','','',
      '','',''
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
      addScore(turn)
      return
    } else if (res == "draw") {
      setDraw(true)
      return
    }
    updateTurn()
  }

  let page = <></>
  if (showSettings){
    page = <Settings toggleSettings={toggleSettings} />
  }else if (!session){
    page = <Start toggleGame={toggleGame} toggleSettings={toggleSettings}/>
  } else if (session && (win || draw)){
    page = <Results score={score} winner={turn} draw={draw} resetGame={resetGame} toggleSettings= {toggleSettings}/>
  } else if(session && !win){
    page = <Game score={score} array={array} turn={turn} onClick={onClick}/>
  }

  return (

    <div className = "w-screen h-screen">
        {page}
    </div>
  );
}
