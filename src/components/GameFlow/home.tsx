import Button from "@/components/Button";

interface HomeProps {
  toggleGame: () => void;
}

const Home = ({ toggleGame }: HomeProps) => {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="flex basis-1/2 items-end text-4xl md:text-5xl font-bold">
        Tic-Tac-Toe
      </div>
      <div className="basis-1/2 mx-auto">
        <div className="mt-10 md:mt-12">
          <Button text={"New Game"} onClick={toggleGame} />
        </div>
      </div>
    </div>
  );
};
export default Home;
