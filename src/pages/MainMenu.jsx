import { Link } from "react-router-dom";
import Container from "../components/UI/Container";
import Table from "../components/UI/Table";

const MainMenu = () => {
  return (
    <Table >
      <Container className="bg-indigo-400 w-[35%] text-3xl p-8 flex gap-3 flex-col">
        <Container className="bg-yellow-300 text-white h-32 pl-5 font-extrabold">
          <Link to="/game/pvp" className="w-full h-full flex justify-start items-center ">
            <h1>PLAYER VS PLAYER</h1>
          </Link>
        </Container>

        <Container className="bg-red-400 text-black h-32 pl-5 font-extrabold">
          <Link to="/game/pvc" className="w-full h-full flex justify-start items-center ">
            <h1>PLAYER VS CPU</h1>
          </Link>
        </Container>

        <Container className="bg-white text-black h-32 pl-5 font-extrabold">
          <Link to="/how-to-play" className="w-full h-full flex justify-start items-center ">
            <h1>HOW TO PLAY</h1>
          </Link>
        </Container>
      </Container>
    </Table>
  );
};

export default MainMenu;
