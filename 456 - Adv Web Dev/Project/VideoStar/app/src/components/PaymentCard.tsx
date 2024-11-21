import { Video } from "../types/video.type";
import { PaidCover } from "./paidcover";
export function PaymentCard(props: { video: Video }) {
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
            justifyContent: ""
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
        </div>
    </div>
}