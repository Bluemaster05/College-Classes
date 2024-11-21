import {describe, expect, test} from "vitest"
import getOtherPlayer from "./getOtherPlayer.lib"

describe("getOtherPlayer()",() => {
    test("test 1", () => {
        expect(getOtherPlayer('player1')).toEqual("player2")
    })
    test("test 2", () => {
        expect(getOtherPlayer('player2')).toEqual("player1")
    })
})