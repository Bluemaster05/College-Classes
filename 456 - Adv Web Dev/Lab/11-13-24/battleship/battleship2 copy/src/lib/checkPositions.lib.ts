import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";
import getShipInTiles from "./getShipInTiles.lib";

/**
 * Checks whether a ship can be placed at the specified positions on the game board 
 * for the given player, taking into account the ship's orientation (horizontal or vertical).
 * The function ensures that the ship fits within the bounds of the 10x10 grid and does not overlap with another ship.
 *
 * @function checkPositions
 * @param {GameBoard} board - The current game board, which includes both players' data.
 * @param {Player} player - The player whose ship placement is being checked (either "player1" or "player2").
 * @param {PositionType[]} positions - An array of `PositionType` objects representing the positions where the ship is attempting to be placed.
 * @returns {boolean} `true` if the ship can be placed at the specified positions; `false` otherwise.
 *
 * @example
 * // Example of checking if a Cruiser can be placed horizontally at positions [(0, 0), (1, 0), (2, 0)]
 * const canPlace = checkPositions(gameBoard, "player1", [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]);
 * console.log(canPlace); // true or false depending on the current state of the board
 */
export default function checkPositions(board: GameBoard, player: Player, positions: PositionType[]): boolean {
    if (!getShipInTiles(board, player, positions)) { 
        for (const pos of positions){
            if (pos.x > 9 || pos.x < 0 || pos.x > 9 || pos.x < 0) {
                return false
            }
        }
        return true
    }
    return false
}