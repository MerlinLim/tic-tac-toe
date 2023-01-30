import { useState } from "react"
import { ImCross, ImRadioUnchecked } from "react-icons/im"

const Cell = ({value, onClick}) => {
    const [flag, setFlag] = useState(false)

    function click (){
        if (!flag){
            onClick()
            setFlag(!flag)
        }
    }

    function setIcon(value){
        if (value === "X"){
            return <ImCross className="w-2/6 h-2/6"/>;
        }else if (value === "O"){
            return < ImRadioUnchecked className="w-2/6 h-2/6"/>
        }    
    }
    const showIcon = setIcon(value);
    

    return (
        <div className="h-full flex flex-col justify-center items-center"
            onClick={click}>
            {showIcon}
        </div>
    )
}

export default Cell