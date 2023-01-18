import { useState } from "react"

import Button from "components/button"

const Game = () => {
    const [array, setArray] = useState([
        {id: 0, value:""},
        {id: 1, value:""},
        {id: 2, value:""},
        {id: 3, value:""},
        {id: 4, value:""},
        {id: 5, value:""},
        {id: 6, value:""},
        {id: 7, value:""},
        {id: 8, value:""}
    ]);

    const[turn, setTurn] = useState([
        {id:0, value:"X"}
    ])

    

  return (
    <div className="w-80 h-80 flex justify-center rounded-lg bg-orange-900">
        <div className="w-full grid gap-4 grid-cols-3 grid-rows-3 items-center">
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
        </div>
    </div>
  )
}

export default Game