import { Video } from "../types/video.type";
import { PaidCover } from "./paidcover";
import removex from "../assets/x.svg"
export function PaymentCard(props: { cart: Video[], setcart: React.Dispatch<React.SetStateAction<Video[]>>,  video: Video }) {

    
    return <div style={{
        display: 'flex',
        alignItems: 'top'
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '250px',
            maxWidth: '425px',
            position: 'relative'
        }}>
            <div style={{
                position: 'relative'
            }}>
                {!props.video.isPurchased && <PaidCover price={props.video.price}></PaidCover>}
                <div className="video" style={{
                    backgroundColor: '#78938a',
                    display: 'flex',
                    padding: '8px',
                    width: 'fit-content'
                }} >
                    <video crossOrigin="anonymous" style={{
                        width: '100%'
                    }}>
                        <source src={props.video.url} />
                    </video>
                </div>
            </div>
        </div>
        <div className="videoDetails" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'initial',
            justifyContent: "space-between"
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingTop: '5px'
            }}>
                <h1 style={{
                    margin: '0',
                    fontSize: '20px',
                    color: '#f1ddbf',
                    fontWeight: '300',
                    width: '80%',
                    height: '2.4em',

                }}>
                    {props.video.name}
                </h1>
                <h1 style={{
                    margin: '0',
                    fontSize: '20px',
                    color: '#f1ddbf',
                    fontWeight: '300',
                    width: '80%',
                    height: '2.4em',

                }}>
                    ${props.video.price}
                </h1>
                <div onClick={() => {
                    let newcart = structuredClone(props.cart)
                    for (const vid of newcart){
                        if (vid.id === props.video.id){
                            newcart = newcart.filter( vid => vid.id !== props.video.id)
                        }
                    }
                    props.setcart(newcart)
                }}
                    style={{
                        display: 'flex',
                        // justifyContent: 'end'
                }}>
                    <p style={{ textAlign: 'right', padding: '0', margin: '0', color: 'red' }}>
                        Remove
                    </p>
                    <img src={removex} alt="" style={{
                        color: 'red'
                    }} />
                </div>
            </div>
        </div>
    </div>
}