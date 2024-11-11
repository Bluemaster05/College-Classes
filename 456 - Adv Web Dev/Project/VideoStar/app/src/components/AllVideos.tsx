import { VideoCard } from "./VideoCard";

export function AllVideos(props: {videos: Array<JSX.Element>}) {
    return<>
    <h1
    style={{
        color: 'white',
        fontWeight: '300',
        // paddingLeft: '30px'
    }}
    >
        All Videos
    </h1>
    <section className="reccomended"
    style={{
        // display: 'grid',
        // gridTemplateColumns: '1fr 1fr 1fr 1fr',
        // gridTemplateRows: '1fr 1fr',
        // columnGap: '30px',
        
        display: 'flex',
        // justifyContent: 'space-between',
        paddingRight: '30px',
        flexWrap: 'wrap',
        gap: '30px',
    }}
    >
        {props.videos}
    </section>
    </>
    
    
}