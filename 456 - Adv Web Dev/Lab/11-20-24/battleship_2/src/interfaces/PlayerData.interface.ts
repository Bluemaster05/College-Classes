import Ship from "./Ship.interface"
import Tile from "./Tile.interface"

/**
 * Represents the data for a player in the Battleship game.
 * This includes the player's defense and attack grids, information about their ships,
 * and whether all ships have been placed on the board.
 *
 * @interface PlayerData
 * @property {boolean} placedShips - Indicates if all ships have been placed by the player.
 * @property {Tile[][]} defense - A 2D array representing the player's defensive grid.
 * @property {Tile[][]} attack - A 2D array representing the player's attack grid.
 * @property {Ship[]} ships - An array of `Ship` objects representing the player's ships.
 */
export interface PlayerData {
    placedShips: boolean
    defense: Tile[][]
    attack: Tile[][]
    ships: Ship[]
}