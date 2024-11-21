import Tile from "../interfaces/Tile.interface";
import { TileE } from "../components/tile.tsx";

export function Grid( props: {grid: Tile[][]}){
    // let thisgrid = structuredClone(grid)
    // let newGrid = []
    // for (let line of props.grid){
    //     let newline = line.map(ti => <TileE type={ti.type}></TileE>)
    //     newGrid.push(newline)
    // }

    return <>
    <section style={{
        border: '4px solid black',
        width: 'fit-content'
    }}>
        {
            props.grid.map(row => <div style={{display: 'flex'}}>
                    {row.map( ti => <TileE type={ti.type}></TileE>)}
                    </div>
            )
        }
    </section>
    </>
}