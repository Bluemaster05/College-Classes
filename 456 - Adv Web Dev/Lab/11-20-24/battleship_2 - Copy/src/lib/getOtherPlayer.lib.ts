import { Player } from "../types/PlayerType.type";

/**
 * Given a player (either "player1" or "player2"), returns the other player.
 *
 * @function getOtherPlayer
 * @param {Player} player - The player, either "player1" or "player2".
 * @returns {Player} The other player, which will be either "player1" or "player2" depending on the input.
 *
 * @example
 * // Example of getting the opponent player
 * const opponent = getOtherPlayer("player1");
 * console.log(opponent); // "player2"
 */

export default function getOtherPlayer(player: Player): Player {
    if(player === "player1") {
        return "player2"
    }
    return "player1"
}