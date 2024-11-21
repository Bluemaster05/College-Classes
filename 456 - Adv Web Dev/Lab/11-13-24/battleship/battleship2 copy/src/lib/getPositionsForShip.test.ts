import { describe, expect, test } from "vitest"
import generateTiles from "./generateTiles.lib"
import generateShips from "./generateShips.lib"
import GameBoard from "../interfaces/GameBoard.interface"
import getPositionsForShip from "./getPositionsForShip.lib"
import { ShipType } from "../types/ShipType.enum"
import { OrientationType } from "../types/OrientationType.enum"
import { InvalidPositionError } from "../errors/InvalidPosition.error"
import { TileType } from "../types/TileType.enum"

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

baord.player1.defense[6][6] = {type: TileType.SHIP}

describe("getPositionsForShip()", () => {
    test("test 1", () => {
        expect(getPositionsForShip(baord, "player1", {type: ShipType.CRUISER, hits: [], orientation: OrientationType.VERTICAL, placed: false, positions: [], spaces: 3}, {x: 3, y:3}, OrientationType.VERTICAL)).toEqual([{x:3, y:3},{x:4, y:3},{x:5, y:3}])
    })
    test("test 2", () => {
        expect(getPositionsForShip(baord, "player1", {type: ShipType.CRUISER, hits: [], orientation: OrientationType.HORIZONTAL, placed: false, positions: [], spaces: 3}, {x: 3, y:3}, OrientationType.HORIZONTAL)).toEqual([{x:3, y:3},{x:3, y:4},{x:3, y:5}])
    })
    test("test 3", () => {
        expect(() => {getPositionsForShip(baord, "player1", {type: ShipType.CRUISER, hits: [], orientation: OrientationType.HORIZONTAL, placed: false, positions: [], spaces: 3}, {x: 13, y:35}, OrientationType.HORIZONTAL)}).toThrow(new InvalidPositionError("That postion is either already taken is not empty."))
    })
})