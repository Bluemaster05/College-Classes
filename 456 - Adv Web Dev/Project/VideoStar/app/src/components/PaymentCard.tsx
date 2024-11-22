import { Video } from "../types/video.type";
import { PaidCover } from "./paidcover";
import removex from "../assets/x.svg"
export function PaymentCard(props: { cart: Video[], setcart: React.Dispatch<React.SetStateAction<Video[]>>,  video: Video, vidList: Video[], setVidlist: React.Dispatch<React.SetStateAction<Video[]>> | null }) {

    
    return <div className="payCardHolder" style={{
        display: 'flex',
        alignItems: 'top',
        gap: '10px'
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
                <div style={{ backgroundColor: '#2fa2f2f88', color: '#f1ddbf', position: "absolute", bottom: '20px', right: '20px', padding: '2px', borderRadius: '5px' }}>{props.video.duration.slice(-5)}</div>
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
            <div className="detailsHolder" style={{
                display: 'flex',
                flexDirection: 'column',
                // gap: '10px',
                paddingTop: '5px'
            }}>
                <h1 style={{
                    margin: '0',
                    fontSize: '20px',
                    color: '#f1ddbf',
                    fontWeight: '300',
                    width: '80%',

                }}>
                    {props.video.name}
                </h1>
                <h1 style={{
                    margin: '0',
                    fontSize: '20px',
                    color: '#f1ddbf',
                    fontWeight: '300',
                    width: '80%',

                }}>
                    ${props.video.price}
                </h1>
                <div className="remove" onClick={() => {
                    let newcart = structuredClone(props.cart)
                    let changeVideoList = structuredClone(props.vidList)
                    for (const vid of newcart){
                        if (vid.id === props.video.id){
                            newcart = newcart.filter( vid => vid.id !== props.video.id)
                        }
                    }
                    for (const vid of changeVideoList){
                        if (vid.id === props.video.id){
                            vid.inCart = false
                        }
                    }
                    props.setVidlist!(changeVideoList)
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