import { useEffect, useState } from "react";
import { GameArray, checkWin, getNextPlayerId, setCell } from "@/game/game";
import clsx from "clsx";
import Input from "@/components/Input";
import Results from "../results";
import Button from "../Button";

interface GamePageProps {}

const GamePage = ({}: GamePageProps) => {
  const [gridSize, setGridSize] = useState<number>(3);
  const [numPlayers, setNumPlayers] = useState<number>(2);
  const [gameArray, setGameArray] = useState<GameArray>([]);
  const [currentPlayerId, setCurrentPlayerId] = useState<number>(0);
  const [result, setResult] = useState<number | string>("");
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    startNewGame()
  }, [gridSize, numPlayers]);

  function startNewGame() {
    setResult("");
    setHasStarted(false);
    setGameArray([]);
    setCurrentPlayerId(0)
  }

  function onClickGridSize(targetValue: string) {
    if (targetValue.length == 0 || Number.isNaN(Number(targetValue))) {
      return;
    }
    setGridSize(Number(targetValue));
  }

  function onClickPlayerSize(targetValue: string) {
    if (targetValue.length == 0 || Number.isNaN(Number(targetValue))) {
      return;
    }
    const numericValue = Number(targetValue);

    if (numericValue < 2 || numericValue > 90) {
      return;
    }

    setNumPlayers(numericValue);
  }

  function onCellClick(index: number) {
    if (!hasStarted) {
      return;
    }

    // Check if cell is not empty
    if (gameArray[index] != undefined) {
      // do not allow to change
      return;
    }

    // Set array cell
    const newArray = setCell(gameArray, index, currentPlayerId);
    setGameArray(newArray);

    // Check win
    const playerHasWon = checkWin(newArray, currentPlayerId, gridSize);

    if (playerHasWon) {
      setResult(currentPlayerId);
    }

    const EMPTYVALUE = undefined as unknown as number;

    if (
      newArray.length == gridSize * gridSize &&
      !newArray.includes(EMPTYVALUE)
    ) {
      setResult("draw");
    }

    // Change turn
    const nextPlayerId = getNextPlayerId(currentPlayerId, numPlayers);
    setCurrentPlayerId(nextPlayerId);
  }

  return (
    <div className="relative h-full flex flex-col items-center">
      {result !== "" && <Results result={result} onRetry={startNewGame} />}
      <div className="absolute flex inset-x-10 top-10">
        <Input
          className="flex flex-row-reverse w-25 bg-gray-500 rounded-lg text-white"
          title={"Size"}
          onSubmit={onClickGridSize}
        />
        <Input
          className="ml-auto flex w-25 bg-gray-500 rounded-lg text-white"
          title={"Players"}
          onSubmit={onClickPlayerSize}
        />
      </div>
      <div className="basis-1/3 flex flex-row text-4xl font-bold text-black items-end">
        <div className={clsx(`block`, { hidden: hasStarted })}>
          <Button
            text={"Start"}
            onClick={() => {
              setHasStarted(true);
            }}
          />
        </div>
        <div className={clsx(``, { hidden: !hasStarted })}>
          <span className="px-5">{currentPlayerId} </span> turn!
        </div>
      </div>
      <div className="relative basis-2/3 flex flex-col">
        <div
          className={clsx(
            `w-[300px] h-[300px] grid my-auto grid-flow-row auto-rows-fr` //divide-x-2 divide-y-2 divide-black `
          )}
        >
          {Array(gridSize)
            .fill(0)
            .map((_, i) => {
              return (
                <div key={i} className="grid grid-flow-col auto-cols-fr">
                  {Array(gridSize)
                    .fill(0)
                    .map((_, k) => {
                      const index = i * gridSize + k;
                      return (
                        <button
                          className="border-2 border-black"
                          key={index}
                          onClick={() => onCellClick(index)}
                        >
                          {gameArray[index] != undefined && (
                            <div className="">{gameArray[index]}</div>
                          )}
                        </button>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
