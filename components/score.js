import React from 'react'

const Score = ({nought_score, circle_score}) => {
  return (
    <div className="w-40 md:w-48 h-16
                    flex flex-col justify-center
                    text-center rounded-2xl shadow-xl
                    text-lg md:text-2xl bg-red-600 text-white">
        <div className="flex justify-evenly">
            <div>Score: </div>
            <div>{nought_score}</div>
            <div> - </div>
            <div>{circle_score}</div>
        </div>
    </div>
  )
}

export default Score