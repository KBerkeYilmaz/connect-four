import { Link } from "react-router-dom";
import Table from "../components/UI/Table";
import Container from "../components/UI/Container";
import Button from "../components/UI/Button";

const HowToPlay = () => {
  return (
    <Table>
      <div className="w-[26%] flex items-start justify-between  ">
        <Button>
            <Link to="/" >
          <h1 className="text-white w-36 text-center p-6 text-xl">Menu</h1></Link>
        </Button>
      </div>
      <Container className="w-[26%] h-[52%] flex flex-col justify-start items-start p-8">
        <h1>How to Play</h1>
      </Container>
    </Table>
  );
};

export default HowToPlay;
