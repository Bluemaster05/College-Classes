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

function App() {
    const winner = getWinner(votes)
    const results = getVoteResults(votes)
    const [popup, setPopup] = useState<null | Candidate>(null)
    const all_candidates = candidates.map(candid => <VotedCanCard winner={false} setPopup={setPopup} candidate={candid} results={results}/>)
    const voted_candids = candidates.map(candid => <VotedCanCard canvotes={results.candidates.reduce({} => )} totalVotes={results.totalVotes} winner={winner.candidateId === candid.candidateId} candidate={candid} setPopup={setPopup} />)
    return <>
        <Header></Header>
        {/* <CandidPopUp img="./public/john-doe.webp" name="John Doe" description="lorem impson lorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impson"></CandidPopUp> */}
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
            {all_candidates}
        </section>
    </>
}

export default App
