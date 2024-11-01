import "./App.css"
import { CandidateCard } from "./components/CandidateCard"
import { Header } from "./components/Header"
import { candidates } from "./data/mockData"

function App() {
    const all_candidates = []
    for (let candid of candidates){
        all_candidates.push(<CandidateCard CanName={candid.name} party={candid.party} votes={5} photo={candid.pictureUrl}></CandidateCard>)
    }
    return <>
        <Header></Header>
        <section
        style={{
            display:'flex',
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
