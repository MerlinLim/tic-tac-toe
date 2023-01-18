const Button = () => {
    function onClick(){
        console.log("hello!")
    }
    
return (
    <div className="text-center" onClick={onClick}>
        !!
    </div>
  )
}

export default Button