const NewGameButton = () => {
  function onClick () {
    console.log("hello!")
  }

  return (
    <div className="w-24 md:w-40 h-10 
    flex flex-col justify-center
    md:text-xl text-center rounded shadow-lg bg-amber-50 " onClick={onClick}>
        <h4>New Game</h4>
    </div>
  )
}

export default NewGameButton