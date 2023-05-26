import clsx from "clsx";
import Button from "../Button";
import { useState } from "react";

interface InputProps {
  title: string
  onSubmit: (s: string) => void;
  className?: string
}

const Input = ({
  title,
  onSubmit,
  className,
}: InputProps) => {

  const [data, setData] = useState<string>('')
  const [error, setError] = useState<string>('')

  function onInputChange(e: React.FormEvent<HTMLInputElement>){

    setError("")

    const stringValue = e.currentTarget.value
    if (stringValue.length == 0){
      setError('Key in a size!')
    }
    const numericValue = Number(stringValue)
    if (Number.isNaN(numericValue)){
      setError('Please key in a number!')
    }

    // All is good, then set data
    setData(stringValue)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSubmit(data);
    }
  }

  function onClick(){
    const stringValue = data
    if (stringValue.length == 0){
      setError('Key in a size!')
      return
    }
    const numericValue = Number(stringValue)
    if (Number.isNaN(numericValue)){
      setError('Please key in a number!')
      return
    }


    onSubmit(data)
  }

  return (
    <div className={clsx(className)}>
      <Button
        text={title}
        onClick={onClick}
      />
      <div className="flex">
        <input
          className="w-10 bg-transparent text-center"
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={onClick}
          onChange={(e) => onInputChange(e)}
          value={data}
        />
      </div>
    </div>
  );
};

export default Input;
