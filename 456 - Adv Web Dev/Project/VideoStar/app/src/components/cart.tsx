import { PropsWithChildren } from "react";
import { Video } from "../types/video.type";

export function Cart(props: PropsWithChildren<{ cart: Video[] }>) {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }} >
        <div style={{ display: 'flex', paddingTop: '20px', gap: '10px' }}>
            <h1 style={{ margin: '0', color: 'white', fontWeight: 400 }}>Your Cart</h1>
            <div style={{
                width: '30px',
                padding: '5px',
                borderRadius: '100%',
                backgroundColor: '#78937d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white '
            }}>
                {props.cart.length}
            </div>
        </div>
        {props.cart.length === 0 && <p style={{color: "white"}}>You cart is Empty. Go Fill it!!!</p>}
        {props.children}
    </div>
}