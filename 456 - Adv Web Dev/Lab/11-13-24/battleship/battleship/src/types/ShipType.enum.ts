/**
 * Enum representing the different types of ships in the Battleship game.
 * Each ship has a specific size and role on the board.
 *
 * @enum {string}
 * @readonly
 * @property {string} CARRIER - The Carrier ship, typically the largest in the game.
 * @property {string} BATTLESHIP - The Battleship ship.
 * @property {string} CRUISER - The Cruiser ship.
 * @property {string} SUBMARINE - The Submarine ship.
 * @property {string} DESTROYER - The Destroyer ship.
 */
export enum ShipType {
    CARRIER = "Carrier",
    BATTLESHIP = "Battleship",
    CRUISER = "Cruiser",
    SUBMARINE = "Submarine",
    DESTROYER = "Destroyer"
}