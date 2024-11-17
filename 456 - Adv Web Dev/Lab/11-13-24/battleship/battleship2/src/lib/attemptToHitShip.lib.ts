
import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";

/**
 * Attempts to hit an opponent's ship at the given position on the game board.
 * This function creates a **copy** of the original game board and updates the defense and attack grids based on whether the shot is a hit or a miss.
 * If a ship is hit, the function marks the tile as a hit and checks if all parts of the ship have been hit, alerting that the ship is sunk.
 * If all ships are sunk, the player is notified of their win, and the game reloads. If the shot misses, the function updates the appropriate grids to reflect a miss.
 * 
 * **Note:** The original game board is **not modified**. A new game board object is returned with the updated values.
 *
 * @function attemptToHitShip
 * @param {GameBoard} board - The current state of the game board, including both players' data. The original game board is not modified.
 * @param {Player} opponent - The player being attacked (either "player1" or "player2").
 * @param {PositionType} position - The coordinates (x and y) of the tile where the player is attempting to hit.
 * @returns {GameBoard} A new `GameBoard` object with updated defense and attack grids, reflecting the outcome of the shot.
 *
 * @example
 * // Example of hitting an opponent's ship at position (2, 3)
 * const newBoard = attemptToHitShip(gameBoard, "player1", { x: 2, y: 3 });
 * console.log(newBoard); // Prints the updated game board with hit or miss status.
 */
export default function attemptToHitShip(board: GameBoard, opponent: Player, position: PositionType): GameBoard {
    // Implement Me
}