import { describe, expect, test, beforeAll, vi } from "vitest"
import generateTiles from "./generateTiles.lib"
import generateShips from "./generateShips.lib"
import GameBoard from "../interfaces/GameBoard.interface"
import getPositionsForShip from "./getPositionsForShip.lib"
import { ShipType } from "../types/ShipType.enum"
import { OrientationType } from "../types/OrientationType.enum"
import { InvalidPositionError } from "../errors/InvalidPosition.error"
import { TileType } from "../types/TileType.enum"
import attemptToHitShip from "./attemptToHitShip.lib"
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

baordDone.player1.defense[2][2] = { type: TileType.MISS }
baordDone.player2.attack[2][2] = { type: TileType.MISS }

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



baord2.player1.ships[2].positions = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }]
baord2.player1.ships[2].orientation = OrientationType.HORIZONTAL
baord2.player1.ships[2].hits = [false, true, true]
baord2.player1.ships[0].hits = [false, false, false, false,]
updateTiles(baord2, "player1", 'defense', [{ x: 3, y: 3 }], TileType.SHIP)
updateTiles(baord2, "player1", 'defense', [{ x: 4, y: 3 }, { x: 5, y: 3 }], TileType.HIT)
updateTiles(baord2, 'player2', 'attack', [{ x: 4, y: 3 }, { x: 5, y: 3 }], TileType.HIT)

baord2Done.player1.ships[2].positions = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }]
baord2Done.player1.ships[2].orientation = OrientationType.HORIZONTAL
baord2Done.player1.ships[2].hits = [true, true, true]
baord2Done.player1.ships[0].hits = [false, false, false, false,]
updateTiles(baord2Done, "player1", 'defense', [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }], TileType.HIT)
updateTiles(baord2Done, 'player2', 'attack', [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }], TileType.HIT)

const baord3: GameBoard = {
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

const baord3Done: GameBoard = {
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

baord3.player1.ships[2].positions = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }]
baord3.player1.ships[2].orientation = OrientationType.HORIZONTAL
baord3.player1.ships[2].hits = [false, true, true]
const b1 = updateTiles(baord3, "player1", 'defense', [{ x: 3, y: 3 }], TileType.SHIP)
const b2 = updateTiles(b1, "player1", 'defense', [{ x: 4, y: 3 }, { x: 5, y: 3 }], TileType.HIT)
updateTiles(baord3, 'player2', 'attack', [{ x: 4, y: 3 }, { x: 5, y: 3 }], TileType.HIT)

baord3Done.player1.ships[2].positions = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }]
baord3Done.player1.ships[2].orientation = OrientationType.HORIZONTAL
baord3Done.player1.ships[2].hits = [true, true, true]
updateTiles(baord3Done, "player1", 'defense', [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }], TileType.HIT)
updateTiles(baord3Done, 'player2', 'attack', [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }], TileType.HIT)

beforeAll(() => {
    vi.stubGlobal('location', {
        reload: () => { }
    })
})

const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

describe("getTiles()", () => {
    test("typehit", () => {
        expect(attemptToHitShip(baord, "player1", { x: 2, y: 2 })).toEqual(baordDone)
    })
    test("typehit", () => {
        expect(attemptToHitShip(baord2, "player1", { x: 3, y: 3 })).toEqual(baord2Done)
        expect(alertSpy).toHaveBeenCalledWith('You sunk their Cruiser')
    })
    test("typehit", () => {
        expect(attemptToHitShip(baord3, "player1", { x: 3, y: 3 })).toEqual(baord3Done)
        expect(alertSpy).toHaveBeenCalledWith('Congrats you sunk all their battleships!!!\nYou Won!!!')
    })
})