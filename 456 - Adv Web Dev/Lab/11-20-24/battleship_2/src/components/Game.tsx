import { useState } from "react";
import GameBoard from "../interfaces/GameBoard.interface";
import generateTiles from "../lib/generateTiles.lib";
import { Grid } from "./Grid";
import { Player } from "../types/PlayerType.type";
import { ShipPlacementPanel } from "./ShipPlacementPanel";
// import Tile from "../interfaces/Tile.interface";
// import { TileType } from "../types/TileType.enum";
// import updateTile from "../lib/updateTile.lib";
// import getPositionsForShip from "../lib/getPositionsForShip.lib";
// import { ShipType } from "../types/ShipType.enum";
import { OrientationType } from "../types/OrientationType.enum";
import { ControlPanel } from "./ControlPanel";
import getOtherPlayer from "../lib/getOtherPlayer.lib";
import { Intermediate } from "./Intermediate";

export function Game(props: { gb: GameBoard, setGb: React.Dispatch<React.SetStateAction<GameBoard>> }) {
    const [currentPlayer, setCurrentPlayer] = useState<Player>('player1')
    // const [currentTile, setCurrentTile] = useState<string | null>(null)
    const [selectedShip, setSelectedShip] = useState<number | null>(null)
    const [orientation, setOrientation] = useState<OrientationType>(OrientationType.HORIZONTAL)
    const [passedTurns, setPassedTurns] = useState<number>(0)
    const [turnStarted, setTurnStarted] = useState<boolean>(true)
    const [hasClicked, setHasClicked] = useState<boolean>(false)
    // const [shipPosition, ]
    // if (currentTile !== null) {
    //     try {
    //         let tiles = getPositionsForShip(props.gb, currentPlayer, selectedShip!, { y: +currentTile!.slice(0, 1), x: +currentTile!.slice(1) }, orientation)
    //         let gbCopy = structuredClone(props.gb)
    //         for (let tile of tiles) {
    //             gbCopy = updateTile(gbCopy, currentPlayer, "defense", tile, TileType.PLACING)
    //         }
    //         props.setGb(gbCopy)
    //     } catch (e) { }
    // }
    // }


    return <>
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>BattleShip!</h1>
            <h2 style={{ fontSize: '14pt' }}>
                {currentPlayer === 'player1' && 'Player 1'}
                {currentPlayer === 'player2' && 'Player 2'}
            </h2>
            {!turnStarted && <Intermediate setStartTurn={setTurnStarted}></Intermediate>}
            <div style={{ display: 'flex', gap: '10px' }}>
                {turnStarted && passedTurns >= 2 && <Grid hasClicked={hasClicked} setHasClicked={setHasClicked} boardtype="attack" numTurns={passedTurns} interaction={true} oreintation={orientation} setSelectShip={setSelectedShip} curPlayer={currentPlayer} selectedShip={selectedShip} gb={props.gb} setGb={props.setGb} ></Grid>}
                {turnStarted && props.gb[currentPlayer].placedShips && <ControlPanel hasClicked={hasClicked} setHasClicked={setHasClicked} setStartTurn={setTurnStarted} gb={props.gb} passTurn={passedTurns} setPassTurn={setPassedTurns} curplayer={currentPlayer} setCurPlayer={setCurrentPlayer}></ControlPanel>}
            </div>
            {/* FIX HAS CLICKED */}
            <div style={{ display: 'flex', gap: '10px' }}>
                {turnStarted && <Grid hasClicked={hasClicked} setHasClicked={setHasClicked} boardtype="defense" numTurns={passedTurns} interaction={passedTurns < 2} oreintation={orientation} setSelectShip={setSelectedShip} curPlayer={currentPlayer} selectedShip={selectedShip} gb={props.gb} setGb={props.setGb}></Grid>}
                {turnStarted && !props.gb[currentPlayer].placedShips && <ShipPlacementPanel oreintation={orientation} setOreintation={setOrientation} curShip={selectedShip} setShip={setSelectedShip} ships={props.gb[currentPlayer].ships}></ShipPlacementPanel>}
                {turnStarted && !(passedTurns >= 2) && props.gb[currentPlayer].placedShips && <ControlPanel hasClicked={false} setHasClicked={setHasClicked} setStartTurn={setTurnStarted} gb={props.gb} passTurn={passedTurns} setPassTurn={setPassedTurns} curplayer={currentPlayer} setCurPlayer={setCurrentPlayer}></ControlPanel>}
            </div>
        </section>
    </>
}