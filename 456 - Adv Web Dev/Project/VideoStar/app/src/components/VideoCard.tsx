import { Video } from "../types/video.type";

export function VideoCard(props: {video: Video }){
    return<>
    <div
    style={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <div className="video" style={{
    
        }}>
            <video src="">
                <source src={props.video.url}/>
            </video>
        </div>
        <div className="videoDetails">
            <h1 style={{ margin: '0', fontSize: '20px'}}>{props.video.name}</h1>
        </div>
    </div>
    </>
}