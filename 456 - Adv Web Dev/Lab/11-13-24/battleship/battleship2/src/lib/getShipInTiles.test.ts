import {describe, expect, test} from "vitest"
import GameBoard from "../interfaces/GameBoard.interface"
import generateShips from "./generateShips.lib"
import generateTiles from "./generateTiles.lib"
import getShipInTiles from "./getShipInTiles.lib"
import { ShipType } from "../types/ShipType.enum"
import { OrientationType } from "../types/OrientationType.enum"

const baord: GameBoard = {
    player1: {
        placedShips: false,
        defense: generateTiles(),
        attack: generateTiles(),
        ships: generateShips(),
    },
    player2: {
        placedShips: false,
        defense: generateTiles(),
        attack: generateTiles(),
        ships: generateShips(),
    }
}

baord.player1.ships[0].positions = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }]
baord.player1.ships[0].placed = true
baord.player1.ships[0].hits = [false, false, false, false]
const test1pos = [{x: 1, y: 1}, { x: 1, y: 2}]

describe('getShipInTiles()', ()=> {
    test('1st', ()=> {
        expect(getShipInTiles(baord, 'player1', test1pos)).toEqual({
            type: ShipType.BATTLESHIP,
            orientation: OrientationType.HORIZONTAL,
            placed: true,
            spaces: 4,
            positions: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }],
            hits: [false, false, false, false]
        })

    })
})