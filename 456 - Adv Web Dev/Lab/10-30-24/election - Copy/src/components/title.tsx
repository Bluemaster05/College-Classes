import { Page } from "../types/Page.type";

export function Title(props: {page: Page, totalVotes: number}){
    
    return <h1
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                fontSize: '15pt',
                fontWeight: '600'
            }}
        >
            {props.page === 'candidates' && 'Current Candidates'}
            {props.page === 'results' && `Total Votes: ${props.totalVotes}`}
            {props.page === 'votes' && 'Voting Records'}
        </h1>
}