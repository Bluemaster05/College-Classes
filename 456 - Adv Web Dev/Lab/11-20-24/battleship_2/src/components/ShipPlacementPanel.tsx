import Ship from "../interfaces/Ship.interface";
import { PlacementShip } from "./PlacementShip";

export function ShipPlacementPanel(props: { ships: Ship[] }) {

    return <section style={{
        position: "fixed",
        left: 'calc(50vw + 250px)'
    }}>
        <h1 style={{fontSize: '13pt', fontWeight: '300', marginTop: '10px', marginRight: '10px', marginBottom: '10px'}}>
            Ships
        </h1>
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                {props.ships.map((sh) => { if (!sh.placed) { return <PlacementShip length={sh.spaces}></PlacementShip> } })}
            </div>
        </div>
        <h1 style={{fontSize: '13pt', fontWeight: '300', marginTop: '10px', marginRight: '10px', marginBottom: '10px'}}>
            Orientation
        </h1>
        <select name="" id="">
            <option value="">Horizontal</option>
            <option value="">Vertical</option>
        </select>
    </section>
}