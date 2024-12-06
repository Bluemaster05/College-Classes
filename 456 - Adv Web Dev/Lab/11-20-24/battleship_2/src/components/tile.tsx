import { TileType } from "../types/TileType.enum";
import x from "../assets/x.png"
import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import getPositionsForShip from "../lib/getPositionsForShip.lib";
import updateTile from "../lib/updateTile.lib";
import { OrientationType } from "../types/OrientationType.enum";
import checkPositions from "../lib/checkPositions.lib";
import placeShip from "../lib/placeShip.lib";
import attemptToHitShip from "../lib/attemptToHitShip.lib";
import getOtherPlayer from "../lib/getOtherPlayer.lib";
import getTile from "../lib/getTile.lib";
import { useState } from "react";

export function TileE(props: { hasClicked: boolean, setHasClicked: React.Dispatch<React.SetStateAction<boolean>>, bType: 'attack' | 'defense', numturns: number, interaction: boolean, oreintation: OrientationType, onMouseOver: () => void, id: string, type: TileType, curPlayer: Player, selectedShip: number | null, setSelectShip: React.Dispatch<React.SetStateAction<number | null>>, gb: GameBoard, setGb: React.Dispatch<React.SetStateAction<GameBoard>> }) {
    let color = 'white'
    let showx = "none"
    let circledis = 'flex'
    const [cursor, setCursor] = useState<"default" | 'pointer'>('default')
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
        showx = 'inline'
        color = 'white'
    }
    // let curset = 'default'
    function whenMouseOver() {
        if (props.interaction) {
            if (props.numturns < 2) {
                props.setGb(prevGb => {
                    try {
                        let gbCopy = structuredClone(prevGb)
                        let tiles = getPositionsForShip(gbCopy, props.curPlayer, props.selectedShip!, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, props.oreintation)

                        for (let tile of tiles) {
                            gbCopy = updateTile(gbCopy, props.curPlayer, "defense", tile, TileType.SHIP)
                        }
                        setCursor('pointer')
                        return gbCopy
                    } catch (e) { return prevGb }
                })
            }
            else {
                props.setGb(prevGb => {
                    if (!props.hasClicked) {
                        if (getTile(props.gb, props.curPlayer, 'attack', { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }).type === TileType.EMPTY) {
                            let gbCopy = structuredClone(prevGb)
                            gbCopy = updateTile(gbCopy, props.curPlayer, props.bType, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, TileType.TARGETING)
                            setCursor('pointer')
                            return gbCopy
                        } else {
                            return prevGb
                        }
                    } else {
                        return prevGb
                    }
                })
            }
        }
    }
    function whenMouseLeave() {
        if (props.interaction) {
            if (props.numturns < 2) {
                props.setGb(prevGb => {
                    try {
                        let gbCopy = structuredClone(prevGb)
                        let tiles = getPositionsForShip(gbCopy, props.curPlayer, props.selectedShip!, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, props.oreintation)

                        for (let tile of tiles) {
                            gbCopy = updateTile(gbCopy, props.curPlayer, "defense", tile, TileType.EMPTY)
                        }
                        setCursor('default')
                        return gbCopy
                    } catch (e) { setCursor('default'); return prevGb }
                })
            }
            else {
                props.setGb(prevGb => {
                    let thisType = getTile(props.gb, props.curPlayer, 'attack', { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }).type
                    if ( thisType === TileType.PLACING || thisType === TileType.EMPTY || thisType === TileType.TARGETING) {
                        let gbCopy = structuredClone(prevGb)
                        gbCopy = updateTile(gbCopy, props.curPlayer, props.bType, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, TileType.EMPTY)
                        setCursor('default')
                        return gbCopy
                    } else {
                        return prevGb
                    }
                })
            }
        }
    }

    function onMouseClick() {
        if (props.interaction) {
            if (props.numturns < 2) {
                props.setGb((prevGb) => {
                    let prevCopy = structuredClone(prevGb)
                    try {
                        let tiles = getPositionsForShip(prevCopy, props.curPlayer, props.selectedShip!, { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }, props.oreintation)
                        if (checkPositions(prevCopy, props.curPlayer, tiles)) {
                            let placedShip = placeShip(prevCopy, props.curPlayer, props.selectedShip!, tiles)
                            props.setSelectShip(null)
                            setCursor('default')
                            return placedShip
                        }
                        else {
                            return prevCopy
                        }
                    } catch (e) {
                        return prevGb
                    }
                })
            } else {
                props.setGb((prevGb) => {
                    if (!props.hasClicked) {
                        if (getTile(props.gb, props.curPlayer, 'attack', { y: +props.id!.slice(0, 1), x: +props.id.slice(1) }).type === TileType.TARGETING) {
                            let newgb = structuredClone(prevGb)
                            props.setHasClicked(true)
                            setCursor('default')
                            return attemptToHitShip(props.gb, getOtherPlayer(props.curPlayer), { y: +props.id!.slice(0, 1), x: +props.id.slice(1) })
                        } else {
                            return prevGb
                        }
                    } else {
                        return prevGb
                    }
                })

            }
        }
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
            cursor: cursor
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