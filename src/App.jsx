import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import HowToPlay from "./pages/HowToPlay";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainMenu />}
        />
        <Route
          path="/game/pvp"
          element={<Game gameMode="PVP" />}
        />
        <Route
          path="/game/pvc"
          element={<Game gameMode="PVC" />}
        />
        <Route
          path="/how-to-play"
          element={<HowToPlay />}
        />
      </Routes>
    </Router>
  );
}

export default App;
