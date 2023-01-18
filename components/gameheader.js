const Gameheader = ({turn}) => {
  return (
    <div className="w-full h-10 flex flex-col justify-center rounded-lg shadow-lg bg-orange-900 text-amber-50 text-center">
        It is {turn==='X'? 'X' : 'O'} turn!
    </div>
  )
}

export default Gameheader