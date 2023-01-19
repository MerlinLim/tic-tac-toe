import Button from "components/button"
import Gameheader from "./gameheader"

const Game = ({array, turn, onClick}) => {
  return (
    <div>
      <div className="py-2">
        <Gameheader turn={turn}/>
      </div>
      <div className="w-96 h-96 flex justify-center rounded-lg">
        <div className="w-full grid gap-0 grid-rows-3 divide-y-2 divide-black items-center">
          <div className="w-full h-full grid gap-0 grid-cols-3 divide-x-2 divide-black items-center">
            <Button value={array[0]} onClick={()=>onClick(0)}/>
            <Button value={array[1]} onClick={()=>onClick(1)}/>
            <Button value={array[2]} onClick={()=>onClick(2)}/>
          </div>
          <div className="w-full h-full grid gap-0 grid-cols-3 divide-x-2 divide-black items-center">
            <Button value={array[3]} onClick={()=>onClick(3)}/>
            <Button value={array[4]} onClick={()=>onClick(4)}/>
            <Button value={array[5]} onClick={()=>onClick(5)}/>
          </div>
          <div className="w-full h-full grid gap-0 grid-cols-3 divide-x-2 divide-black items-center">
            <Button value={array[6]} onClick={()=>onClick(6)}/>
            <Button value={array[7]} onClick={()=>onClick(7)}/>
            <Button value={array[8]} onClick={()=>onClick(8)}/>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Game