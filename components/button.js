import { useState } from "react"

const Button = ({value, onClick}) => {
    const [flag, setFlag] = useState(false)

    function click (){
        if (!flag){
            onClick()
            setFlag(!flag)
        }
    }
    
    return (
        <div className="h-full flex flex-col justify-center text-center"
            onClick={click}>
            {value}
        </div>
    )
}

export default Button