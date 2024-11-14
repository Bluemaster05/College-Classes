import { PlayerData } from "./PlayerData.interface";

/**
 * Represents the game board for the Battleship game, containing the data for both players.
 * Each player has their own set of attributes, such as their defense and attack grids,
 * along with information about the ships they've placed.
 *
 * @interface GameBoard
 * @property {PlayerData} player1 - The data for Player 1, including defense grid, attack grid, and placed ships.
 * @property {PlayerData} player2 - The data for Player 2, including defense grid, attack grid, and placed ships.
 */
export default interface GameBoard {
    player1: PlayerData,
    player2: PlayerData,
}
