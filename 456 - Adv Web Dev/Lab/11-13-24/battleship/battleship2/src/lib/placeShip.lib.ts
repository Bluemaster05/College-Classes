import GameBoard from "../interfaces/GameBoard.interface";
import Ship from "../interfaces/Ship.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";

/**
 * Places a ship on the game board at the specified positions and orientation. 
 * It validates if the ship can be placed at those positions based on the board's state. 
 * If the placement is valid, the ship is added to the player's ships and the board is updated. 
 * If the placement is invalid, an error is thrown.
 * 
 * Note: The returned `GameBoard` is a copy of the original board and does not modify the original board state.
 *
 * @function placeShip
 * @param {GameBoard} board - The current game board containing the state of both players' grids.
 * @param {Player} player - The player who is placing the ship (either "player1" or "player2").
 * @param {Ship} ship - The ship to be placed on the board (this must be a reference to an existing ship on the board).
 * @param {PositionType[]} positions - The positions on the grid where the ship will be placed.
 * @throws {InvalidPositionError} Throws an error if the ship cannot be placed at the specified positions.
 * @returns {GameBoard} A new game board with the ship placed at the specified positions. The original `board` is not modified.
 *
 * @example
 * const positions = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }];
 * const newBoard = placeShip(gameBoard, "player1", carrier, positions);
 * console.log(newBoard);
 * // Output: Updated game board with the ship placed at the given positions (a copy of the original).
 */
export default function placeShip(board: GameBoard, player: Player, ship: Ship, positions: PositionType[]): GameBoard {
    // Implement Me
}