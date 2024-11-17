import {describe, expect, test} from "vitest"
import generateShips from "./generateShips.lib"

describe("blastoff()",() => {
    test("Generate Ships", () => {
        expect(generateShips()).toEqual([{ placed: false, spaces: 4, type: "Battleship", orientation: "Horizontal", positions: [], hits: [] },{ placed: false, spaces: 5, type: "Carrier", orientation: "Horizontal", positions: [], hits: [] },{ placed: false, spaces: 3, type: "Cruiser", orientation: "Horizontal", positions: [], hits: [] },{ placed: false, spaces: 2, type: "Destroyer", orientation: "Horizontal", positions: [], hits: [] },{ placed: false, spaces: 3, type: "Submarine", orientation: "Horizontal", positions: [], hits: [] }])
    })
})