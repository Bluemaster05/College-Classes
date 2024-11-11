import { Video } from "../types/video.type";
import { PaidCover } from "./paidcover";
export function VideoCard(props: { video: Video }) {
    return <>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: '250px',
                maxWidth: '425px',
                position: 'relative'
            }}>
                <PaidCover price={props.video.price}></PaidCover>
            <div className="video" style={{
                backgroundColor: '#78938a',
                display: 'flex',
                padding: '8px',
                width: 'fit-content',
            }}>
                <video crossOrigin="anonymous" style={{
                    width: '100%'
                }}>
                    <source src={props.video.url} />
                </video>
            </div>
            <div className="videoDetails">
                <h1 style={{ 
                    margin: '0', 
                    fontSize: '20px',
                    color: '#f1ddbf',
                    fontWeight: '300',
                    width: '80%'
                    }}>{props.video.name}</h1>
            </div>
        </div>
    </>
}