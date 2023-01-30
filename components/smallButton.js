import React from 'react'

const SmallButton = ({text, onClick}) => {
  return (
    <div className="w-20 h-10 md:w-24 md:h-12
                    flex flex-col justify-center
                    text-center rounded-lg shadow-xl
                    text-lg md:text-2xl bg-sky-500 text-white"
         onClick={onClick}>
        {text}
    </div>
  )
}

export default SmallButton