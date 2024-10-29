export function Card(props: {text?: string; size?: number }) {
    return(
        <div style={{
            width: "100px",
            height: "100px",
            background: "gray",
            borderRadius: '2%'
        }}>
            <h1 style={{
                fontSize: props.size + 'px'
            }}>{props.text}</h1>
        </div>
    )
}