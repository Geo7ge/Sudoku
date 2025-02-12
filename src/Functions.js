export function generateSudokuGrid(difficulty) {
  let grid = new Array(9).fill(null).map(() => new Array(9).fill(0));

  function checkGrid(grid) {
    return grid.every((row) => row.every((cell) => cell !== 0));
  }

  function isValid(grid, row, col, num) {
    if (grid[row].includes(num)) return false;

    if (grid.some((r) => r[col] === num)) return false;

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (grid[r][c] === num) return false;
      }
    }
    return true;
  }

  function fillGrid(grid) {
    for (let i = 0; i < 81; i++) {
      let row = Math.floor(i / 9);
      let col = i % 9;
      if (grid[row][col] === 0) {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(
          () => Math.random() - 0.5
        );
        for (let num of numbers) {
          if (isValid(grid, row, col, num)) {
            grid[row][col] = num;
            if (checkGrid(grid)) return true;
            else if (fillGrid(grid)) return true;
          }
        }
        grid[row][col] = 0;
        return false;
      }
    }
    return true;
  }
  fillGrid(grid);

  function removeNumbers(grid, targetCount = 20, attempts = 5) {
    let placedNumbers = grid.flat().filter((num) => num !== 0).length;
    while (attempts > 0 && placedNumbers > targetCount) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);
      while (grid[row][col] === 0) {
        row = Math.floor(Math.random() * 9);
        col = Math.floor(Math.random() * 9);
      }
      let backup = grid[row][col];
      grid[row][col] = 0;
      placedNumbers--;

      let copyGrid = JSON.parse(JSON.stringify(grid));
      let counter = 0;

      function solveGrid(copyGrid) {
        for (let i = 0; i < 81; i++) {
          let r = Math.floor(i / 9);
          let c = i % 9;
          if (copyGrid[r][c] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(copyGrid, r, c, num)) {
                copyGrid[r][c] = num;
                if (checkGrid(copyGrid)) {
                  counter++;
                  return true;
                } else if (solveGrid(copyGrid)) return true;
              }
            }
            copyGrid[r][c] = 0;
            return false;
          }
        }
        return true;
      }
      solveGrid(copyGrid);
      if (counter !== 1) {
        grid[row][col] = backup;
        placedNumbers++;
        attempts--;
      }
    }
  }
  removeNumbers(grid, difficulty);
  return grid;
}

export function checkGameComplete(grid) {
  function isGridFull(grid) {
    return grid.every((row) => row.every((cell) => cell !== 0));
  }

  function isGridValid(grid) {
    function isValidSet(numbers) {
      const filtered = numbers.filter((num) => num !== 0);
      return new Set(filtered).size === filtered.length;
    }

    for (let i = 0; i < 9; i++) {
      let row = grid[i];
      let col = grid.map((row) => row[i]);

      if (!isValidSet(row) || !isValidSet(col)) {
        return false;
      }
    }

    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        let box = [];
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            box.push(grid[row + r][col + c]);
          }
        }
        if (!isValidSet(box)) return false;
      }
    }

    return true;
  }

  return isGridFull(grid) && isGridValid(grid);
}
