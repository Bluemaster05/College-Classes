// import { candidates, votes } from "../data/mockData";
import { Candidate } from "../types/Candidate.type";
import { Vote } from "../types/Vote.type";
import { RecordRow } from "./RecordRow";

export function RecordTable(props: {votes: Vote[], candidates: Candidate[]}) {
    
    const tableRows = props.votes.map( vote => <RecordRow vote={vote} candid={props.candidates.filter((candid => candid.candidateId === vote.candidateId))[0]}></RecordRow>)
    return <table
    style={{
        borderCollapse: 'collapse'
    }}>
        <thead>
            <tr>
                <th style={{
        border: '2px solid white',
        padding: '10px',
        paddingRight: '10px'
    }}>Voter ID</th>
                <th style={{
        border: '2px solid white',
        padding: '10px',
        paddingRight: '10px'
    }}>Voter Name</th>
                <th style={{
        border: '2px solid white',
        padding: '10px',
        paddingRight: '10px'
    }}>Candidate ID</th>
                <th style={{
        border: '2px solid white',
        padding: '10px',
        paddingRight: '10px'
    }}>Candidate Name</th>
                <th style={{
        border: '2px solid white',
        padding: '10px',
        paddingRight: '10px'
    }}>Candidate Party</th>
                <th style={{
        border: '2px solid white',
        padding: '10px',
        paddingRight: '10px'
    }}>Vote Date</th>
            </tr>
        </thead>
        <tbody>
            {tableRows}
        </tbody>
    </table>
}