// import { candidates } from "../data/mockData"
import { Candidate } from "../types/Candidate.type"
import { Button } from "./button"

export function CandidPopUp(props: { candidate: Candidate, setPopup: React.Dispatch<React.SetStateAction<Candidate | null>> }) {

    return <>
        <section 
            style={{
                backgroundColor: 'black',
                border: '2px solid white',
                borderRadius: '15px',
                width: '50rem',
                position: 'absolute',
                left: 'center',
                top: '65px'
            }}>
            <div style={{
                display: 'flex',
                justifyContent: 'right',
                paddingTop: '15px',
                paddingRight: '15px',

            }}>
                <Button name='Close' funcCall={() => { props.setPopup(null)}}></Button>
            </div>
            <div
                style={{
                    display: 'flex',
                    padding: '20px',
                    gap: '15px',
                    paddingTop: '0'
                }}>
                <div
                    style={{
                        width: '169px',
                        height: '190px',
                        backgroundColor: 'green',
                        backgroundImage: `url(${props.candidate.pictureUrl})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '10px'
                        

                    }}></div>
                <div style={{
                    width: '70%'
                }}>
                    <h1 style={{
                        padding: '0',
                        margin: '0'
                    }}>{props.candidate.name}</h1>
                    <p style={{
                        padding: '0',
                        margin: '0'
                    }}>{props.candidate.description}</p>
                </div>
            </div>
        </section>
    </>
}