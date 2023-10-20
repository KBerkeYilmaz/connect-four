import Holes from "./components/UI/Holes";
import Container from "./components/UI/Container";
import { useState } from "react";

const emptyBoard = () => {
  const rows = 6;
  const columns = 7;
  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = Array(columns).fill(null);
    board.push(row);
  }
  return board;
};

function App() {
  const [board, setBoard] = useState(emptyBoard());
  const [hasChips, setHasChips] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(1);

  const renderBoard = () => {
    // Iterate over each row in the board
    return board.map((row, rowIndex) => {
      // For each row, iterate over each cell
      return row.map((cell, columnIndex) => {
        // Render the Holes component (or a different component based on cell value)
        return (
          <Holes
            key={`r${rowIndex}c${columnIndex}`}
            id={`Cell r${rowIndex}c${columnIndex}`}
            turn={playerTurn}
            changeTurn={changeTurn}
            board={board}
            hasChips={board[rowIndex][columnIndex]}
            setHasChips={setBoard}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
          />
        );
      });
    });
  };

  const changeTurn = () => {
    if (playerTurn === 1) {
      setPlayerTurn(2);
    } else {
      setPlayerTurn(1);
    }
  };

  
  return (
    <div className="w-screen h-screen bg-violet-600 -z-10">
      <div className="z-10 absolute bottom-0 h-1/5 w-full bg-violet-800 rounded-t-[4rem] flex justify-center items-center">
        <p className="text-white text-4xl">Turn: Player {playerTurn}</p>
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
        {renderBoard()}
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
