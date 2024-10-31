import { candidates } from "../data/mockData"
import { CandidateResult } from "../types/CandidateResult.type"
import { Results } from "../types/Results.type"
import { Vote } from "../types/Vote.type"
import { Winner } from "../types/Winner.type"

/**
 * Processes a list of votes and returns the total votes and candidate results.
 *
 * This function calculates the total number of votes and aggregates the votes for each candidate,
 * returning a `Results` object containing the total votes and an array of `CandidateResult` objects,
 * each indicating a candidate's ID and the number of votes they received.
 *
 * @param {Vote[]} votes - An array of `Vote` objects representing each vote cast. Each `voteDate` is a full datetime string.
 * @returns {Results} An object representing the aggregated voting results with total votes and per-candidate vote counts.
 *
 * @example
 * // Sample votes array
 * const votes = [
 *   { voterId: 1, voterName: "Alice", candidateId: 101, voteDate: "2024-10-10T08:30:00Z" },
 *   { voterId: 2, voterName: "Bob", candidateId: 101, voteDate: "2024-10-10T08:45:00Z" },
 *   { voterId: 3, voterName: "Charlie", candidateId: 102, voteDate: "2024-10-11T09:00:00Z" },
 * ];
 *
 * // Get the results
 * console.log(getVoteResults(votes));
 * 
 * // Expected output:
 * // {
 * //   totalVotes: 3,
 * //   candidates: [
 * //     { candidateId: 101, votes: 2 },
 * //     { candidateId: 102, votes: 1 }
 * //   ]
 * // }
 */
export function getVoteResults(votes: Vote[]): Results {
    let total_votes = 0
    let candidates_results:Array<CandidateResult> = []
    let seenIds:Array<number> = []

    for (let vote of votes) {
        total_votes++
        if (!seenIds.includes(vote.candidateId)) {
            seenIds.push(vote.candidateId)
            candidates_results.push({
                candidateId: vote.candidateId,
                votes: 1
            })
        } else {
            let result = candidates_results.find(result => result.candidateId === vote.candidateId)!
            result.votes++
        }
    }
    return {
        totalVotes: total_votes,
        candidates: candidates_results
    }
}

/**
 * Determines the candidate with the most votes from a list of votes.
 *
 * This function calculates the vote results for each candidate and returns a `Winner` object
 * containing the ID of the candidate who received the most votes, the number of votes they received,
 * and the total number of votes cast.
 *
 * @param {Vote[]} votes - An array of `Vote` objects representing each vote cast. Each `voteDate` is a full datetime string.
 * @returns {Winner} An object containing the winning candidate's ID, their vote count, and the total number of votes cast.
 * @throws {Error} Throws an error if the `votes` array is empty.
 * 
 * @example
 * // Sample votes array
 * const votes = [
 *   { voterId: 1, voterName: "Alice", candidateId: 101, voteDate: "2024-10-10T08:30:00Z" },
 *   { voterId: 2, voterName: "Bob", candidateId: 101, voteDate: "2024-10-10T08:45:00Z" },
 *   { voterId: 3, voterName: "Charlie", candidateId: 102, voteDate: "2024-10-11T09:00:00Z" },
 * ];
 *
 * // Get the winner
 * console.log(getWinner(votes));
 * 
 * // Expected output:
 * // {
 * //   candidateId: 101,
 * //   receivedVotes: 2,
 * //   totalVotes: 3
 * // }
 */
export function getWinner(votes: Vote[]): Winner {
    if (votes.length === 0){
        throw Error("No Votes")
    }
    const countedResults = getVoteResults(votes)

    let currentWinner = countedResults.candidates[0]
    for (let canResult of countedResults.candidates){
        if (canResult.votes > currentWinner.votes){
            currentWinner = canResult
        } 
    }
    
    return {
        candidateId: currentWinner.candidateId,
        receivedVotes: currentWinner.votes,
        totalVotes: countedResults.totalVotes
    }
}
