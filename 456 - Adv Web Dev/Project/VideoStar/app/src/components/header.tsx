import cart from '../assets/cart.svg'
import { Page } from '../types/Page.type'
import { Video } from '../types/Video.type'
export function Header(props: { page: React.Dispatch<React.SetStateAction<Page>>, vidList: Video[] | null }) {
    return <>
        <header

            style={{
                backgroundColor: '#92ba92',
                height: '70px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                paddingLeft: '30px'
            }}>
            <h1 className="videoStar" style={{
                margin: '0',
                color: '#525e75',
                fontStyle: 'italic'
            }} onClick={() => props.page('home')}
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
                    justifyContent: 'center',
                    color: 'white'
                }}>
                    {props.vidList && props.vidList?.filter(vid => vid.inCart).length}
                </div>
                <img src={cart} alt="Cart" className="cart" onClick={() => props.page('checkout')} />
            </div>
        </header>
    </>
}