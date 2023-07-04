import React, { useState } from "react";

const Pathfinder = () => {
  const [rows, setRows] = useState(15);
  const [columns, setColumns] = useState(32);
  const [startCell, setStartCell] = useState(null);
  const [goalCell, setGoalCell] = useState(null);
  const [obstacleCells, setObstacleCells] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [grid, setGrid] = useState([]);
  const [pathCells, setPathCells] = useState([]);

  const handleRowsChange = (e) => {
    let rC = e.target.value;
    if(rC <= 0) {alert("Rows can't be 0!!");}
    setRows(parseInt(rC));
  };

  const handleColumnsChange = (e) => {
    let cC = e.target.value;
    if(cC <= 0) {alert("Columns can't be 0!!");}
    setColumns(parseInt(cC));
  };

  const handleCellClick = (rowIndex, colIndex) => {
    if (obstacleCells.some((cell) => cell.row === rowIndex && cell.col === colIndex)) {
      // Clicked cell is an obstacle cell, remove it
      setObstacleCells(obstacleCells.filter((cell) => cell.row !== rowIndex || cell.col !== colIndex));
    } else if (startCell && startCell.row === rowIndex && startCell.col === colIndex) {
      // Clicked cell is the start cell, unmark it
      setStartCell(null);
    } else if (goalCell && goalCell.row === rowIndex && goalCell.col === colIndex) {
      // Clicked cell is the goal cell, unmark it
      setGoalCell(null);
    } else if (!startCell) {
      // Set the clicked cell as the start cell
      setStartCell({ row: rowIndex, col: colIndex });
    } else if (!goalCell) {
      // Set the clicked cell as the goal cell
      setGoalCell({ row: rowIndex, col: colIndex });
    } else {
      // Add the clicked cell as an obstacle cell
      setObstacleCells([...obstacleCells, { row: rowIndex, col: colIndex }]);
    }
  };

  const handleCellHover = (rowIndex, colIndex) => {
    if (isMouseDown) {
      if (startCell && startCell.row === rowIndex && startCell.col === colIndex) {
        // Hovered cell is the start cell, display alert
        alert("You cannot select the start cell.");
      } else if (goalCell && goalCell.row === rowIndex && goalCell.col === colIndex) {
        // Hovered cell is the goal cell, display alert
        alert("You cannot select the goal cell.");
      } else if (!obstacleCells.some((cell) => cell.row === rowIndex && cell.col === colIndex)) {
        // Add/remove the hovered cell as an obstacle cell
        const updatedObstacles = [...obstacleCells];
        const index = updatedObstacles.findIndex((cell) => cell.row === rowIndex && cell.col === colIndex);
        if (index !== -1) {
          // Cell is already an obstacle, remove it
          updatedObstacles.splice(index, 1);
        } else {
          // Cell is not an obstacle, add it
          updatedObstacles.push({ row: rowIndex, col: colIndex });
        }
        setObstacleCells(updatedObstacles);
      }
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handlePathfinding = () => {
    if (!startCell || !goalCell) {
      alert("Please select both start and goal cells.");
      return;
    }

    setPathCells([]); // Clear the existing path

    const queue = [{ row: startCell.row, col: startCell.col, path: [] }];
    const visited = new Set();

    while (queue.length > 0) {
      const { row, col, path } = queue.shift();

      if (row === goalCell.row && col === goalCell.col) {
        // Goal cell reached, mark the path in the grid
        const updatedGrid = [...grid];
        path.forEach((cell) => {
          updatedGrid[cell.row][cell.col].isPath = true;
        });
        setGrid(updatedGrid);
        setPathCells(path); // Store the new path cells
        return;
      }

      visited.add(`${row},${col}`);

      // Get neighboring cells
      const neighbors = [
        { row: row - 1, col },
        { row, col: col + 1 },
        { row: row + 1, col },
        { row, col: col - 1 },
      ];

      for (const neighbor of neighbors) {
        const { row: neighborRow, col: neighborCol } = neighbor;

        if (
          neighborRow >= 0 &&
          neighborRow < rows &&
          neighborCol >= 0 &&
          neighborCol < columns &&
          !visited.has(`${neighborRow},${neighborCol}`) &&
          !obstacleCells.some((cell) => cell.row === neighborRow && cell.col === neighborCol)
        ) {
          queue.push({ row: neighborRow, col: neighborCol, path: [...path, { row, col }] });
          visited.add(`${neighborRow},${neighborCol}`);
        }
      }
    }

    alert("Path not found.");
  };

  const handleClearGrid = () => {
    setStartCell(null);
    setGoalCell(null);
    setObstacleCells([]);
    setGrid(
      Array.from({ length: rows }).map((_, rowIndex) =>
        Array.from({ length: columns }).map((_, colIndex) => ({
          row: rowIndex,
          col: colIndex,
          isPath: false,
        }))
      )
    );
    setPathCells([]);
  };

  React.useEffect(() => {
    const initialGrid = Array.from({ length: rows }).map((_, rowIndex) =>
      Array.from({ length: columns }).map((_, colIndex) => ({
        row: rowIndex,
        col: colIndex,
        isPath: false,
      }))
    );
    setGrid(initialGrid);
  }, [rows, columns]);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="text-sm md:w-1/6 px-4 py-8 bg-[#e6e5e5] shadow-lg">
          <h2 className="text-2xl mb-4">Instructions:</h2>
          <ol className="space-y-3 list-decimal pl-4">
            <li>Click on a cell to mark it as the start cell.</li>
            <li>Click on another cell to mark it as the goal cell.</li>
            <li>Click on additional cells to mark them as obstacles.</li>
            <li>
              Click on a marked cell to remove it (start cell, goal cell, or obstacle).
            </li>
            <li>
              Click and drag the mouse to add or remove obstacles by hovering over cells.
            </li>
            <li>
              Adjust the number of rows and columns using the input fields.
            </li>
            <li>
              Click "Find Path" to start the pathfinding algorithm.
            </li>
          </ol>
        </div>

        <div className="md:w-5/6 px-4 bg-[#fafafa] min-h-screen py-4 flex flex-col">
          <h1 className="text-[#555] text-4xl text-center ">Path Finder</h1>

          <div className="my-8 sm:flex-col md:inline-flex md:flex-row  justify-evenly border-b-2">
            <div>
              <label htmlFor="rows" className="mx-4">
                Rows:
              </label>
              <input
                type="number"
                id="rows"
                value={rows}
                onChange={handleRowsChange}
                className="border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="columns" className="mx-4">
                Columns:
              </label>
              <input
                type="number"
                id="columns"
                value={columns}
                onChange={handleColumnsChange}
                className="border rounded py-2 px-3 focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 my-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handlePathfinding}
              >
                Find Path
              </button>
            
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 my-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
                onClick={handleClearGrid}
              >
                Clear Grid
              </button>
            </div>
          </div>

          <table
            className="bg-green-400 max-w-full h-full mx-auto border border-black my-14"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <tbody>
              {grid.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => {
                    const isStartCell = startCell && startCell.row === rowIndex && startCell.col === colIndex;
                    const isGoalCell = goalCell && goalCell.row === rowIndex && goalCell.col === colIndex;
                    const isObstacleCell = obstacleCells.some(
                      (cell) => cell.row === rowIndex && cell.col === colIndex
                    );
                    const isPathCell = pathCells.some(
                      (pathCell) => pathCell.row === rowIndex && pathCell.col === colIndex
                    );

                    return (
                      <td
                        key={colIndex}
                        className={`border border-white text-center ${
                          isStartCell
                            ? "bg-blue-500"
                            : isGoalCell
                            ? "bg-gold-500"
                            : isObstacleCell
                            ? "bg-red-500"
                            : isPathCell
                            ? "bg-[#f038e7]"
                            : "bg-slate-200"
                        }`}
                        style={{ width: "2rem", height: "2rem" }}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        onMouseEnter={() => handleCellHover(rowIndex, colIndex)}
                      ></td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Pathfinder;
