import { Button } from "./button"
export function Header() {
    return <>
        <header style={{
            display: "flex",
            backgroundColor: "#3f3f3f",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "10px"
        }}>
            <h1 style={{
                padding: "10px",
                fontSize: "15pt"
            }}>Current Candaidates</h1>
            <nav style={{
                display: "flex",
                gap: '5px'
            }}>
                <Button name="View Candidates" funcCall={() => { }}></Button>
                <Button name="View Results" funcCall={() => { }}></Button>
                <Button name="View Votes" funcCall={() => { }}></Button>
            </nav>
        </header>
    </>
}