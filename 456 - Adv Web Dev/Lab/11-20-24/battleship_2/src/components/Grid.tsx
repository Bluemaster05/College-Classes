import Tile from "../interfaces/Tile.interface";
import { TileE } from "../components/tile.tsx";
import GameBoard from "../interfaces/GameBoard.interface.ts";

export function Grid( props: { gb: GameBoard ,grid: Tile[][]}){

    return <section style={{
        border: '4px solid black',
        width: 'fit-content'
    }}>
        {
            props.grid.map((row, rowI) => <div key={rowI} style={{display: 'flex'}}>
                    {row.map( (ti, colI) => <TileE key={String(rowI) + String(colI)} setCurTile={props.setCurTile} id={String(rowI) + String(colI)} type={ti.type}></TileE>)}
                    </div>
            )
        }
    </section>
}