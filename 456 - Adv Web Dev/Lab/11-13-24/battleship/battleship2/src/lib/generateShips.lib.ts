import Ship from "../interfaces/Ship.interface";

/**
 * Generates a predefined set of ships, each with a default horizontal orientation.
 * This function creates one ship of each type (Carrier, Battleship, Cruiser, Submarine, and Destroyer).
 * Each ship is initially unplaced on the board and has its positions and hit status empty.
 *
 * @function generateShips
 * @returns {Ship[]} An array of `Ship` objects, each representing a different type of ship (Carrier, Battleship, Cruiser, Submarine, Destroyer).
 * Each ship is created with a horizontal orientation by default.
 *
 * @example
 * // Example of generating ships
 * const ships = generateShips();
 * console.log(ships); 
 * // [{ type: "Carrier", orientation: "Horizontal", ...}, { type: "Battleship", orientation: "Horizontal", ...}, ...]
 */

import { OrientationType } from "../types/OrientationType.enum"
import { ShipType } from "../types/ShipType.enum"
import buildShip from "./buildShip.lib"

export default function generateShips(): Ship[] {
    const ShipList:Ship[] = []
    const shipTypes = [ShipType.BATTLESHIP,ShipType.CARRIER,ShipType.CRUISER,ShipType.DESTROYER,ShipType.SUBMARINE]
    for ( let ship of shipTypes) {
        ShipList.push(buildShip(ship, OrientationType.HORIZONTAL))
    }
    return ShipList
}