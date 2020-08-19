import React, { useState, useRef, useCallback } from 'react';
import produce from 'immer';
import './App.css';
import SpeedSlider from './components/SpeedSlider';
import CellSizeSlider from './components/CellSizeSlider';
import Rules from './components/Rules';

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

  const createRandomGrid = () => {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(Array.from(Array(colCount), () => {
        return Math.random() > .7 ? 1 : 0
      }))
    }
    return rows
  }

  const activeClass = (value) => {
    return value ? 'alive' : 'dead'
  }

  const [rowCount, setRowCount] = useState(50);
  const [colCount, setColCount] = useState(75);
  const [delay, setDelay] = useState(50);
  const [generation, setGeneration] = useState(0);
  const [grid, setGrid] = useState(newGrid());
  const [isRunning, setIsRunning] = useState(false);
  const [cellSize, setCellSize] = useState(5);
  const [wrapAround, setWrapAround] = useState(true);

  const running = useRef(isRunning);
  running.current = isRunning;
  const gen = useRef(generation);
  gen.current = generation;

  const updateGen = () => {
    let newGen = gen.current + 1
    setGeneration(newGen)
  }
  
  const newGeneration = () => {
    setGrid(grid => {
      return produce(grid, draftGrid => {
        for (let i = 0; i < rowCount; i++) {
          for (let j = 0; j < colCount; j++) {
            let liveNeighbors = 0;
            neighborCells.forEach(([x, y]) => {
              let neighborI = i + x;
              let neighborJ = j + y;
              if (wrapAround) {
                if (neighborI < 0) {
                  neighborI = rowCount + neighborI
                }
                if (neighborI === rowCount) {
                  neighborI = 0
                }
                if (neighborJ < 0) {
                  neighborJ = colCount + neighborJ
                }
                if (neighborJ === colCount) {
                  neighborJ = 0
                }
                liveNeighbors += grid[neighborI][neighborJ]
              } else if (neighborI >= 0 && neighborI < rowCount && neighborJ >= 0 && neighborJ < colCount) {
                liveNeighbors += grid[neighborI][neighborJ]
              }
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
  }

  const runSimulation = () => {
    newGeneration();
    if (!running.current) {
      return
    }
    updateGen();
    setTimeout(runSimulation, delay)
  }

  const stepGeneration = () => {
    if (!isRunning) {
      newGeneration()
      updateGen()
    }
  }

  const randomGrid = () => {
    if (!isRunning) {
      setGrid(createRandomGrid());
      setGeneration(0);
    }
  }

  const clearGrid = () => {
    if (!isRunning) {
      setGrid(newGrid());
      setGeneration(0);
    }
  }

  const toggleWrap = () => {
    if (!isRunning) {
      setWrapAround(!wrapAround)
    }
  }
  
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className='grid' style={{gridTemplateColumns: `repeat(${colCount}, ${cellSize}px)`,
        width: colCount * cellSize
      }}>
        {grid.map((rows, i) =>
          rows.map((col, j) => 
            <div
              key={`r${i}c${j}`}
              className={`cell ${activeClass(grid[i][j])}`}
              onClick={() => {
                if (!isRunning) {
                  const nextGrid = produce(grid, draftGrid => {
                    draftGrid[i][j] = grid[i][j] ? 0 : 1
                  })
                  setGrid(nextGrid)

                }
              }}
              style={{height: `${cellSize}px`, width: `${cellSize}px`}}
              />
              ))}
      </div>
      <h3>Generation: {generation}</h3>
      <div class='controls'>
        <button onClick={() => {
          setIsRunning(!isRunning)
          if (!isRunning) {
            running.current = true;
            runSimulation()
          }
        }}>{isRunning ? 'Stop' : 'Start'}</button>
        <button 
          onClick={() => {
            stepGeneration()
          }}>Step</button>
          <button
            onClick={() => {
              randomGrid()
            }}
          >Random</button>
          <button
            onClick={() => {
              clearGrid()
            }}
          >Clear</button>
          <button
            onClick={() => {
              toggleWrap()
            }}
          >{wrapAround ? 'No Wrap' : 'Wrap'}</button>
        <SpeedSlider delay={delay} setDelay={setDelay} isRunning={isRunning} />
        <CellSizeSlider cellSize={cellSize} setCellSize={setCellSize} isRunning={isRunning} />
      </div>
      <Rules />
      
    </div>
  );
}

export default App;
