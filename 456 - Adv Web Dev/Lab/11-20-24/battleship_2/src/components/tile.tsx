import { TileType } from "../types/TileType.enum";
import x from "../assets/x.png"

export function TileE(props: { onMouseOver: () => void, id: string, type: TileType }) {
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

    return <div
        onMouseOver={props.onMouseOver}
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