import getOtherPlayer from "../lib/getOtherPlayer.lib";
import { Player } from "../types/PlayerType.type";

export function ControlPanel(props: {curplayer: Player, setCurPlayer: React.Dispatch<React.SetStateAction<Player>>}){
    return <section style={{
        position: "fixed",
        left: 'calc(50vw + 250px)'
    }}>
        <h1>Control Menu</h1>
        <button onClick={()=>{
            props.setCurPlayer(getOtherPlayer(props.curplayer))
        }} style={{
            fontSize: '10pt',
            backgroundColor: '#2b2a33',
            border: '1px solid #504f5a',
            borderRadius: '4px',
            padding: '2px'
        }}>End Turn</button>
    </section>
}