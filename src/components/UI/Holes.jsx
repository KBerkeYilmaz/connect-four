import { useState } from "react";

const Holes = (props) => {
  const { id, turn, hasChips, setHasChips, rowIndex, columnIndex } = props;

  const handleClick = (e) => {
    const target = e.target;

    console.log(target.id);
    if (!hasChips) {
      // Only if the hole is empty
      const newBoard = [...props.board];
      newBoard[rowIndex][columnIndex] = turn === 1 ? "R" : "Y";
      setHasChips(newBoard);
      props.changeTurn();
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
        className={`border-4 w-8/12 h-full border-black transition-all ease-in-out delay-50 ${chipColor} border-t-[15px] rounded-[100%] cursor-pointer`}
      ></div>
    </div>
  );
};

export default Holes;
