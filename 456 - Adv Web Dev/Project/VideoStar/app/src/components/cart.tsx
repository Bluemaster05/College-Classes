import { Children, PropsWithChildren } from "react";

export function Cart(props: PropsWithChildren) {
    return <>
        <div style={{display: 'flex'}}>
            <h1 style={{ margin: '0'}}>Your Cart</h1>
            <div style={{
                width: 'fit-content',
                padding: '5px',
                borderRadius: '100%',
                backgroundColor: '#78937d'
            }}>
                3
            </div>
        </div>
        {props.children}
    </>
}