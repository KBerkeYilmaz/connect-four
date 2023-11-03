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
      ? "bg-yellow-500"
      : hasChips === "R"
      ? "bg-red-600"
      : "bg-violet-600";

  return (
    <div
      key={id}
      id={id}
      onClick={handleClick}
      className="w-auto h-auto flex justify-center items-center"
    >
      <div
        className={`border-4 w-9/12 h-full border-black transition-all ease-in-out delay-50 ${chipColor} border-t-[15px] rounded-[100%] cursor-pointer`}
      ></div>
    </div>
  );
};

export default Holes;
