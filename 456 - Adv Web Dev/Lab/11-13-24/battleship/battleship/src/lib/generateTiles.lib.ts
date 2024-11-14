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
 * // Output: A 10x10 grid where each tile has { type: "EMPTY" }
 * [
 *   [ { type: "EMPTY" }, { type: "EMPTY" }, ..., { type: "EMPTY" } ], // Row 1
 *   [ { type: "EMPTY" }, { type: "EMPTY" }, ..., { type: "EMPTY" } ], // Row 2
 *   ...
 *   [ { type: "EMPTY" }, { type: "EMPTY" }, ..., { type: "EMPTY" } ]  // Row 10
 * ]
 */

import Tile from "../interfaces/Tile.interface";
import { TileType } from "../types/TileType.enum";

export default function generateTiles(): Tile[][] {
    const allTiles: Tile[][] = [[],[],[],[],[],[],[],[],[],[]]
    for (let row of allTiles){
        for (let j = 0; j < 10 ;j++){
                row.push({ type: TileType.EMPTY })
        }          
    } 
    return allTiles
}