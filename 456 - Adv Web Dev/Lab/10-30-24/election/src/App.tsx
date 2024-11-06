import { useState } from "react"
import "./App.css"
import { CandidateCard } from "./components/CandidateCard"
import { CandidPopUp } from "./components/CandidPopUp"
import { Header } from "./components/Header"
import { candidates } from "./data/mockData"
import { Candidate } from "./types/Candidate.type"
import { VotedCanCard } from "./components/votedCanCard"
import { getVoteResults,getWinner } from "./lib/votes.lib"
import { votes } from "./data/mockData"
import { Page } from "./types/Page.type"

function App() {
    const winner = getWinner(votes)
    const results = getVoteResults(votes)
    const [popup, setPopup] = useState<null | Candidate>(null)
    const all_candidates = candidates.map(candid => <CandidateCard setPopup={setPopup} candidate={candid} />)
    const voted_candids = (candidates.map(candid => <VotedCanCard canvotes={results.candidates.filter( candidResult => candidResult.candidateId === candid.candidateId)[0].votes} totalVotes={results.totalVotes} winner={winner.candidateId === candid.candidateId} candidate={candid} setPopup={setPopup} />))
    const [page, setPage] = useState<Page>("candidates")
    return <>
        <Header setPage={setPage}></Header>
        { popup && <CandidPopUp candidate={popup} setPopup={setPopup}></CandidPopUp> } 
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                fontSize: '15pt',
                fontWeight: '600'
            }}
        >Current Candidates</section>
        <section
            style={{
                display: 'flex',
                gap: '5px',
                padding: '10px',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
            {page == 'candidates' && all_candidates}
            {page == 'results' && voted_candids}
        </section>
    </>
}

export default App
