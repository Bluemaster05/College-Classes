import {describe, expect, test} from "vitest"
import { blastoff, average, vowelsAndConsonants, greatest, calculator, isPalindrome, bitwiseNot } from "./functions"

describe("blastoff()",() => {
    test("Check for 5", () => {
        expect(blastoff(5)).toEqual("5, 4, 3, 2, 1, 0... blastoff!")
    })
    test("Check for 0", () => {
        expect(blastoff(0)).toEqual("0... blastoff!")
    })
    test("Check for Big number", () => {
        expect(blastoff(100)).toEqual("100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0... blastoff!")
    })
    test("Check for negative number", () => {
        expect(blastoff(-5)).toEqual("Invalid Input")
    })
    test("Check for NaN", () => {
        expect(blastoff(NaN)).toEqual("Invalid Input")
    })
})

describe("average()", () => {
    test("Test 5 4 3 2 and 1", () => {
        expect(average(5, 4, 3, 2, 1)).toEqual(3)
    })
    test("Test Empty list", () => {
        expect(average()).toEqual("Invalid Input")
    })
    test("Test NaN", () => {
        expect(average(NaN)).toEqual("Invalid Input")
    })
    test("Test 2 4 and 6", () => {
        expect(average(2, 4, 6)).toEqual(4)
    })
    test("Test 2.5 and 6", () => {
        expect(average(2.5, 6)).toEqual(4.25)
    })
})

describe("vowelsAndConsonantes()",() => {
    test("", () => {
        expect(vowelsAndConsonants("food")).toEqual("Vowels: 2 Consonants: 2")
    })
    test("", () => {
        expect(vowelsAndConsonants("food!@#$%^&*(){[:;<,>.?/")).toEqual("Vowels: 2 Consonants: 2")
    })
})

describe("greatest()",() => {
    test("Test numbers", () => {
        expect(greatest(5, 10, 0, 21, -22, NaN)).toEqual("Invalid Input")
    })
    test("All negatives", () => {
        expect(greatest(-20, -10, -5)).toEqual(-5)
    })
    test("All negatives", () => {
        expect(greatest()).toEqual(-Infinity)
    })
})

describe("calculator()",() => {
    test("Test numbers", () => {
        expect(calculator(5, 10, "add")).toEqual(15)
    })
    test("Test numbers", () => {
        expect(calculator(5, 10, "subtract")).toEqual(-5)
    })
    test("Test numbers", () => {
        expect(calculator(5, 10, "multiply")).toEqual(50)
    })
    test("Test numbers", () => {
        expect(calculator(5, 10, "divide")).toEqual(0.5)
    })
    test("Test numbers", () => {
        expect(calculator(5, 10, "DiViDeeeeee")).toEqual("Invalid Input")
    })
    test("Test numbers", () => {
        expect(calculator(NaN, 10, "add")).toEqual("Invalid Input")
    })
    test("Test numbers", () => {
        expect(calculator(5, NaN, "add")).toEqual("Invalid Input")
    })
    test("Test numbers", () => {
        expect(calculator(5, 0, "divide")).toEqual(Infinity)
    })
})

describe("isPalendrone()",() => {
    test("Test numbers", () => {
        expect(isPalindrome("Hello")).toEqual(false)
    })
    test("All negatives", () => {
        expect(isPalindrome("bob")).toEqual(true)
    })
    test("All negatives", () => {
        expect(isPalindrome(NaN)).toEqual("Invalid Input")
    })
})

describe("bitWiseNot()",() => {
    test("Test numbers", () => {
        expect(bitwiseNot("Hello")).toEqual("Invalid Input")
    })
    test("All negatives", () => {
        expect(bitwiseNot("10010")).toEqual("01101")
    })
    test("All negatives", () => {
        expect(bitwiseNot(NaN)).toEqual("Invalid Input")
    })
})