import Ship from "../interfaces/Ship.interface";
import { PlacementShip } from "./PlacementShip";
import { OrientationType } from "../types/OrientationType.enum";
import { ChangeEvent } from "react";

export function ShipPlacementPanel(props: { oreintation: OrientationType, setOreintation: React.Dispatch<React.SetStateAction<OrientationType>>, curShip: number | null, setShip: React.Dispatch<React.SetStateAction<number | null>> , ships: Ship[] }) {
   
   function changeOrintation(event: ChangeEvent<HTMLSelectElement>){
    props.setOreintation(event.target.value as OrientationType)
   }
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
        <select onChange={changeOrintation} value={props.oreintation} name="" id="">
            <option value={'Horizontal'}>Horizontal</option>
            <option value={'Vertical'}>Vertical</option>
        </select>
    </section>
}