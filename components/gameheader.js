const Gameheader = ({turn}) => {
  return (
    <div className="w-30 h-10 flex flex-col justify-center text-4xl font-bold text-black text-center">
        {turn} turn!
    </div>
  )
}

export default Gameheader