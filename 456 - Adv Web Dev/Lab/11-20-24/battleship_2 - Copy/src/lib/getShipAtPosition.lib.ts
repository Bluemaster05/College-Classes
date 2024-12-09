import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";

/**
 * Checks if the given position corresponds to a position occupied by a ship.
 * If a match is found, the corresponding index of the ship is returned. Otherwise, it returns `undefined`.
 *
 * @function getShipAtPosition
 * @param {GameBoard} board - The current game board, which contains the ships for both players.
 * @param {Player} player - The player whose ships will be checked (either "player1" or "player2").
 * @param {PositionType} position - An position to check for ship occupancy.
 * @returns {number | undefined} The index of the ship occupying the specified position, or `undefined` if no ship is found.
 *
 * @example
 * // Example of checking if a ship occupies the given position
 * const position = { x: 1, y: 1 };
 * const ship = getShipAtPosition(board, "player1", position);
 * if (ship) {
 *   console.log(`Ship found: ${ship.type}`);
 * } else {
 *   console.log("No ship found at the given position.");
 * }
 */

export default function getShipAtPosition(board: GameBoard, player: Player, position: PositionType): number | undefined {
    for (let i = 0; i < board[player].ships.length; i++) {
        for (const shipPosition of board[player].ships[i].positions) {
            if (shipPosition.x === position.x && shipPosition.y === position.y) {
                return i
            }
        }
    }
    return undefined
}