import Tile from "../interfaces/Tile.interface";
import { TileE } from "../components/tile.tsx";
import GameBoard from "../interfaces/GameBoard.interface.ts";
import getPositionsForShip from "../lib/getPositionsForShip.lib.ts";
import { Player } from "../types/PlayerType.type.ts";
import { OrientationType } from "../types/OrientationType.enum.ts";

export function Grid( props: {hasClicked: boolean, setHasClicked: React.Dispatch<React.SetStateAction<boolean>>, numTurns: number, interaction: boolean, oreintation: OrientationType, setSelectShip: React.Dispatch<React.SetStateAction<number | null>>, curPlayer: Player, selectedShip: number | null,  gb: GameBoard, setGb: React.Dispatch<React.SetStateAction<GameBoard>> , boardtype: 'defense' | 'attack'}){

    

    return <section style={{
        border: '4px solid black',
        width: 'fit-content'
    }}>
        {
            props.gb[props.curPlayer][props.boardtype].map((row, rowI) => <div key={rowI} style={{display: 'flex'}}>
                    {row.map( (ti, colI) => <TileE hasClicked={props.hasClicked} setHasClicked={props.setHasClicked} bType={props.boardtype} numturns={props.numTurns} interaction={props.interaction} oreintation={props.oreintation} setSelectShip={props.setSelectShip} onMouseOver={()=>{}}  curPlayer={props.curPlayer} gb={props.gb} selectedShip={props.selectedShip} setGb={props.setGb} key={String(rowI) + String(colI)}  id={String(rowI) + String(colI)} type={ti.type}></TileE>)}
                    </div>
            )
        }
    </section>
}