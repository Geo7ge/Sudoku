import { useNavigate } from "react-router-dom";

function HowToPlay() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        How to Play Sudoku
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          📜 Rules of Sudoku
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            The game is played on a 9×9 grid, divided into 9 smaller 3×3 boxes.
          </li>
          <li>Each row must contain the numbers 1-9 without repetition.</li>
          <li>
            Each column must also contain the numbers 1-9 without repetition.
          </li>
          <li>Each 3×3 box must contain the numbers 1-9 without repetition.</li>
          <li>
            Some numbers are pre-filled; your task is to complete the grid
            following these rules.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          🧠 Tips for Beginners
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Start by looking for rows, columns, or 3×3 boxes that already have
            many numbers filled in.
          </li>
          <li>
            Use the "pencil marking" method to write down possible numbers
            before committing.
          </li>
          <li>
            Look for "naked singles" – where only one number is possible in a
            cell.
          </li>
          <li>
            Avoid guessing; use logical deduction to find the right placements.
          </li>
          <li>
            Practice makes perfect! Start with easier puzzles and work your way
            up.
          </li>
        </ul>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
