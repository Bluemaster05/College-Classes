import { useState } from "react";
import GameBoard from "../interfaces/GameBoard.interface";
import generateTiles from "../lib/generateTiles.lib";
import { Grid } from "./Grid";
import { Player } from "../types/PlayerType.type";
import { ShipPlacementPanel } from "./ShipPlacementPanel";

export function Game(props: { gb: GameBoard, change: React.Dispatch<React.SetStateAction<GameBoard>> }) {
    const [currentPlayer, setCurrentPlayer] = useState<Player>('player1')

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
            <div style={{ display: 'flex', gap: '10px'}}>
                <Grid grid={props.gb[currentPlayer].defense}></Grid>
                <ShipPlacementPanel ships={props.gb.player1.ships}></ShipPlacementPanel>
            </div>
            {props.gb[currentPlayer].placedShips && <Grid grid={generateTiles()}></Grid>}
        </section>
    </>
}