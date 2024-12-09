import GameBoard from "../interfaces/GameBoard.interface";
import { Player } from "../types/PlayerType.type";
import { PositionType } from "../types/PositionType.type";
import { TileType } from "../types/TileType.enum";
import getOtherPlayer from "./getOtherPlayer.lib";
import getShipAtPosition from "./getShipAtPosition.lib";
import updateTile from "./updateTile.lib";

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
 * @returns {GameBoard} A new `GameBoard` object with updated defense and attack grids, reflecting the outcome of the shot. The original board is **NOT** modified.
 *
 * @example
 * // Example of hitting an opponent's ship at position (2, 3)
 * const newBoard = attemptToHitShip(gameBoard, "player1", { x: 2, y: 3 });
 * console.log(newBoard); // Prints the updated game board with hit or miss status.
 */

export default function attemptToHitShip(board: GameBoard, opponent: Player, position: PositionType): GameBoard {
    const you = getOtherPlayer(opponent)
    let boardCopy = structuredClone(board)
    const shipIndex = getShipAtPosition(boardCopy, opponent, position)

    if (shipIndex !== undefined) {
        const shipHitIndex = boardCopy[opponent].ships[shipIndex].positions.findIndex(pos => pos.x === position.x && pos.y === position.y)!
        // it hit, so update the opponent's defense map with a hit on their grid
        boardCopy = updateTile(boardCopy, opponent, "defense", position, TileType.HIT)

        // also update your opponent's attack tiles to track that you made a hit
        boardCopy = updateTile(boardCopy, you, "attack", position, TileType.HIT)

        // update the ship to be hit at the found position
        const ship = boardCopy[opponent].ships[shipIndex]

        ship.hits[shipHitIndex] = true

        if(ship.hits.every(v => v)) {
            alert(`You sun an enemy ${ship.type}!`)
        }

        if(boardCopy[opponent].ships.every(s => s.hits.every(v => v))) {
            alert("You win!")
            window.location.reload()
        }

        return boardCopy
    } else {
        // you missed, so we need to update the appropriate boards

        // update your opponent's tiles to show a miss
        boardCopy = updateTile(boardCopy, opponent, "defense", position, TileType.MISS)

        // update your attack board tiles to show a miss
        boardCopy = updateTile(boardCopy, you, 'attack', position, TileType.MISS)

        return boardCopy
    }
}