import { Page } from "../types/page.type";
import cart from '../assets/cart.svg'
export function Header(props: {page: React.Dispatch<React.SetStateAction<Page>>}){
    return <>
        <header
        onClick={() => props.page('home')}
        style={{
            backgroundColor: '#92ba92',
            height: '70px',
            display: 'flex',
            justifyContent:'space-between',
            alignItems: 'center',
            padding: '10px',
            paddingLeft: '30px'
            }}>
            <h1 style={{
                margin: '0',
                color: '#525e75',
                fontStyle: 'italic'
            }}
            >VideoStar</h1>
            <div style={{
                display: 'flex',
                gap: '5px'
            }}>
                <div style={{
                    backgroundColor: '#78937d',
                    borderRadius: '100%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    1
                </div>
                <img src={cart} alt="" />
            </div>
        </header>
    </>
}