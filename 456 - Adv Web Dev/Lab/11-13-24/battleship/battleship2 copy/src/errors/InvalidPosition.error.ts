/**
 * Custom error class that represents an invalid position error when attempting
 * to place a ship on the game board at an invalid location. This error is thrown
 * when the position of a ship does not meet the necessary placement criteria.
 *
 * @class InvalidPositionError
 * @extends {Error}
 * @param {string} [msg] - An optional custom message to provide more details about the error.
 * If no message is provided, a default message will be used.
 *
 * @example
 * try {
 *     throw new InvalidPositionError("The position is outside the grid.");
 * } catch (error) {
 *     console.log(error.message); // Output: "You've attempted to place a ship at an invalid location. The position is outside the grid."
 * }
 */
export class InvalidPositionError extends Error {
    constructor(msg?: string) {
        super(`You've attempted to place a ship at an invalid location. ${msg || ''}`)
    }
}
