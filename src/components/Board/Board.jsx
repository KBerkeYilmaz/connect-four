import { useState } from "react";
import { Link } from "react-router-dom";

import Holes from "../UI/Holes";
import Container from "../UI/Container";
import PlayerCard from "../UI/PlayerCard";
import BottomBanner from "../UI/BottomBanner";
import Button from "../UI/Button";
import Table from "../UI/Table";

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

const checkForWinner = (board) => {
  const directions = [
    { x: 0, y: 1 }, // vertical
    { x: 1, y: 0 }, // horizontal
    { x: 1, y: 1 }, // diagonal left-to-right
    { x: 1, y: -1 }, // diagonal right-to-left
  ];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      for (let dir of directions) {
        if (checkDirection(board, x, y, dir)) {
          return board[y][x];
        }
      }
    }
  }
  return null;
};

const checkDirection = (board, startX, startY, direction) => {
  const targetPlayer = board[startY][startX];
  if (!targetPlayer) return false;

  for (let step = 1; step < 4; step++) {
    const x = startX + direction.x * step;
    const y = startY + direction.y * step;
    if (
      y < 0 ||
      y >= board.length ||
      x < 0 ||
      x >= board[y].length ||
      board[y][x] !== targetPlayer
    ) {
      return false;
    }
  }
  return true;
};

const Board = () => {
  const [board, setBoard] = useState(emptyBoard());
  const [hasChips, setHasChips] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [tileDropped, setTileDropped] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(0);

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
    const winner = checkForWinner(board);
    if (winner) {
      setWinner(winner);
      // Stop the game, show an alert, or handle it some other way.
      return; // Do not change the turn if there's a winner.
    }

    if (playerTurn === 1) {
      setPlayerTurn(2);
    } else {
      setPlayerTurn(1);
    }
  };

  const handleClick = () => {
    
  }
  return (
    <>
      <div className="w-2/5 h-40 flex items-center justify-around absolute top-0 right-0 left-0 m-auto gap-96">
        <Button>
            <Link to="/" >
          <h1 className="text-white w-36 text-center p-6 text-xl">Menu</h1></Link>
        </Button>
        <Button> 
        <h1 className="text-white w-36 text-center p-6 text-xl">Restart</h1>
        </Button>
      </div>
      <Container
        className=" 
        w-2/5 
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

      <PlayerCard
        key={0}
        playerNo={1}
        playerScore={0}
        position="left"
      />
      <PlayerCard
        key={1}
        playerNo={2}
        playerScore={0}
        position="right"
      />

      <BottomBanner playerTurn={playerTurn} />
    </>
  );
};

export default Board;


