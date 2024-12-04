import { useState } from "react";
import GameBoard from "../interfaces/GameBoard.interface";
import generateTiles from "../lib/generateTiles.lib";
import { Grid } from "./Grid";
import { Player } from "../types/PlayerType.type";
import { ShipPlacementPanel } from "./ShipPlacementPanel";
import Tile from "../interfaces/Tile.interface";
import { TileType } from "../types/TileType.enum";
import updateTile from "../lib/updateTile.lib";
import getPositionsForShip from "../lib/getPositionsForShip.lib";
import { ShipType } from "../types/ShipType.enum";
import { OrientationType } from "../types/OrientationType.enum";

export function Game(props: { gb: GameBoard, setGb: React.Dispatch<React.SetStateAction<GameBoard>> }) {
    const [currentPlayer, setCurrentPlayer] = useState<Player>('player1')
    // const [currentTile, setCurrentTile] = useState<string | null>(null)
    const [selectedShip, setSelectedShip] = useState<number | null>(null)
    const [orientation, setOrientation] = useState<OrientationType>(OrientationType.HORIZONTAL)
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
            <div style={{ display: 'flex', gap: '10px' }}>
                <Grid setCurTile={setCurrentTile} grid={props.gb[currentPlayer].defense}></Grid>
                <ShipPlacementPanel curShip={selectedShip} setShip={setSelectedShip} ships={props.gb.player1.ships}></ShipPlacementPanel>
            </div>
            {props.gb[currentPlayer].placedShips && <Grid setCurTile={setCurrentTile} grid={generateTiles()}></Grid>}
        </section>
    </>
}