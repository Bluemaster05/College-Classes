/************************ STUDENT INFORMATION ***********************
Course: CPTR-456 Advanced Web Programming
Assignment: Lab 3 - JavaScript Values, Types, Operators, and Functions
Full Name:
Date:

Honor Statement: I hereby declare that I will complete the assignment 
independently and will not seek unauthorized assistance from other 
students or external sources. I understand that collaboration with 
others or the use of artificial intelligence tools is not permitted, 
and I commit to ensuring that my work is entirely my own. [ X ]

/********************* ASSIGNMENT INSTRUCTIONS **********************
In this assignment, you will learn to use basic values, types, and
functions to solve some simple problems with JavaScript. Follow the
provided lab check-off sheet, and get each problem approved BEFORE
moving onto the next one. You must write appropriate tests for
each function.

NOTE: You may NOT import OR include any libraries (e.g. through NPM / Yarn)
and you may not use any of the standard libraries (e.g., Math).

Once you've completed all of the functions and their appropriate tests,
provide your code to the instructor for grading. You have 3 attempts
to successfully pass the instructor's test suite.

/**
 * Generates a countdown from the given number to zero, followed by "blastoff!".
 *
 * @param {number} amount - The starting number for the countdown (must be a non-negative number).
 * @returns {string} The countdown string ending with "0... blastoff!", or `"Invalid Input"` if the input is not a valid number or is negative.
 * @example
 * 
 * blastoff(5);    // returns "5, 4, 3, 2, 1, 0... blastoff!"
 */
export function blastoff(amount) {
    let countdown = ""
    if (amount < 0 || isNaN(amount)) {
        return "Invalid Input"
    }

    for (let i = amount; i > 0; i--) {
        if (i === 0) {
            return "0... blastoff!"
        }
        if (i >= 1) {
            countdown += String(i) + ", "
        }
    }
    countdown += "0... blastoff!"
    return countdown
}

// console.log(blastoff(100))

/**
 * Calculates the average of a list of numbers.
 *
 * @param {...number} values - A list of numbers to average.
 * @returns {(number|string)} The average of the numbers, or `"Invalid Input"` if any value is not a number or if no numbers are provided.
 * @example
 * 
 * average(2, 4, 6);        // returns 4
 */
export function average(...values) {
    let average1 = 0
    if (values.length === 0) {
        return "Invalid Input"
    }
    for (let j of values) {
        if (typeof j == "number" && isNaN(j)) {
            return "Invalid Input"
        }
    }

    for (let i of values) {
        average1 += i
    }
    average1 = average1 / values.length
    return average1
}


/**
 * Counts the number of vowels and consonants in a given string.
 *
 * @param {string} value - The input string to analyze.
 * @returns {string} A string indicating the number of vowels and consonants, or `"Invalid Input"` if the input is not a string.
 * @example
 * 
 * vowelsAndConsonants("hello");      // returns "Vowels: 2, Consonants: 3"
 */
export function vowelsAndConsonants(value) {
    const VowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const consonArray = ['q','w','r','t','y','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
    let vowels = 0
    let constinants = 0
    for (let j of value) {
        if (typeof j != "string" ) {
            return "Invalid Input"
        }
    }


    for (let i of value) {
        if (VowelArray.includes(i)){
            vowels += 1
        } else if (consonArray.includes(i)) {
            constinants += 1
        }
    }
    return `Vowels: ${vowels} Consonants: ${constinants}`
}

/**
 * Returns the greatest number from a list of values.
 *
 * @param {...number} values - A list of numbers to compare.
 * @returns {(number|string)} The greatest number in the list, `"Invalid Input"` if any value is not a number, or `-Infinity` if no value is provided.
 * @example
 * 
 * greatest(1, 5, 3, 9);        // returns 9
 */
export function greatest(...values) {
    return 0
}

/**
 * Performs basic arithmetic operations: addition, subtraction, multiplication, and division.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {string} operation - The operation to perform: 'add', 'subtract', 'multiply', or 'divide'.
 * @returns {(number|string)} The result of the arithmetic operation, `"Invalid Input"` if the operation is not recognized, or `"Invalid Input"` if one of the operands isn't a number.
 * If division by zero occurs, returns `Infinity`.
 * @example
 * 
 * calculator(5, 3, 'add');      // returns 8
 */
export function calculator(a, b, operation) {
    return "IMPLEMENT ME"
}

/**
 * Checks if the given string is a palindrome (reads the same forwards and backwards).
 *
 * @param {string} str - The string to check.
 * @returns {(boolean|string)} Returns `true` if the string is a palindrome, 
 * `false` if it's not, or `"Invalid Input"` if the input is not a string.
 * 
 * @example
 * isPalindrome("madam"); // returns true
 */
export function isPalindrome(str) {
    return false
}

/**
 * Performs a bitwise NOT operation on a given bitstring.
 *
 * @param {string} bitstring - A string consisting of '0's and '1's.
 * @returns {(string|string)} The resulting bitstring after applying the NOT operation, 
 * or `"Invalid Input"` if the input is not a valid bitstring.
 * 
 * @example
 * bitwiseNot("1101");      // returns "0010"
 */
export function bitwiseNot(bitstring) {
    return "IMPLEMENT ME"
}