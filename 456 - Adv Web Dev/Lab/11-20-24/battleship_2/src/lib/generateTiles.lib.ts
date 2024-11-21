import { TileType } from "../types/TileType.enum"
import Tile from "../interfaces/Tile.interface"

/**
 * Generates a 10x10 grid of tiles for the game board, where each tile is initially set to `TileType.EMPTY`.
 * The function creates a 2D array of `Tile` objects, with each tile representing an empty space on the board.
 * This grid will be used for both the defense and attack boards of the players.
 *
 * @function generateTiles
 * @returns {Tile[][]} A 2D array representing a 10x10 grid of tiles, with each tile having a type of `TileType.EMPTY`.
 *
 * @example
 * // Example of generating a 10x10 grid of empty tiles
 * const emptyTiles = generateTiles();
 * console.log(emptyTiles); 
 * // Output: A 10x10 grid where each tile has { type: TileType.EMPTY }
 * [
 *   [ { type: TileType.EMPTY }, { type: TileType.EMPTY }, ..., { type: TileType.EMPTY } ], // Row 1
 *   [ { type: TileType.EMPTY }, { type: TileType.EMPTY }, ..., { type: TileType.EMPTY } ], // Row 2
 *   ...
 *   [ { type: TileType.EMPTY }, { type: TileType.EMPTY }, ..., { type: TileType.EMPTY } ]  // Row 10
 * ]
 */

export default function generateTiles(): Tile[][] {
    const tiles: Tile[][] = []
    for (let i = 0; i < 10; i++) {
        tiles[i] = []
        for (let j = 0; j < 10; j++) {
            tiles[i][j] = {
                type: TileType.EMPTY
            }
        }
    }
    return tiles
}