import GameBoard from "../interfaces/GameBoard.interface";
import getOtherPlayer from "../lib/getOtherPlayer.lib";
import { Player } from "../types/PlayerType.type";

export function ControlPanel(props: { hasClicked: boolean, setHasClicked: React.Dispatch<React.SetStateAction<boolean>>, setStartTurn: React.Dispatch<React.SetStateAction<boolean>>, passTurn: number, gb: GameBoard, setPassTurn: React.Dispatch<React.SetStateAction<number>>, curplayer: Player, setCurPlayer: React.Dispatch<React.SetStateAction<Player>> }) {
    function turnOver(passedTruns: number, gb: GameBoard, curPlayer: Player) {
         
            if (props.passTurn < 2){
                return false
            } else if (!props.hasClicked) {
                return true
            } else {
                return false
            }
        }
    

    return <section style={{
        position: "fixed",
        left: 'calc(50vw + 250px)'
    }}>
        <h1>Control Menu</h1>
        <button
            disabled={
                turnOver(props.passTurn, props.gb, props.curplayer)   
            }
            onClick={() => {
                props.setCurPlayer(getOtherPlayer(props.curplayer))
                props.setPassTurn(prev => prev + 1)
                props.setStartTurn(false)
                props.setHasClicked(false)
            }} style={{
                fontSize: '10pt',
                backgroundColor: '#2b2a33',
                border: '1px solid #504f5a',
                borderRadius: '4px',
                padding: '2px'
            }}>End Turn</button>
    </section>
}