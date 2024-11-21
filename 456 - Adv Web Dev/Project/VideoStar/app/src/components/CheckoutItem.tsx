import { Video } from "../types/video.type";

export function CheckoutItem(props: { item: Video }) {
    let title = props.item.name
    if (title.length > 10){
        title = title.slice(0, 10) + '...'
    }
    return <div
    style={{
        display: 'flex',
        justifyContent: 'space-between'
    }}
    >
        <h1 style={{
            margin: '0',
            padding: '0',
        }}>
            {title}
        </h1>
        <h1 style={{
            margin: '0',
            padding: '0',
        }}>
            {props.item.price}
        </h1>
    </div>
}