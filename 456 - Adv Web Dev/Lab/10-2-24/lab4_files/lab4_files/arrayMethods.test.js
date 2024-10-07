import { describe, expect, test } from "vitest"
import { removeOutliers, compress, reformat, salarySort, fullNameSort } from "./arrayMethods"

/* 
I have kindly provided you with the following class definition for
testing purposes. Feel free to use it or not.
*/

class User {
    constructor(firstName, lastName, isAdmin, salary) {
        this.firstName = firstName
        this.lastName = lastName
        this.isAdmin = isAdmin
        this.salary = salary
    }
}



describe("removeOutliers()", () => {
    test("test Some salaries", () => {
        expect(removeOutliers([
            { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
            { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
            { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 },
            { firstName: 'David', lastName: 'Davis', isAdmin: true, salary: 70000 }
        ], 5000)).toEqual(
            [
                { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
                { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
            ])
    })
    test("test Small Salaries", () => {
        expect(removeOutliers([
            { salary: 500 },
            { salary: 800 },
            { salary: 200 },
            { salary: 700 }
        ], 50)).toEqual(
            [
                { salary: 500 }
            ])
    })
    test("test no salarys", () => {
        expect(removeOutliers([], 50)).toEqual([])
    })
}
)

describe("compress()", () => {
    test("3 values Test", () => {
        expect(compress([
            { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
            { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
            { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
        ])).toEqual("Alice Smith is not an admin and makes $50000 annually;Bob Johnson is an admin and makes $55000 annually;Charlie Brown is not an admin and makes $60000 annually;")
    })
    test("0 values Test", () => {
        expect(compress([])).toEqual("")
    })
})
describe("reformat()", () => {
    test("3 values Test fullname", () => {
        expect(reformat([
            { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
            { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
            { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
        ])).toEqual([
            { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000, fullName: 'Alice Smith' },
            { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000, fullName: 'Bob Johnson' },
            { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000, fullName: 'Charlie Brown' }
        ])
    })
    test("0 values Test", () => {
        expect(reformat([])).toEqual([])
    })
})
describe("salarySort()", () => {
    test("3 Values", () => {
        expect(salarySort([
            { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 60000 },
            { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 50000 },
            { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 55000 }
        ])).toEqual([
            { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 50000 },
            { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 55000 },
            { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 60000 }
        ])
    })
    test("0 values", () => {
        expect(salarySort([])).toEqual([])
    })
})
describe("fullNameSort()", () => {
    test("First", () => {
        expect(salarySort([
            { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 },
            { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
            { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 }
        ])).toEqual([
            { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000, fullName: 'Alice Smith' },
            { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000, fullName: 'Bob Johnson' },
            { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000, fullName: 'Charlie Brown' }
        ])
    })
})