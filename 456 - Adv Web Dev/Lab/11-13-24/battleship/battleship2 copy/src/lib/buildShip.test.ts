import {describe, expect, test} from "vitest"
import buildShip from "./buildShip.lib"
import { ShipType } from "../types/ShipType.enum"
import { OrientationType } from "../types/OrientationType.enum"


describe("buildShip()",() => {
    test("test 1", () => {
        expect(buildShip(ShipType.DESTROYER, OrientationType.VERTICAL)).toEqual({ placed: false, spaces: 2, type: "Destroyer", orientation: "Vertical", positions: [], hits: [] })
    })
    test("test 2", () => {
        expect(buildShip(ShipType.SUBMARINE, OrientationType.HORIZONTAL)).toEqual({ placed: false, spaces: 3, type: "Submarine", orientation: "Horizontal", positions: [], hits: [] })
    })
    test("test 3", () => {
        expect(buildShip(ShipType.CARRIER, OrientationType.HORIZONTAL)).toEqual({ placed: false, spaces: 5, type: "Carrier", orientation: "Horizontal", positions: [], hits: [] })
    })
    test("test 4", () => {
        expect(buildShip(ShipType.BATTLESHIP, OrientationType.HORIZONTAL)).toEqual({ placed: false, spaces: 4, type: "Battleship", orientation: "Horizontal", positions: [], hits: [] })
    })
    test("test 5", () => {
        expect(buildShip(ShipType.CRUISER, OrientationType.HORIZONTAL)).toEqual({ placed: false, spaces: 3, type: "Cruiser", orientation: "Horizontal", positions: [], hits: [] })
    })
})