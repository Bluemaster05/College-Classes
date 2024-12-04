// import { useState } from "react";
import Ship from "../interfaces/Ship.interface";
import { PlacementShip } from "./PlacementShip";
import { ShipType } from "../types/ShipType.enum";

export function ShipPlacementPanel(props: { curShip: number | null, setShip: React.Dispatch<React.SetStateAction<number | null>> , ships: Ship[] }) {
    // const [selectedShip, setSelectedShip] = useState<ShipType | null>(null)
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
                {props.ships.map((sh, index) => { if (!sh.placed) { return <PlacementShip index={index} key={index} selectedShip={props.curShip} setShip={props.setShip} ship={sh} selected={props.curShip === index}></PlacementShip> } })}
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