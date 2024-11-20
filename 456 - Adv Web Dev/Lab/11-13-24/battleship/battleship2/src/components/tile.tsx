import { TileType } from "../types/TileType.enum";
import x from "../assets/x.png"

export function Tile(props: { type: TileType }) {
    let color = 'white'
    let showx = "none"
    if (props.type === TileType.EMPTY){

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

    return <div
        style={{
            backgroundColor: '#add8e6',
            width: '40px',
            height: '40px',
            border: '2px solid gray',
            outline: '2px solid black',
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img src={x} alt="" width='13px'
            style={{
                display: showx,
            }}
            />
        </div>
    </div>
}