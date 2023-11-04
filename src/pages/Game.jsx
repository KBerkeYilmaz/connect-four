import Board from "../components/Board/Board";
import Table from "../components/UI/Table";


const Game = ({ gameMode }) => {
  // Use gameMode to determine how the game behaves
  // For example, if it's Player vs. CPU, you'd include the AI logic in this component

  return (
    <Table>
        <Board />
      {/* Game UI goes here */}
      {/* <h1>Game Mode: {gameMode}</h1>
      <p>This is game</p>  */}
      {/* ... */}
    </Table>
  );
};

export default Game;
