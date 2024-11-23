

export function AllVideos(props: React.PropsWithChildren) {
    return <section
        style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
        <h1
            style={{
                color: 'white',
                fontWeight: '300',
            }}
        >
            All Videos
        </h1>
        <section className="reccomended"
            style={{
                display: 'flex',
                paddingRight: '30px',
                flexWrap: 'wrap',
                gap: '30px',
            }}
        >
            {props.children}
        </section>
    </section>


}