import {assert, describe, expect, it} from 'vitest'
import { antialias } from './script'

describe("antialias()", ()=>{
    it("Basic usage with a simple 2D array", ()=>{
        expect(antialias([[0, 0, 0],[0, 1 ,0],[0, 0, 0]])).toEqual([[1,1,1],[1,1,1],[1,1,1]])
    })
    it("Boardarys", ()=>{
        expect(antialias([[1,0,0],[0,0,0],[0,0,1]])).toEqual([[1,1,0],[1,1,1],[0,1,1]])
    })
    it("empty array", ()=>{
        expect(antialias([])).toEqual([])
    })
    it("single element array", ()=>{
        expect(antialias([[1]])).toEqual([[1]])
    })
    it("single element array with 0", ()=>{
        expect(antialias([[0]])).toEqual([[0]])
    })
    const testArray = [[0,0,0],[0,1,0],[0,0,0]];
    antialias(testArray)
    it("immutibility test", ()=>{
        expect(testArray).toEqual([[0,0,0],[0,1,0],[0,0,0]])
    })
    it("weird shapes", ()=>{
        expect(antialias([[0,0,0,1],[0,0,0],[1,0,0,0]])).toEqual([[0,0,1,1],[1,1,1],[1,1,0,0]])
    })
})