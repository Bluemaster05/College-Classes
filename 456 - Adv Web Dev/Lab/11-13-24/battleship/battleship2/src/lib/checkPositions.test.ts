import { describe, expect, test } from "vitest"
import GameBoard from "../interfaces/GameBoard.interface"
import generateShips from "./generateShips.lib"
import generateTiles from "./generateTiles.lib"
import { TileType } from "../types/TileType.enum"
import { OrientationType } from "../types/OrientationType.enum"
import checkPositions from "./checkPositions.lib"

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

baord.player1.defense[0][0] = { type: TileType.SHIP }
baord.player1.defense[1][0] = { type: TileType.SHIP }
baord.player1.defense[2][0] = { type: TileType.SHIP }
baord.player1.ships[2].orientation = OrientationType.VERTICAL
baord.player1.ships[2].placed = true
baord.player1.ships[2].positions = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
baord.player1.ships[2].spaces = 3

const test1pos = [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }]
const test2pos = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }]
const test3pos = [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]
const test4pos = [{ x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }]

describe('checkPositions()', () => {
    test('1st', () => {
        expect(checkPositions(baord, 'player1', test1pos)).toEqual(false)

    })
    test('1st', () => {
        expect(checkPositions(baord, 'player1', test2pos)).toEqual(false)

    })
    test('1st', () => {
        expect(checkPositions(baord, 'player1', test3pos)).toEqual(true)

    })
    test('1st', () => {
        expect(checkPositions(baord, 'player1', test4pos)).toEqual(true)

    })
})