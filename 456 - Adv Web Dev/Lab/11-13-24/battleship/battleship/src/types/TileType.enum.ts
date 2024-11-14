/**
 * Enum representing the different types of tiles on the Battleship game board.
 * Each tile can have a specific status, such as being empty, part of a ship, a target, or hit/missed.
 *
 * @enum {number}
 * @readonly
 * @property {number} EMPTY - Represents an empty tile.
 * @property {number} PLACING - Represents a tile being used for ship placement.
 * @property {number} TARGETING - Represents a tile being targeted for attack.
 * @property {number} SHIP - Represents a tile occupied by part of a ship.
 * @property {number} HIT - Represents a tile where a ship has been hit.
 * @property {number} MISS - Represents a tile where a shot has missed.
 */
export enum TileType {
    EMPTY,
    PLACING,
    TARGETING,
    SHIP,
    HIT,
    MISS
}