import Tile from "../interfaces/Tile.interface";
import { TileE } from "../components/tile.tsx";
import GameBoard from "../interfaces/GameBoard.interface.ts";
import getPositionsForShip from "../lib/getPositionsForShip.lib.ts";
import { Player } from "../types/PlayerType.type.ts";

export function Grid( props: { curPlayer: Player, selectedShip: number | null,  gb: GameBoard, setGb: React.Dispatch<React.SetStateAction<GameBoard>> ,grid: Tile[][]}){

    

    return <section style={{
        border: '4px solid black',
        width: 'fit-content'
    }}>
        {
            props.grid.map((row, rowI) => <div key={rowI} style={{display: 'flex'}}>
                    {row.map( (ti, colI) => <TileE onMouseOver={()=>{}}  curPlayer={props.curPlayer} gb={props.gb} selectedShip={props.selectedShip} setGb={props.setGb} key={String(rowI) + String(colI)}  id={String(rowI) + String(colI)} type={ti.type}></TileE>)}
                    </div>
            )
        }
    </section>
}