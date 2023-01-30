import React from 'react'
import Cell from "components/cell"

const Grid = ({array, onClick}) => {
  return (
    <div className="w-60 h-60 md:w-72 md:h-72 flex justify-center">
        <div className="w-full h-full grid gap-0 grid-rows-3 divide-y-2 divide-black items-center">
            <div className="w-full h-full grid gap-0 grid-cols-3 divide-x-2 divide-black items-center">
                <Cell value={array[0]} onClick={()=>onClick(0)}/>
                <Cell value={array[1]} onClick={()=>onClick(1)}/>
                <Cell value={array[2]} onClick={()=>onClick(2)}/>
            </div>
            <div className="w-full h-full grid gap-0 grid-cols-3 divide-x-2 divide-black items-center">
                <Cell value={array[3]} onClick={()=>onClick(3)}/>
                <Cell value={array[4]} onClick={()=>onClick(4)}/>
                <Cell value={array[5]} onClick={()=>onClick(5)}/>
            </div>
            <div className="w-full h-full grid gap-0 grid-cols-3 divide-x-2 divide-black items-center">
                <Cell value={array[6]} onClick={()=>onClick(6)}/>
                <Cell value={array[7]} onClick={()=>onClick(7)}/>
                <Cell value={array[8]} onClick={()=>onClick(8)}/>
            </div>
        </div> 
    </div>
  )
}

export default Grid