// import { candidates, votes } from "../data/mockData";
import { Candidate } from "../types/Candidate.type";
import { Vote } from "../types/Vote.type";
import { RecordRow } from "./RecordRow";

export function RecordTable(props: {votes: Vote[], candidates: Candidate[]}) {
    
    const tableRows = props.votes.map( vote => <RecordRow vote={vote} candid={props.candidates.filter((candid => {candid.candidateId === vote.candidateId}))[0]}></RecordRow>)
    return <table>
        <thead>
            <tr>
                <th>Voter ID</th>
                <th>Voter Name</th>
                <th>Candidate ID</th>
                <th>Candidate Name</th>
                <th>Candidate Party</th>
                <th>Vote Date</th>
            </tr>
        </thead>
        <tbody>
            {tableRows}
        </tbody>
    </table>
}