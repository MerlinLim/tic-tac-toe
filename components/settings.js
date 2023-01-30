import Button from "./button"
import SmallButton from "./smallButton"
const Setting = (props) => {
    return (
        <div className="w-full flex justify-around">
            <div className="w-1/6 text-2xl font-bold flex flex-col justify-center">{props.setting_text}:</div>
            <div className="w-4/6 flex justify-evenly">
                <div><SmallButton text = {props.text_0}/></div>
                <div><SmallButton text = {props.text_1}/></div>
            </div>
        </div>
    )
}

const Settings = ({toggleSettings}) => {
  return (
    <div className = "h-full flex flex-col justify-center items-center">
        <div className="w-96 h-80 flex flex-col justify-evenly">
            <Setting setting_text={"Mode"} text_0={"3x3"} text_1={"4x4"}/>
            <Setting setting_text={"Sound"} text_0={"On"} text_1={"Off"}/>
        </div>
        <div className="w-96 h-40 flex flex-col justify-center items-center">
            <Button text={"Done"} onClick={toggleSettings}/>
        </div>
    </div>
  )
}

export default Settings