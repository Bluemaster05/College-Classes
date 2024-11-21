import { describe, expect, test } from "vitest"
import generateTiles from "./generateTiles.lib"
import generateShips from "./generateShips.lib"
import GameBoard from "../interfaces/GameBoard.interface"
import { TileType } from "../types/TileType.enum"
import { InvalidPositionError } from "../errors/InvalidPosition.error"
import updateTiles from "./updateTiles.lib"

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

const baordDone: GameBoard = {
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

baordDone.player1.defense[0][0] = {type: TileType.HIT}
baordDone.player1.defense[1][0] = {type: TileType.HIT}
baordDone.player1.defense[0][1] = {type: TileType.HIT}
baordDone.player1.defense[2][2] = {type: TileType.HIT}


describe("getTiles()", () => {
    test("typehit", () => {
        expect(updateTiles(baord, "player1", 'defense', [{x: 0,y: 0},{x: 0,y: 1},{x: 1,y: 0}, {x: 2,y: 2}], TileType.HIT)).toEqual(baordDone)
    })
    test("typehit", () => {
        expect(() => {updateTiles(baord, "player1", 'defense', [{x: 0,y: 0},{x: 0,y: 1},{x: 133,y: 36}, {x: 2,y: 2}], TileType.HIT)}).toThrow(new InvalidPositionError("Position is outside of grid!!!"))
    })
})

