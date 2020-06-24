import React, { useState, useRef, useCallback } from 'react';
import produce from 'immer';
import './App.css';

const neighborCells = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

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
  const [grid, setGrid] = useState(newGrid());
  const [gridBuffer, setGridBuffer] = grid;
  const [isRunning, setIsRunning] = useState(false);
  const cellSize = 20;

  const running = useRef(isRunning);
  running.current = isRunning;
  
  const newGeneration = useCallback(() => {
    setGeneration(generation + 1)
    if (!running.current) {
      console.log('return')
      return;
    }
    console.log('generating next gen')
    setGrid(grid => {
      return produce(grid, draftGrid => {
        for (let i = 0; i < rowCount; i++) {
          for (let j = 0; j < colCount; j++) {
            let liveNeighbors = 0;
            neighborCells.forEach(([x, y]) => {
              let neighborI = i + x;
              let neighborJ = j + y;
              if (neighborI < 0) {
                neighborI = rowCount + neighborI
              }
              if (neighborI == rowCount) {
                neighborI = 0
              }
              if (neighborJ < 0) {
                neighborJ = colCount + neighborJ
              }
              if (neighborJ == colCount) {
                neighborJ = 0
              }
              liveNeighbors += grid[neighborI][neighborJ]
            })
            if (liveNeighbors < 2 || liveNeighbors > 3) {
              draftGrid[i][j] = 0;
            } else if (grid[i][j] === 0 && liveNeighbors === 3) {
              draftGrid[i][j] = 1;
            }
          }
        }
      })
      
    })
    setTimeout(newGeneration, delay);
  }, [])
  
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className='grid' style={{gridTemplateColumns: `repeat(${colCount}, ${cellSize}px)`}}>
        {grid.map((rows, i) =>
          rows.map((col, j) => 
            <div
              key={`r${i}c${j}`}
              className={`cell ${activeClass(grid[i][j])}`}
              onClick={() => {
                const nextGrid = produce(grid, draftGrid => {
                  draftGrid[i][j] = grid[i][j] ? 0 : 1
                })
                setGrid(nextGrid)
              }}
              style={{height: `${cellSize}px`, width: `${cellSize}px`}}
            />
          ))}
      </div>
      <button onClick={() => {
        setIsRunning(!isRunning)
        if (!isRunning) {
          running.current = true;
          newGeneration()
        }
      }}>{isRunning ? 'Stop' : 'Start'}</button>
      <h3>Generation: {generation}</h3>
    </div>
  );
}

export default App;
