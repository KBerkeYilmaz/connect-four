import { useState } from "react";

const Holes = (props) => {
  const { id, turn, hasChips, setHasChips, rowIndex, columnIndex } = props;

  const handleClick = (e) => {
   
      const newBoard = [...props.board]; // Copy the board

      // Find the bottom-most empty row in the clicked column
      let targetRow;
      for (let i = newBoard.length - 1; i >= 0; i--) {
        if (!newBoard[i][columnIndex]) {
          targetRow = i;
          break;
        }
      }

      // If we found an empty row, add the chip
      if (targetRow !== undefined) {
        newBoard[targetRow][columnIndex] = turn === 1 ? "R" : "Y";
        setHasChips(newBoard); // Set the new board state
        props.changeTurn(); // Change the turn after making a move
      }
    
  };

  const chipColor =
    hasChips === "Y"
      ? "bg-player2 border-t-4"
      : hasChips === "R"
      ? "bg-player1 border-t-4"
      : "bg-background-main";

  return (
    <div
      key={id}
      id={id}
      onClick={handleClick}
      className="w-auto h-auto flex justify-center items-center"
    >
      <div
        className={`border-4 w-9/12 h-full border-black transition-all ease-in-out delay-50 border-t-[15px] ${chipColor}  rounded-[100%] cursor-pointer`}
      ></div>
    </div>
  );
};

export default Holes;
