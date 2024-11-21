/**
 * Enum representing the two possible orientations for ships in the Battleship game.
 * A ship can either be placed horizontally or vertically on the grid.
 *
 * @enum {string}
 * @readonly
 * @property {string} HORIZONTAL - Represents a horizontal orientation for the ship.
 * @property {string} VERTICAL - Represents a vertical orientation for the ship.
 */
export enum OrientationType {
    HORIZONTAL = "Horizontal",
    VERTICAL = "Vertical"
}