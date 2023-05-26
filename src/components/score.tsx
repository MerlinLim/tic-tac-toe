import React from 'react'

interface ScoreProps {
  nought_score: number
  circle_score: number
}

const Score = ({nought_score, circle_score}: ScoreProps) => {
  return (
    <div className="flex flex-row justify-evenly w-32 py-2 items-center
                    text-center rounded-2xl shadow-xl
                    text-lg bg-red-600 text-white h-fit">
      <div>Score:{' '}</div>
      <div>{nought_score}</div>
      <div> - </div>
      <div>{circle_score}</div>
    </div>
  )
}

export default Score