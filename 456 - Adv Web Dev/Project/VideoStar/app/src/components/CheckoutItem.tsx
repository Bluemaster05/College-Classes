import { Video } from "../types/Video.type";

export function CheckoutItem(props: { item: Video }) {
    let title = props.item.name
    if (title.length > 13) {
        title = title.slice(0, 13) + '...'
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
            fontWeight: '300'
        }}>
            {title}
        </h1>
        <h1 style={{
            margin: '0',
            padding: '0',
            fontWeight: '300'
        }}>
            ${props.item.price}
        </h1>
    </div>
}