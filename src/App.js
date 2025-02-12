import { Route, Routes } from "react-router-dom";
import HowToPlay from "./HowToPlay";
import Home from "./Home";
import Game from "./Game";
import NotFound from "./NotFound";
import DifficultyModal from "./DifficultyModal";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game" element={<Game />} />
      <Route exact path="/how-to-play" element={<HowToPlay />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
