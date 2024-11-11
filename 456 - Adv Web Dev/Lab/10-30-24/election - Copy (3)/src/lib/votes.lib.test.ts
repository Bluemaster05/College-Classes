import { describe, expect, test } from "vitest"
import { getVoteResults, getWinner } from "./votes.lib"

describe("getVoteResults()", () => {
    test("Test1", () => {
        expect(getVoteResults([
            { voterId: 1, voterName: "Alice", candidateId: 101, voteDate: "2024-10-10T08:30:00Z" },
            { voterId: 2, voterName: "Bob", candidateId: 101, voteDate: "2024-10-10T08:45:00Z" },
            { voterId: 3, voterName: "Charlie", candidateId: 102, voteDate: "2024-10-11T09:00:00Z" }
        ])).toEqual(
            {
                totalVotes: 3,
                candidates: [
                    { candidateId: 101, votes: 2 },
                    { candidateId: 102, votes: 1 }
                ]
                ,
            })
    })
})

describe("getWinner()", () => {
    test("Test1", () => {
        expect(getWinner([
            { voterId: 1, voterName: "Alice", candidateId: 101, voteDate: "2024-10-10T08:30:00Z" },
            { voterId: 3, voterName: "Charlie", candidateId: 102, voteDate: "2024-10-11T09:00:00Z" },
            { voterId: 2, voterName: "Bob", candidateId: 101, voteDate: "2024-10-10T08:45:00Z" }
        ])).toEqual(
            {
                candidateId: 101,
                receivedVotes: 2,
                totalVotes: 3
            })
    })
    test("Test for change in winner", () => {
        expect(getWinner([
            { voterId: 1, voterName: "Alice", candidateId: 101, voteDate: "2024-10-10T08:30:00Z" },
            { voterId: 3, voterName: "Charlie", candidateId: 102, voteDate: "2024-10-11T09:00:00Z" },
            { voterId: 2, voterName: "Bob", candidateId: 101, voteDate: "2024-10-10T08:45:00Z" },
            { voterId: 4, voterName: "Charlie", candidateId: 102, voteDate: "2024-10-11T09:00:00Z" },
            { voterId: 5, voterName: "Charliee", candidateId: 102, voteDate: "2024-10-11T09:00:00Z" },
            { voterId: 6, voterName: "Chairlie", candidateId: 102, voteDate: "2024-10-11T09:00:00Z" }
        ])).toEqual(
            {
                candidateId: 102,
                receivedVotes: 4,
                totalVotes: 6
            })
    })
    test("Test for change in winner", () => {
        expect(() => getWinner([])).toThrow(
            new Error("No Votes")
        )
    })
})