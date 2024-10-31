export function Header() {
    return <>
    <header style={{
        display: "flex",
        backgroundColor: "lightgray",
        alignItems: "center"
    }}>
        <h1>Current Canda</h1>
        <nav>
            <button>View Candidates</button>
            <button>View Results</button>
            <button>View Votes</button>
        </nav>
    </header>
    </>
}