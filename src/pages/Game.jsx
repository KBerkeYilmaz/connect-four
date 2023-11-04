import Board from "../components/Board/Board";
import Table from "../components/UI/Table";
import Button from "../components/UI/Button";

const Game = ({ gameMode }) => {
  // Use gameMode as a paramaeter
  // Include the AI logic in this component

  return (
    <Table>
      <Board />
    </Table>
  );
};

export default Game;
