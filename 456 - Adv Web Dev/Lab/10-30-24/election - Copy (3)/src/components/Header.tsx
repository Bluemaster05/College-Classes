
// import React from "react"
import { Page } from "../types/Page.type"
import { Button } from "./button"

export function Header(props: {setPage: React.Dispatch<React.SetStateAction<Page>>}) {
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
                <Button name="View Candidates" funcCall={() => {props.setPage("candidates")}}></Button>
                <Button name="View Results" funcCall={() => {props.setPage("results")}}></Button>
                <Button name="View Votes" funcCall={() => {props.setPage("votes")}}></Button>
            </nav>
        </header>
    </>
}