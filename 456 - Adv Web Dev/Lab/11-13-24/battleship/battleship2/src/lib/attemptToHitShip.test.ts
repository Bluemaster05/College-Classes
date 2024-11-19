import { describe, expect, test } from "vitest"
import generateTiles from "./generateTiles.lib"
import generateShips from "./generateShips.lib"
import GameBoard from "../interfaces/GameBoard.interface"
import getPositionsForShip from "./getPositionsForShip.lib"
import { ShipType } from "../types/ShipType.enum"
import { OrientationType } from "../types/OrientationType.enum"
import { InvalidPositionError } from "../errors/InvalidPosition.error"
import { TileType } from "../types/TileType.enum"
import attemptToHitShip from "./attemptToHitShip.lib"

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

const baord2Done: GameBoard = {
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

baordDone.player1.defense[2][2] = {type: TileType.MISS}
baordDone.player2.attack[2][2] = {type: TileType.MISS}


describe("getTiles()", () => {
    test("typehit", () => {
        expect(attemptToHitShip(baord,"player1", {x: 2, y: 2})).toEqual(baordDone)
    })
})