import { InvalidPositionError } from "../errors/InvalidPosition.error";
import GameBoard from "../interfaces/GameBoard.interface";
import { OrientationType } from "../types/OrientationType.enum";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";
import checkPositions from "./checkPositions.lib";

/**
 * Generates the list of positions for a ship based on its type, starting position, and orientation.
 * The function calculates the positions the ship would occupy on the board and checks if they are valid.
 * If the positions are valid, it returns them; otherwise, 
 * it throws an `InvalidPositionError`.
 *
 * @function getPositionsForShip
 * @param {GameBoard} board - The current game board, which contains both players' grids.
 * @param {Player} player - The player who is placing the ship (either "player1" or "player2").
 * @param {number} shipIndex - The index of the ship to be placed for the given player and board
 * @param {PositionType} position - The starting position where the ship's first tile will be placed.
 * @param {OrientationType} orientation - The orientation of the ship (either "HORIZONTAL" or "VERTICAL").
 * @returns {PositionType[]} An array of positions the ship will occupy on the board.
 * @throws {InvalidPositionError} If the calculated positions are invalid (e.g., out of bounds or overlapping another ship).
 *
 * @example
 * // Example of getting valid positions for a ship
 * const shipIndex = 0
 * const position = { x: 0, y: 0 };
 * const positions = getPositionsForShip(board, "player1", shipIndex, position, OrientationType.HORIZONTAL);
 * console.log(positions);
 * // Output: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }]
 */

export default function getPositionsForShip(board: GameBoard, player: Player, shipIndex: number, position: PositionType, orientation: OrientationType): PositionType[] {
    const { spaces } = board[player].ships[shipIndex]

    const positions: PositionType[] = []

    for(let i = 0; i < spaces; i++) {
        if(orientation === OrientationType.HORIZONTAL) {
            positions.push({
                x: position.x + i,
                y: position.y
            })
        } else {
            positions.push({
                x: position.x,
                y: position.y + i
            })
        }
    }

    if(checkPositions(board, player, positions)) {
        return positions
    } else {
        throw new InvalidPositionError()
    }
}