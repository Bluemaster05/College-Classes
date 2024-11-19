import { describe, expect, test } from "vitest"
import generateTiles from "./generateTiles.lib"
import generateShips from "./generateShips.lib"
import GameBoard from "../interfaces/GameBoard.interface"
import getPositionsForShip from "./getPositionsForShip.lib"
import getShipInTiles from "./getShipInTiles.lib"
import { ShipType } from "../types/ShipType.enum"
import { OrientationType } from "../types/OrientationType.enum"
import { InvalidPositionError } from "../errors/InvalidPosition.error"
import { TileType } from "../types/TileType.enum"
import placeShip from "./placeShip.lib"
import checkPositions from "./checkPositions.lib"
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

updateTiles(baord, "player1", 'defense', [{x: 6, y:6 }], TileType.SHIP)

const baord2: GameBoard = {
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
updateTiles(baord2, "player1", 'defense', [{x: 6, y:6 }], TileType.SHIP)
updateTiles(baord2, 'player1', "defense", [{x:3 , y:3}, {x:3 , y:4}, {x:3 , y:5}, {x:3 , y:6}], TileType.SHIP)
baord2.player1.ships[0].positions = [{x:3 , y:3}, {x:3 , y:4}, {x:3 , y:5}, {x:3 , y:6}]
baord2.player1.ships[0].placed = true

describe("getTiles()", () => {
    test("typehit", () => {
        expect(placeShip(baord, "player1", baord.player1.ships[0], getPositionsForShip(baord, 'player1', baord.player1.ships[0], {x: 3, y: 3}, OrientationType.HORIZONTAL))).toEqual(baord2)
    })
    test("typehit", () => {
        expect(() => {placeShip(baord, "player1", baord.player1.ships[0], getPositionsForShip(baord, 'player1', baord.player1.ships[0], {x: 6, y: 6}, OrientationType.HORIZONTAL))}).toThrow(new InvalidPositionError("That postion is either already taken is not empty."))
    })
})