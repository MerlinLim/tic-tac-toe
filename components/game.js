import Button from "components/button"

const Game = ({array, onClick}) => {
  return (
    <div className="w-96 h-96 flex justify-center rounded-lg bg-orange-900">
        <div className="w-full grid gap-1 grid-cols-3 grid-rows-3
                        divide-x-4 divide-y-4 divide-black
                        items-center">
            <Button value={array[0]} onClick={()=>onClick(0)}/>
            <Button value={array[1]} onClick={()=>onClick(1)}/>
            <Button value={array[2]} onClick={()=>onClick(2)}/>
            <Button value={array[3]} onClick={()=>onClick(3)}/>
            <Button value={array[4]} onClick={()=>onClick(4)}/>
            <Button value={array[5]} onClick={()=>onClick(5)}/>
            <Button value={array[6]} onClick={()=>onClick(6)}/>
            <Button value={array[7]} onClick={()=>onClick(7)}/>
            <Button value={array[8]} onClick={()=>onClick(8)}/>
        </div>
    </div>
  )
}

export default Game