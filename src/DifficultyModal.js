import { useState } from "react";

function DifficultyModal({ onClose, onConfirm }) {
  const [difficulty, setDifficulty] = useState(80);

  const handleChange = (e) => {
    setDifficulty(Number(e.target.value));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Select Difficulty
        </h2>

        <div className="flex justify-between text-gray-700 font-semibold mb-2">
          <span>Hard</span>
          <span>Easy</span>
        </div>
        <input
          type="range"
          min="20"
          max="80"
          step="1"
          value={difficulty}
          onChange={handleChange}
          className="w-full"
        />

        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => onConfirm(difficulty)}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default DifficultyModal;
