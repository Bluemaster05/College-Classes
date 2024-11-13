export function PaidCover(props: {price: number}){
    return <div
    style={{
        color: '#f1ddbf',
        backgroundColor: '#92ba9280',
        // opacity: '50%',
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '35pt',
        left: '-5px'
    }}
    >
        ${props.price}
    </div>
}