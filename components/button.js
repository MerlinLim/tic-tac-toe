import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <div className="w-36 h-10 md:w-44 md:h-12
                    flex flex-col justify-center
                    text-center rounded-lg shadow-xl
                    text-lg md:text-2xl bg-sky-500 text-white"
         onClick={onClick}>
        {text}
    </div>
  )
}

export default Button