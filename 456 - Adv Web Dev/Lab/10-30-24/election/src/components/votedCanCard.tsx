import { Candidate } from "../types/Candidate.type";
import { WinnerBox } from "./winnerbox";
// import { Vote } from "../types/Vote.type";

export function VotedCanCard(props: { setPopup: React.Dispatch<React.SetStateAction<Candidate | null>>, candidate: Candidate, winner: boolean, canvotes: number, totalVotes: number }) {

    let background_color = '#2d2d2d'
    if (props.winner) {
        background_color = 'green'
    }
    return <>
        <div onClick={() => {
            props.setPopup(props.candidate)
        }}
            style={{
                backgroundColor: "#3e3e3e",
                width: '200px',
                height: '300px',
                borderRadius: '10px',
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                paddingTop: '5px',
                position: 'relative'
            }}>
                {props.winner && <WinnerBox></WinnerBox>} 
            <div
                style={{
                    width: '190px',
                    height: '24%',
                    backgroundColor: background_color,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '7px'
                }}>
                <h1>{props.candidate.name}</h1>
                <p
                    style={{
                        padding: '0',
                        margin: '0',
                    }}>{props.candidate.party}</p>
            </div>
            <div style={{
                // backgroundColor: 'Green',
                backgroundImage: `url(${props.candidate.pictureUrl})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '70%',
                width: '95%',
                borderRadius: '10px'

            }}>
                {/* <img src={props.photo} alt="" /> */}
                <div style={{
                    backgroundColor: 'red',
                    border: '2px solid white',
                    width: '35px',
                    height: '35px',
                    borderRadius: '100%',
                    marginTop: '135px',
                    marginLeft: '140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>{props.candidate.candidateId}</div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'

            }}>
                <div
                    style={{
                        display: 'flex',
                        width: '190px',
                    }}>
                    <div style={{
                        backgroundColor: '#1b65d2',
                        height: '5px',
                        width: `${100 * (props.canvotes / props.totalVotes)}%`,
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',

                    }}></div>
                    <div style={{
                        backgroundColor: 'white',
                        height: '5px',
                        width: `${100 * (1 - (props.canvotes / props.totalVotes))}%`,
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                    }}></div>

                </div>
                <div style={{
                    padding:'10px',
                }}>
                    {props.canvotes}/{props.totalVotes}
                </div>
            </div>
        </div>
    </>
}