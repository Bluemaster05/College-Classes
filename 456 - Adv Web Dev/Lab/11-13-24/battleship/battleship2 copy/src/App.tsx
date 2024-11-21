import './App.css'
import { Tile } from './components/tile'
import { TileType } from './types/TileType.enum'

function App() {
  return <>
    <div 
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      <Tile type={TileType.EMPTY}></Tile>
      <Tile type={TileType.HIT}></Tile>
      <Tile type={TileType.SHIP}></Tile>
      <Tile type={TileType.MISS}></Tile>
      <Tile type={TileType.TARGETING}></Tile>
      <Tile type={TileType.EMPTY}></Tile>
      <Tile type={TileType.EMPTY}></Tile>
      <Tile type={TileType.EMPTY}></Tile>
      <Tile type={TileType.EMPTY}></Tile>
      <Tile type={TileType.EMPTY}></Tile>
    </div>
  </>
}

export default App
