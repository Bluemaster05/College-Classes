export function FiltTitle(props: { title: string }) {
    return <div
        style={{
            padding: '5px 0',
            // paddingLeft: '60px',
            // paddingRight: '60px',
            width: '100%', 
            backgroundColor: '#82a38a',
            borderRadius: '5px',
            textAlign: 'center'
        }}
    >
        <h1
            style={{
                padding: '0',
                margin: '0',
                color: '#f1ddbf',
                fontWeight: '400',
                fontSize: '12pt'
            }}
        >{props.title}</h1>
    </div>
}