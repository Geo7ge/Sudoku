import { useState, useEffect } from "react";
import { generateSudokuGrid, checkGameComplete } from "./Functions.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GameCompleteModal from "./GameCompleteModal";

import Tile from "./Tile";

function Game() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const difficulty = parseInt(searchParams.get("difficulty")) || 50; // Valoare default 50

  const [cells, setCells] = useState([]);
  const [initialCells, setInitialCells] = useState([]);
  const [isGameComplete, setIsGameComplete] = useState(false);

  useEffect(() => {
    const sudokuGrid = generateSudokuGrid(difficulty);
    const fixedCells = sudokuGrid.map((row) => row.map((cell) => cell !== 0));
    setCells(sudokuGrid);
    setInitialCells(fixedCells);
  }, [difficulty]);

  const handleClick = (rowIndex, colIndex) => {
    if (initialCells[rowIndex][colIndex]) return;

    const newCells = [...cells];
    newCells[rowIndex][colIndex] = (newCells[rowIndex][colIndex] + 1) % 10;
    setCells(newCells);

    if (checkGameComplete(newCells)) {
      setIsGameComplete(true);
    }
  };

  const handlePlayAgain = () => {
    setIsGameComplete(false);
    const sudokuGrid = generateSudokuGrid(difficulty);
    const fixedCells = sudokuGrid.map((row) => row.map((cell) => cell !== 0));
    setCells(sudokuGrid);
    setInitialCells(fixedCells);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 p-4 bg-gray-100">
      <h1 className="text-4xl sm:text-5xl md:text-6xl pt-10">Sudoku</h1>

      <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] aspect-square border-black border-8 box-content">
        {cells.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-9">
            {row.map((cell, colIndex) => (
              <Tile
                key={colIndex}
                value={cell}
                rowIndex={rowIndex}
                colIndex={colIndex}
                isFixed={initialCells[rowIndex][colIndex]}
                onClick={() => handleClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg text-base sm:text-lg hover:bg-blue-600 transition"
      >
        Back to Home
      </button>

      <GameCompleteModal
        isOpen={isGameComplete}
        onPlayAgain={handlePlayAgain}
        onBackHome={() => navigate("/")}
      />
    </div>
  );
}

export default Game;
