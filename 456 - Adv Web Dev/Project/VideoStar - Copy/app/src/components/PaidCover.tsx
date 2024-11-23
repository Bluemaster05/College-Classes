export function PaidCover(props: {price: number}){
    return <div
    style={{
        color: '#f1ddbf',
        backgroundColor: '#92ba9280',
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '35pt',
        left: '0px'
    }}
    >
        ${props.price}
    </div>
}