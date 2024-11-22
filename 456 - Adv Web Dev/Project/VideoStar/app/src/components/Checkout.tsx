import { Video } from "../types/video.type";
import { CheckoutItem } from "./CheckoutItem";

export function Checkout(props: { cart: Video[], setCart: React.Dispatch<React.SetStateAction<Video[]>>, VidList: Video[], setVidList: React.Dispatch<React.SetStateAction<Video[] | null>> }) {
    return <section
        className="checkout"
        style={{
            backgroundColor: '#78938a',
            border: '2px solid black',
            borderRadius: '10px',
            color: "white",
            width: '300px',
            // padding: '20px',
            height: 'fit-content',
            // position: 'fixed',
            right: '20px',
            top: '110px'
        }}>
        <h1 style={{ margin: '0', fontWeight: '400' }}>Payment Summary</h1>
        {props.cart.map(vid => <CheckoutItem key={vid.id} item={vid}></CheckoutItem>)}
        <hr style={{ border: '1px solid black' }} />
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <h1 style={{ padding: '0', margin: '0', fontWeight: '400' }}>
                Subtotal
            </h1>
            <p style={{ padding: '0', margin: '0', fontSize: '16pt' }}>
                ${(props.cart.reduce((sum, vid) => sum + vid.price, 0)).toFixed(2)}
            </p>
        </div>
        <div onClick={() => {
            let newVidList = structuredClone(props.VidList)
            let newcart = structuredClone(props.cart)
            for (const item of newcart) {
                for (const vid of newVidList) {
                    if (vid.id === item.id) {
                        vid.isPurchased = true
                        vid.price = 0
                        vid.inCart = false
                    }
                }
            }
            newcart = []
            props.setVidList(newVidList)
            props.setCart(newcart)
        }
        } className="checkoutButton" style={{
            backgroundColor: "#f1ddbf",
            border: '1px solid black',
            borderRadius: '5px',
            marginTop: '20px'
        }}  >
            <p style={{
                color: 'black',
                fontWeight: '700',
                fontSize: '18pt',
                textAlign: "center",
                padding: '0',
                margin: '0'
            }}>Checkout</p>
        </div>
    </section>
}