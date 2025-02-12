import React from "react";

function GameCompleteModal({ isOpen, onPlayAgain, onBackHome }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Congratulations! 🎉</h2>
        <p className="text-lg text-gray-600 mb-6">
          You have completed the Sudoku puzzle!
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onPlayAgain}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
          >
            Play Again
          </button>
          <button
            onClick={onBackHome}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg text-lg hover:bg-gray-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameCompleteModal;
