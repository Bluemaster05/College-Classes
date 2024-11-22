import { useEffect, useRef } from "react";
import { Video } from "../types/Video.type";
import { ReccomendedVideos } from "./ReccomendedVideos";

export function Theater(props: { video: Video | null, reccomended: JSX.Element[] | null | undefined}) {
    const videoRef = useRef<null | HTMLVideoElement>(null)

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [videoRef.current])


    return <section className="theater" style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '40px'
    }}>
        <div className="vidHolder" style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div className="video" style={{
                backgroundColor: '#78938a',
                display: 'flex',
                padding: '8px',
                width: '65vw',
                marginRight: '40px'
            }}>
                <video ref={videoRef} crossOrigin="anonymous" controls style={{
                    width: '100%'
                }}>
                    {props.video && <source src={props.video.url} />}
                </video>
            </div>
            <div className="videoDetails">
                <h1 style={{
                    margin: '0',
                    paddingTop: '20px',
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <ReccomendedVideos videos={props.reccomended}></ReccomendedVideos>
            </div>
        </div>
    </section>
}