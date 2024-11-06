import { Candidate } from "../types/Candidate.type";
import { Vote } from "../types/Vote.type";

export function RecordRow(props: {vote: Vote, candid: Candidate}){
    
    return <tr>
        <td>{props.vote.voterId}</td>
        <td>{props.vote.voterName}</td>
        <td>{props.vote.candidateId}</td>
        <td>{props.candid.name}</td>
        <td>{props.candid.party}</td>
        <td>{props.vote.voteDate}</td>
    </tr>
}