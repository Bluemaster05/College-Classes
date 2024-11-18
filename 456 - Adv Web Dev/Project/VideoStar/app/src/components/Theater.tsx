import { Video } from "../types/video.type";
import { ReccomendedVideos } from "./reccomended";
import { VideoCard } from "./VideoCard";

export function Theater(props: { video: Video | null }) {
    return <section className="theater" style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '40px'

    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div className="video" style={{
                backgroundColor: '#78938a',
                display: 'flex',
                padding: '8px',
                width: '65vw',
            }}>
                <video crossOrigin="anonymous" controls style={{
                    width: '100%'
                }}>
                    {props.video && <source src={props.video.url} />}
                </video>
            </div>
            <div className="videoDetails">
                <h1 style={{
                    margin: '0',
                    paddingTop: '20px',
                    fontSize: '25pt',
                    color: '#f1ddbf',
                    fontWeight: '300',
                    width: '80%',
                    height: '2.4em'
                }}>{props.video?.name}</h1>
            </div>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }}>
            <div style={{
                width: '25vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <ReccomendedVideos videos={[<VideoCard page={() => { }} theater={() => { }} video={{
                    "id": 0,
                    "name": "A Girl Taking a Selfie With Her Boyfriend",
                    "isFree": false,
                    "isPurchased": false,
                    "duration": "00:00:16.93",
                    "size": 7990219,
                    "price": 7.62,
                    "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
                }} />]}></ReccomendedVideos>
            </div>
        </div>
    </section>
}