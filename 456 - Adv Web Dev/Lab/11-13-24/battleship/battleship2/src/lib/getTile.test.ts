import { describe, expect, test } from "vitest"
import generateTiles from "./generateTiles.lib"
import generateShips from "./generateShips.lib"
import GameBoard from "../interfaces/GameBoard.interface"
import { TileType } from "../types/TileType.enum"
import getTile from "./getTile.lib"
import { InvalidPositionError } from "../errors/InvalidPosition.error"

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



baord.player1.attack[3][2] = { type: TileType.HIT }
baord.player2.defense[1][5] = { type: TileType.MISS }
baord.player2.attack[6][3] = { type: TileType.SHIP }
baord.player1.defense[8][3] = { type: TileType.PLACING }
baord.player1.attack[1][6] = { type: TileType.TARGETING }



describe("getTiles()", () => {
    test("typehit", () => {
        expect(getTile(baord, "player1", 'attack', { x: 2, y: 3 })).toEqual({ type: TileType.HIT })
    })
    test("typehit", () => {
        expect(getTile(baord, "player2", 'defense', { x: 5, y: 1 })).toEqual({ type: TileType.MISS })
    })
    test("typehit", () => {
        expect(getTile(baord, "player2", 'attack', { x: 3, y: 6 })).toEqual({ type: TileType.SHIP })
    })
    test("typehit", () => {
        expect(getTile(baord, "player1", 'defense', { x: 3, y: 8 })).toEqual({ type: TileType.PLACING })
    })
    test("typehit", () => {
        expect(getTile(baord, "player1", 'attack', { x: 6, y: 1 })).toEqual({ type: TileType.TARGETING })
    })
    test("typehit", () => {
        expect(getTile(baord, "player1", 'attack', { x: 3, y: 3 })).toEqual({ type: TileType.EMPTY })
    })
    test("typehit", () => {
        expect(() => getTile(baord, "player1", 'attack', { x: 11, y: 3 })).toThrow(new InvalidPositionError('Position is outside the grid!'))
    })
    // Last error needs testsing and dakota look at cause odd!!!
})