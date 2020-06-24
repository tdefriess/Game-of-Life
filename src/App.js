import React, { useState } from 'react';
import './App.css';


function App() {
  const newGrid = () => {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(Array.from(Array(colCount), () => 0))
    }
    return rows
  }

  const activeClass = (value) => {
    return value ? 'alive' : 'dead'
  }

  const [rowCount, setRowCount] = useState(25);
  const [colCount, setColCount] = useState(30);
  const [delay, setDelay] = useState(500);
  const [generation, setGeneration] = useState(0);
  const [grid, setGrid] = useState(newGrid())
  const [gridBuffer, setGridBuffer] = grid
  const cellSize = 20
  console.log(gridBuffer)
  
  
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className='grid' style={{gridTemplateColumns: `repeat(${colCount}, ${cellSize}px)`}}>
        {grid.map((rows, i) =>
          rows.map((col, k) => 
            <div
              key={`r${i}c${k}`}
              className={`cell ${activeClass(grid[i][k])}`}
              onClick={() => {

              }}
              style={{height: `${cellSize}px`, width: `${cellSize}px`}}
            />
          ))}
      </div>
      <h3>Generation: {generation}</h3>
    </div>
  );
}

export default App;
