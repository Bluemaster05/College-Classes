import { Candidate } from "../types/Candidate.type";
import { Vote } from "../types/Vote.type";

export function RecordRow(props: { vote: Vote, candid: Candidate }) {

    return <tr>
        <td
            style={{
                border: '2px solid white',
                padding: '5px',
                paddingRight: '10px'
            }}>{props.vote.voterId}</td>
        <td style={{
            border: '2px solid white',
            padding: '10px',
            paddingRight: '10px'
        }}>{props.vote.voterName}</td>
        <td style={{
            border: '2px solid white',
            padding: '10px',
            paddingRight: '10px'
        }}>{props.vote.candidateId}</td>
        <td style={{
            border: '2px solid white',
            padding: '10px',
            paddingRight: '10px'
        }}>{props.candid.name}</td>
        <td style={{
            border: '2px solid white',
            padding: '10px',
            paddingRight: '10px'
        }}>{props.candid.party}</td>
        <td style={{
            border: '2px solid white',
            padding: '10px',
            paddingRight: '10px'
        }}>
            <input type="datetime-local" value={props.vote.voteDate.slice(0, 16)} readOnly title={props.vote.voteDate.slice(0, 16)}/>
            </td>
    </tr>
}