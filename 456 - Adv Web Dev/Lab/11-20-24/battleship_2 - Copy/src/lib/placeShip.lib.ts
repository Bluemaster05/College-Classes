import { InvalidPositionError } from "../errors/InvalidPosition.error"
import { PositionType } from "../types/PositionType.type"
import checkPositions from "./checkPositions.lib"
import GameBoard from "../interfaces/GameBoard.interface"
import { Player } from "../types/PlayerType.type"
import { TileType } from "../types/TileType.enum"
import updateTile from "./updateTile.lib"

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
 * @param {number} shipIndex - The index of the ship to be placed on the board.
 * @param {PositionType[]} positions - The positions on the grid where the ship will be placed. This list must be non-empty.
 * @throws {InvalidPositionError} Throws an error if the ship cannot be placed at the specified positions.
 * @returns {GameBoard} A new game board with the ship placed at the specified positions. The original `board` is not modified.
 *
 * @example
 * const positions = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }];
 * const newBoard = placeShip(gameBoard, "player1", carrier, positions);
 * console.log(newBoard);
 * // Output: Updated game board with the ship placed at the given positions (a copy of the original).
 */
export default function placeShip(board: GameBoard, player: Player, shipIndex: number, positions: PositionType[]): GameBoard {
    if(!checkPositions(board, player, positions) || !positions.length) {
        throw new InvalidPositionError()
    }

    let newBoard = structuredClone(board)
    for(const position of positions) {
        newBoard = updateTile(newBoard, player, 'defense', position, TileType.SHIP)
    }

    const ship = newBoard[player].ships[shipIndex]

    ship.positions = positions
    ship.hits = [...Array(ship.spaces)].map(() => false)
    ship.placed = true

    const unplaced = newBoard[player].ships.filter(ship => !ship.placed).length

    if(!unplaced) {
        newBoard[player].placedShips = true
    }

    return newBoard
}