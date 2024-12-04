import Ship from "../interfaces/Ship.interface"
import { ShipType } from "../types/ShipType.enum"

export function PlacementShip( props: { index: number, selectedShip: number | null, setShip: React.Dispatch<React.SetStateAction<number | null>>, ship: Ship, selected: boolean}){
    let tiles = []
    for (let i = 0; i < props.ship.spaces; i++)
        tiles.push(<div key={i} style={{ width: '25px', height: '25px', backgroundColor: "#f9d849", borderRadius: '100%', margin: '7px'}}></div>)
    let color = "white"
    if (props.selected){
        color = 'gray'
    }
    return <div
    onClick={() => {
        if (props.selectedShip !== props.index){
            props.setShip(props.index)
        } else {
            props.setShip(null)
        }
    }}
    style={{
        border: '2px solid red',
        backgroundColor: color,
        display: 'flex',
        width: 'fit-content'
        
    }}>
        {tiles}
    </div>
}