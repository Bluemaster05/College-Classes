import Ship from "../interfaces/Ship.interface";
import { ShipType } from "../types/ShipType.enum";
import { OrientationType } from "../types/OrientationType.enum";

/**
 * Builds a new ship object based on the provided type and orientation.
 * The function creates a `Ship` with the correct number of spaces based on the ship's type, 
 * sets the initial orientation, and initializes the ship's positions and hit status.
 * The ship is marked as not yet placed on the board.
 *
 * @function buildShip
 * @param {ShipType} type - The type of the ship (e.g., CARRIER, BATTLESHIP). Determines the size of the ship.
 * @param {OrientationType} orientation - The orientation of the ship (HORIZONTAL or VERTICAL).
 * @returns {Ship} A new `Ship` object with the specified type, orientation, and initial properties.
 *
 * @example
 * // Example of building a Cruiser ship with a horizontal orientation
 * const newShip = buildShip(ShipType.CRUISER, OrientationType.HORIZONTAL);
 * console.log(newShip); 
 * // { placed: false, spaces: 3, type: "Cruiser", orientation: "Horizontal", positions: [], hits: [] }
 */


export default function buildShip(type: ShipType, orientation: OrientationType): Ship {
    let spaces = 0
    if (type === ShipType.BATTLESHIP) {
        spaces = 4
    }
    else if (type === ShipType.CARRIER) {
        spaces = 5
    }
    else if (type === ShipType.CRUISER) {
        spaces = 3
    }
    else if (type === ShipType.DESTROYER) {
        spaces = 2
    }
    else if (type === ShipType.SUBMARINE) {
        spaces = 3
    }
    return {
        placed: false,
        spaces: spaces,
        type: type,
        orientation: orientation,
        positions: [],
        hits: [],
    }
}