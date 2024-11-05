import "./App.css"
import { CandidateCard } from "./components/CandidateCard"
import { CandidPopUp } from "./components/CandidPopUp"
import { Header } from "./components/Header"
import { candidates } from "./data/mockData"

function App() {
    const all_candidates = candidates.map(candid => <CandidateCard CanName={candid.name} party={candid.party} canId={candid.candidateId} photo={candid.pictureUrl}></CandidateCard>)
    return <>
        <Header></Header>
        <CandidPopUp img="./public/john-doe.webp" name="John Doe" description="lorem impson lorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impsonlorem impson"></CandidPopUp>
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
