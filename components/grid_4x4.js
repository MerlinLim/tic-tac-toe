
function onClick(id){
    console.log(id)
}

const array = ['','','','',
               '','','','',
               '','','','',
               '','','','',]

const Grid_4x4 = () => {

    return (
        <div className="w-60 h-60 md:w-72 md:h-72 flex justify-center">
            <div className="w-full h-full grid gap-0 grid-rows-4 divide-y-2 divide-black items-center">
                <div className="w-full h-full grid gap-0 grid-cols-4 divide-x-2 divide-black items-center">
                    <Cell value={array[0]} onClick={()=>onClick(0)}/>
                    <Cell value={array[1]} onClick={()=>onClick(1)}/>
                    <Cell value={array[2]} onClick={()=>onClick(2)}/>
                    <Cell value={array[3]} onClick={()=>onClick(3)}/>
                </div>
                <div className="w-full h-full grid gap-0 grid-cols-4 divide-x-2 divide-black items-center">
                    
                    <Cell value={array[4]} onClick={()=>onClick(4)}/>
                    <Cell value={array[5]} onClick={()=>onClick(5)}/>
                    <Cell value={array[6]} onClick={()=>onClick(6)}/>
                    <Cell value={array[7]} onClick={()=>onClick(7)}/>
                </div>
                <div className="w-full h-full grid gap-0 grid-cols-4 divide-x-2 divide-black items-center">
                    
                    <Cell value={array[8]} onClick={()=>onClick(8)}/>
                    <Cell value={array[9]} onClick={()=>onClick(9)}/>
                    <Cell value={array[10]} onClick={()=>onClick(10)}/>
                    <Cell value={array[11]} onClick={()=>onClick(11)}/>
                </div>
                <div className="w-full h-full grid gap-0 grid-cols-4 divide-x-2 divide-black items-center">
                    
                    <Cell value={array[12]} onClick={()=>onClick(12)}/>
                    <Cell value={array[13]} onClick={()=>onClick(13)}/>
                    <Cell value={array[14]} onClick={()=>onClick(14)}/>
                    <Cell value={array[15]} onClick={()=>onClick(15)}/>
                </div>
            </div> 
        </div>
      )
}

export default Grid_4x4