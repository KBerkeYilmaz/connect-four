import Holes from "./components/UI/Holes";
import Container from "./components/UI/Container";
import { useState } from "react";

function App() {

  const [playerTurn, setPlayerTurn] = useState("Player 1")


  const renderHoles = () => {
    const holes = [];
    for (let i = 0; i < 42; i++) {
      holes.push(
        <Holes
          key={i}
          id={i}
        />
      );
    }
    return holes;
  };

  const board = () => {
    const column1 = [0, 7, 14, 21, 28, 35];
    const column2 = [1, 8, 15, 22, 29, 36];
    const column3 = [2, 9, 16, 23, 30, 37];
    const column4 = [3, 10, 17, 24, 31, 38];
    const column5 = [4, 11, 18, 25, 32, 39];
    const column6 = [5, 12, 19, 26, 33, 40];
    const column7 = [6, 13, 20, 27, 34, 41];
  };

  return (
    <div className="w-screen h-screen bg-violet-600 -z-10">
      <div className="z-10 absolute bottom-0 h-1/5 w-full bg-violet-800 rounded-t-[4rem] flex justify-center items-center">
        <p className="text-white text-4xl">Turn: {playerTurn}</p>
      </div>
      <Container
        className="w-1/2 
      h-4/6 
      absolute 
      top-1/2 
      left-1/2 
      transform 
      -translate-x-1/2 
      -translate-y-1/2
      grid
      grid-cols-7
      pt-4 
      px-2
      pb-12
      gap-y-2"
      >
        {renderHoles()}
      </Container>

      <Container className="absolute w-40 h-48 top-1/3 left-32 flex flex-col justify-end items-end pb-2">
        <h2 className="flex justify-center items-center w-full h-1/5 text-3xl font-extrabold">
          PLAYER 1
        </h2>
        <p className="flex justify-center items-center w-full h-3/5 text-6xl font-bold">
          0
        </p>
      </Container>
      <Container className="absolute w-40 h-48 top-1/3 right-32 flex flex-col justify-end items-end pb-2">
        
        <h2 className="flex justify-center items-center w-full h-1/5 text-3xl font-extrabold">
          PLAYER 2
        </h2>
        <p className="flex justify-center items-center w-full h-3/5 text-6xl font-bold">
          0
        </p>
      </Container>
    </div>
  );
}

export default App;
