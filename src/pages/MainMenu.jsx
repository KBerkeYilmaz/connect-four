import { Link } from "react-router-dom";
import Container from "../components/UI/Container";
import Table from "../components/UI/Table";

const MainMenu = () => {
  return (
    <Table >
      <div className=" w-[33%] text-3xl flex gap-3 flex-col ">
        <Container className="bg-player1 text-white h-32 pl-5">
          <Link to="/game/pvp" className="w-full h-full flex justify-start items-center ">
            <h1>PLAYER VS PLAYER</h1>
          </Link>
        </Container>

        <Container className="bg-player2 text-black h-32 pl-5">
          <Link to="/game/pvc" className="w-full h-full flex justify-start items-center ">
            <h1>PLAYER VS CPU</h1>
          </Link>
        </Container>

        <Container className="bg-white text-black h-32 pl-5">
          <Link to="/how-to-play" className="w-full h-full flex justify-start items-center ">
            <h1>HOW TO PLAY</h1>
          </Link>
        </Container>
      </div>
    </Table>
  );
};

export default MainMenu;
