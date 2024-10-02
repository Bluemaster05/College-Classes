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
    test("test list", () => {
        expect(blastoff([4, 5, 3])).toEqual("Invalid Input")
    })
    test("test decimal number", () => {
        expect(blastoff(4.5)).toEqual("Invalid Input")
    })
    test("test numeric string", () => {
        expect(blastoff("5")).toEqual("Invalid Input")
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
    test("Test if Non numeric value", () => {
        expect(average(2.5, "6")).toEqual("Invalid Input")
    })
})

describe("vowelsAndConsonantes()",() => {
    test("test food", () => {
        expect(vowelsAndConsonants("food")).toEqual("Vowels: 2, Consonants: 2")
    })
    test("test FoOd", () => {
        expect(vowelsAndConsonants("food")).toEqual("Vowels: 2, Consonants: 2")
    })
    test("test food with extra symbols", () => {
        expect(vowelsAndConsonants("food!@#$%^&*(){[:;<,>.?/")).toEqual("Vowels: 2, Consonants: 2")
    })
    test("test NaN", () => {
        expect(vowelsAndConsonants(NaN)).toEqual("Invalid Input")
    })
    test("test foodismyfavoritething", () => {
        expect(vowelsAndConsonants("foodismyfavoritething")).toEqual("Vowels: 8, Consonants: 13")
    })
    test("test no letters", () => {
        expect(vowelsAndConsonants("#^#%^((#%&$$@@@:><?")).toEqual("Vowels: 0, Consonants: 0")
    })
})

describe("greatest()",() => {
    test("Test numbers and NaN", () => {
        expect(greatest(5, 10, 0, 21, -22, NaN)).toEqual("Invalid Input")
    })
    test("All negatives", () => {
        expect(greatest(-20, -10, -5)).toEqual(-5)
    })
    test("Test no input", () => {
        expect(greatest()).toEqual(-Infinity)
    })
    test("Test non numeric values", () => {
        expect(greatest(3, [40], "4")).toEqual("Invalid Input")
    })
})

describe("calculator()",() => {
    test("Test 5 10 add", () => {
        expect(calculator(5, 10, "add")).toEqual(15)
    })
    test("Test 5 10 subtract", () => {
        expect(calculator(5, 10, "subtract")).toEqual(-5)
    })
    test("Test 5 10 multiply", () => {
        expect(calculator(5, 10, "multiply")).toEqual(50)
    })
    test("Test 5 10 divide", () => {
        expect(calculator(5, 10, "divide")).toEqual(0.5)
    })
    test("Test wrong operand name", () => {
        expect(calculator(5, 10, "DiViDeeeeee")).toEqual("Invalid Input")
    })
    test("NaN in a", () => {
        expect(calculator(NaN, 10, "add")).toEqual("Invalid Input")
    })
    test("NaN in b", () => {
        expect(calculator(5, NaN, "add")).toEqual("Invalid Input")
    })
    test("divide by 0", () => {
        expect(calculator(5, 0, "division")).toEqual(Infinity)
    })
    test("a and b are infinity", () => {
        expect(calculator(-Infinity, -Infinity, "add")).toEqual("Invalid Input")
    })
})

describe("isPalendrone()",() => {
    test("Test Hello", () => {
        expect(isPalindrome("Hello")).toEqual(false)
    })
    test("test bob", () => {
        expect(isPalindrome("bob")).toEqual(true)
    })
    test("test NaN", () => {
        expect(isPalindrome(NaN)).toEqual("Invalid Input")
    })
})

describe("bitWiseNot()",() => {
    test("Test numbers", () => {
        expect(bitwiseNot("Hello")).toEqual("Invalid Input")
    })
    test("Test 10010", () => {
        expect(bitwiseNot("10010")).toEqual("01101")
    })
    test("Test NaN", () => {
        expect(bitwiseNot(NaN)).toEqual("Invalid Input")
    })
    test("Test empty string", () => {
        expect(bitwiseNot('')).toEqual("Invalid Input")
    })
})