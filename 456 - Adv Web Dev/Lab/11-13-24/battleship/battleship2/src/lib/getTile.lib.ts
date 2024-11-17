import GameBoard from "../interfaces/GameBoard.interface";
import Tile from "../interfaces/Tile.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";

/**
 * Retrieves a specific tile from the player's grid (either "attack" or "defense") at the given position.
 * It accesses the tile based on the player's grid and the specified coordinate.
 *
 * @function getTile
 * @param {GameBoard} board - The current game board, containing both players' grids.
 * @param {Player} player - The player whose grid will be accessed (either "player1" or "player2").
 * @param {'attack' | 'defense'} which - The type of grid to access, either "attack" or "defense".
 * @param {PositionType} position - The position on the grid to retrieve the tile from.
 * @throws {InvalidPositionError} - Throws an invalid position error if the requested tile is out of bounds
 * @returns {Tile} The tile at the specified position in the selected grid.
 *
 * @example
 * // Example of retrieving a tile from the defense grid
 * const position = { x: 2, y: 3 };
 * const tile = getTile(board, "player1", "defense", position);
 * console.log(tile);
 * // Output: { type: TileType.EMPTY }
 */


import { InvalidPositionError } from "../errors/InvalidPosition.error";

export default function getTile(board: GameBoard, player: Player, which: 'attack' | 'defense', position: PositionType): Tile {
    if (position.x > 10 || position.y > 10){
        throw new InvalidPositionError('Position is outside the grid!')
    }
    return  board[player][which][position.y][position.x]
}


