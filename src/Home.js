import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DifficultyModal from "./DifficultyModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleStartGame = (difficulty) => {
    setIsModalOpen(false);
    navigate(`/game?difficulty=${difficulty}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-12">Sudoku</h1>

      <div className="flex space-x-6">
        <button
          onClick={handlePlayClick}
          className="px-8 py-4 bg-green-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Play
        </button>

        <button
          onClick={() => navigate("/how-to-play")}
          className="px-8 py-4 bg-blue-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          How to Play
        </button>
      </div>
      {isModalOpen && (
        <DifficultyModal
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleStartGame}
        />
      )}
    </div>
  );
}

export default Home;
