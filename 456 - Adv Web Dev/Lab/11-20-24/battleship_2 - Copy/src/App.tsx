import { useState } from 'react'
import './App.css'
import { Game } from './components/Game'
import GameBoard from './interfaces/GameBoard.interface'
import generateTiles from './lib/generateTiles.lib'
import generateShips from './lib/generateShips.lib'

function App() {
  const [gameBoard, setGameBoard] = useState<GameBoard>(
    {
      player1: {
        placedShips: false,
        attack: generateTiles(),
        defense: generateTiles(),
        ships: generateShips()
      },
      player2: {
        placedShips: false,
        attack: generateTiles(),
        defense: generateTiles(),
        ships: generateShips()
      }
    }
  )
  
  return <>
    <Game gb={gameBoard} setGb={setGameBoard}></Game>
    
  </>

}

export default App
