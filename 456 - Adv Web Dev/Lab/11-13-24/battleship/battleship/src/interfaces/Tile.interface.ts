import { TileType } from "../types/TileType.enum";

/**
 * Represents a tile on the Battleship game board.
 * Each tile has a specific type, indicating its status, such as whether it's empty, part of a ship, or a hit.
 *
 * @interface Tile
 * @property {TileType} type - The type of the tile, as defined by the `TileType` enum.
 */
export default interface Tile {
    type: TileType
}