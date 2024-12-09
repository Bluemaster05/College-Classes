import { TileType } from "../types/TileType.enum"
import GameBoard from "../interfaces/GameBoard.interface"
import { PositionType } from "../types/PositionType.type"
import { Player } from "../types/PlayerType.type"
import { InvalidPositionError } from "../errors/InvalidPosition.error"

/**
 * Updates the specified tiles on the player's board (either 'attack' or 'defense') 
 * with a given tile type. It performs validation to ensure that the positions are within
 * the bounds of the board (0 to 9 for both x and y coordinates). If any position is invalid, 
 * an error is thrown.
 * 
 * Note: The returned `GameBoard` is a copy of the original board and does not modify the original board state.
 *
 * @function updateTiles
 * @param {GameBoard} board - The current game board containing the state of both players' grids.
 * @param {Player} player - The player whose board will be updated ("player1" or "player2").
 * @param {"defense" | "attack"} which - The part of the board to be updated ('defense' or 'attack').
 * @param {PositionType} position - The position on the grid to be updated.
 * @param {TileType} type - The new type of the tile to be applied to the specified positions.
 * @throws {InvalidPositionError} Throws an `InvalidPositionError` if any position is out of bounds (not between 0 and 9 for both x and y).
 * @returns {GameBoard} A new game board with the updated tile types. The original `board` is not modified.
 *
 * @example
 * const position = { x: 2, y: 3 };
 * const newBoard = updateTile(gameBoard, "player1", "defense", position, TileType.HIT);
 * console.log(newBoard);
 * // Output: Updated game board with the specified positions set to 'HIT' (a copy of the original).
 */
export default function updateTile(board: GameBoard, player: Player, which: "defense" | "attack", position: PositionType, type: TileType): GameBoard {
    const boardCopy = structuredClone(board)
    if(position.y < 0 || position.y > 9 || position.x < 0 || position.x > 9) {
        throw new InvalidPositionError()
    }
    boardCopy[player][which][position.y][position.x].type = type
    
    return boardCopy
}