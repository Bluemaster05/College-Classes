import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";
import { TileType } from "../types/TileType.enum";
import getOtherPlayer from "./getOtherPlayer.lib";
import getShipInTiles from "./getShipInTiles.lib";
import getTile from "./getTile.lib";
import updateTiles from "./updateTiles.lib";

/**
 * Attempts to hit an opponent's ship at the given position on the game board.
 * This function creates a **copy** of the original game board and updates the defense and attack grids based on whether the shot is a hit or a miss.
 * If a ship is hit, the function marks the tile as a hit and checks if all parts of the ship have been hit, alerting that the ship is sunk.
 * If all ships are sunk, the player is notified of their win, and the game reloads. If the shot misses, the function updates the appropriate grids to reflect a miss.
 * 
 * **Note:** The original game board is **not modified**. A new game board object is returned with the updated values.
 *
 * @function attemptToHitShip
 * @param {GameBoard} board - The current state of the game board, including both players' data. The original game board is not modified.
 * @param {Player} opponent - The player being attacked (either "player1" or "player2").
 * @param {PositionType} position - The coordinates (x and y) of the tile where the player is attempting to hit.
 * @returns {GameBoard} A new `GameBoard` object with updated defense and attack grids, reflecting the outcome of the shot.
 *
 * @example
 * // Example of hitting an opponent's ship at position (2, 3)
 * const newBoard = attemptToHitShip(gameBoard, "player1", { x: 2, y: 3 });
 * console.log(newBoard); // Prints the updated game board with hit or miss status.
 */
export default function attemptToHitShip(board: GameBoard, opponent: Player, position: PositionType): GameBoard {
    let newBoard = structuredClone(board)
    if (getTile(newBoard, opponent, "defense", position).type === TileType.EMPTY) {
        newBoard = updateTiles(newBoard, opponent, 'defense', [position], TileType.MISS)
        newBoard = updateTiles(newBoard, getOtherPlayer(opponent), 'attack', [position], TileType.MISS)
    } else if (getTile(newBoard, opponent, "defense", position).type === TileType.SHIP) {
        newBoard = updateTiles(newBoard, opponent, 'defense', [position], TileType.HIT)
        newBoard = updateTiles(newBoard, getOtherPlayer(opponent), 'attack', [position], TileType.HIT)
        // Find correct bool to change to true in the ships and replace it
        let hitShip = getShipInTiles(newBoard, opponent, [position])
        for (const ship of newBoard[opponent].ships) {
            for (const pos of ship.positions) {
                if (pos.x === position.x && pos.y === position.y) {
                    hitShip = ship
                    const hitIndex = ship.positions.indexOf(pos)
                    hitShip.hits[hitIndex] = true
                }
            }
        }
        const shipSunk = hitShip!.hits.every(bool => bool)
        if (shipSunk) {
            alert(`You sunk their ${hitShip!.type}`)
        }
        const sunkBoolArray = []
        for (const ship of newBoard[opponent].ships) {
            sunkBoolArray.push(ship.hits.every(bool => bool))
        }
        const allShipsSunk = sunkBoolArray.every(bool => bool)
        if (allShipsSunk) {
            alert('Congrats you sunk all their battleships!!!\nYou Won!!!')
            window.location.reload()
        }
        
        return newBoard
    }
    return newBoard
}