

export function ReccomendedVideos(props: { videos: Array<JSX.Element> | null | undefined}) {
    return <>
        <h1
            style={{
                color: 'white',
                fontWeight: '300',
            }}
        >
            Picked Out Just For You
        </h1>
        <section className="reccomended"
            style={{
                display: 'flex',
                paddingRight: '30px',
                flexWrap: 'wrap',
                gap: '30px',
            }}
        >
            {props.videos}
        </section>
    </>


}