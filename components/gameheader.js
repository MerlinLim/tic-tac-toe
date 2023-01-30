import { ImCross, ImRadioUnchecked } from "react-icons/im"

const Gameheader = ({turn}) => {
  function setIcon(value){
    if (value === "X"){
        return <ImCross className="w-[36px] h-[36px]"/>;
    }else if (value === "O"){
        return < ImRadioUnchecked className="w-[36px] h-[36px]"/>
    }    
}
const showIcon = setIcon(turn);

  return (
    <div className="w-96 flex justify-center items-center
                    text-4xl font-bold text-black">
        <span className="px-5">{showIcon} </span> turn!
    </div>
  )
}

export default Gameheader