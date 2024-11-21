import { Video } from "../types/video.type";
import { CheckoutItem } from "./CheckoutItem";

export function Checkout(props: { cart: Video[] }) {
    return <section
     style={{
        backgroundColor: '#7d928a',
        border: '2px solid black',
        borderRadius: '10px',
        color: "white"
     }}>
        <h1>Payment Summary</h1>
        {props.cart.map(vid => <CheckoutItem key={vid.id} item={vid}></CheckoutItem>)}
        <hr />
        <div>
            <h1 style={{padding: '0', margin: '0'}}>
                Subtotal
            </h1>
            <p style={{padding: '0', margin: '0'}}>
                ${(props.cart.reduce( (sum, vid) => sum + vid.price, 0)).toFixed(2)}
            </p>
        </div>
    </section>
}