import { TileType } from "../types/TileType.enum";
import x from "../assets/x.png"
import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import getPositionsForShip from "../lib/getPositionsForShip.lib";
import updateTile from "../lib/updateTile.lib";
import { OrientationType } from "../types/OrientationType.enum";

export function TileE(props: { onMouseOver: () => void, id: string, type: TileType,curPlayer: Player, selectedShip: number | null,  gb: GameBoard, setGb: React.Dispatch<React.SetStateAction<GameBoard>> }) {
    let color = 'white'
    let showx = "none"
    let circledis = 'flex'
    if (props.type === TileType.EMPTY){
        circledis = 'none'
    }
    if (props.type === TileType.HIT) {
        color = 'red'
    }
    if (props.type === TileType.SHIP) {
        color = 'yellow'
    }
    if (props.type === TileType.MISS) {
        color = 'white'
    }
    if (props.type === TileType.TARGETING) {
        color = 'white'
        showx = 'inline'
    }

    function whenMouseOver(){
        try {
                    let tiles = getPositionsForShip(props.gb, props.curPlayer, props.selectedShip!, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, OrientationType.HORIZONTAL)
                    let gbCopy = structuredClone(props.gb)
                    for (let tile of tiles) {
                        gbCopy = updateTile(gbCopy, props.curPlayer, "defense", tile, TileType.SHIP)
                    }
                    props.setGb(gbCopy)
                } catch (e) { }
    }
    function whenMouseLeave(){
        try {
                    let tiles = getPositionsForShip(props.gb, props.curPlayer, props.selectedShip!, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, OrientationType.HORIZONTAL)
                    let gbCopy = structuredClone(props.gb)
                    for (let tile of tiles) {
                        gbCopy = updateTile(gbCopy, props.curPlayer, "defense", tile, TileType.EMPTY)
                    }
                    props.setGb(gbCopy)
                } catch (e) { }
    }

    return <div
        onMouseOver={whenMouseOver}
        // onMouseEnter={whenMouseOver}
        onMouseLeave={whenMouseLeave}
        // onMouseOut={whenMouseLeave}
        style={{
            backgroundColor: '#add8e6',
            width: '40px',
            height: '40px',
            border: '2px solid gray',
            // outline: '2px solid black',
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
        }}>
        <div
            style={{
                width: '20px',
                height: '20px',
                backgroundColor: color,
                borderRadius: '100%',
                border: '2px solid gray',
                display: circledis,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img src={x} alt="" width='13px'
            style={{
                display: showx,
                marginLeft: '1px',
                marginTop: '1px'
            }}
            />
        </div>
    </div>
}