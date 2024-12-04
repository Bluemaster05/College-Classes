import { TileType } from "../types/TileType.enum";
import x from "../assets/x.png"
import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import getPositionsForShip from "../lib/getPositionsForShip.lib";
import updateTile from "../lib/updateTile.lib";
import { OrientationType } from "../types/OrientationType.enum";
import checkPositions from "../lib/checkPositions.lib";
import placeShip from "../lib/placeShip.lib";

export function TileE(props: {oreintation: OrientationType, onMouseOver: () => void, id: string, type: TileType, curPlayer: Player, selectedShip: number | null, setSelectShip: React.Dispatch<React.SetStateAction<number | null>> , gb: GameBoard, setGb: React.Dispatch<React.SetStateAction<GameBoard>> }) {
    let color = 'white'
    let showx = "none"
    let circledis = 'flex'
    if (props.type === TileType.EMPTY) {
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

    function whenMouseOver() {
        props.setGb(prevGb => {
            try {
                let gbCopy = structuredClone(prevGb)
                let tiles = getPositionsForShip(gbCopy, props.curPlayer, props.selectedShip!, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, props.oreintation)

                for (let tile of tiles) {
                    gbCopy = updateTile(gbCopy, props.curPlayer, "defense", tile, TileType.SHIP)
                }
                return gbCopy
            } catch (e) { return prevGb }
        })
    }
    function whenMouseLeave() {
        props.setGb(prevGb => {
            try {
                let gbCopy = structuredClone(prevGb)
                let tiles = getPositionsForShip(gbCopy, props.curPlayer, props.selectedShip!, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, props.oreintation)

                for (let tile of tiles) {
                    gbCopy = updateTile(gbCopy, props.curPlayer, "defense", tile, TileType.EMPTY)
                }
                return gbCopy
            } catch (e) { return prevGb }
        })
    }

    function onMouseClick(){
        props.setGb((prevGb) => {
            let prevCopy = structuredClone(prevGb)
            try {
                let tiles = getPositionsForShip(prevCopy, props.curPlayer, props.selectedShip!, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, props.oreintation )
                if(checkPositions(prevCopy, props.curPlayer,tiles)){
                    let placedShip = placeShip(prevCopy, props.curPlayer, props.selectedShip!, tiles)
                    props.setSelectShip(null)
                    return placedShip
                }
                else {
                    return prevCopy
                }
            } catch (e) {
                return prevGb
            }
            
        })
    }

    return <div
        onMouseOver={whenMouseOver}
        onMouseLeave={whenMouseLeave}
        onMouseDown={onMouseClick}
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