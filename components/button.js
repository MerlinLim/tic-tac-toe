import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <div className="w-24 md:w-40 h-10 flex flex-col justify-center
                    md:text-xl text-center rounded-lg shadow-xl
                    bg-sky-500 text-white"
         onClick={onClick}>
        {text}
    </div>
  )
}

export default Button