import Score from "./score";
import Button from "@/components/Button";

interface ResultsProps {
  result: number | string
  onRetry: () => void
}

const Results = ({
  result,
  onRetry
}: ResultsProps) => {

  let draw = result === 'draw'

  return (
    <div className="absolute flex inset-0 backdrop-blur-sm z-10 flex-col items-center ">
      <div className="p-3 bg-red-600 text-white text-center rounded-2xl shadow-xl text-lg my-auto">
        {draw ? "It's a draw!" : `Player ${result} won!`}
      </div>
      <div className="mb-32">
        <Button text={"Retry"} onClick={onRetry} />
      </div>
    </div>
  );
};
export default Results;
