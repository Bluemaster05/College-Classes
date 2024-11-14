import {describe, expect, test} from "vitest"
import getOtherPlayer from "./getOtherPlayer.lib"

describe("blastoff()",() => {
    test("Switch to player 2", () => {
        expect(getOtherPlayer('player1')).toEqual("player2")
    })
    test("Switch to player 1", () => {
        expect(getOtherPlayer('player2')).toEqual("player1")
    })
})