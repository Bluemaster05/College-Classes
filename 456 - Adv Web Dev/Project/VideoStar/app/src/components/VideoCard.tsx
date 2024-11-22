import { Page } from "../types/Page.type";
import { Video } from "../types/video.type";
import { PaidCover } from "./paidcover";
import addCart from '../assets/cart-plus.svg'
import favorite from '../assets/heart.svg'
import favoriteFilled from '../assets/heart-fill.svg'
import incart from '../assets/cart-check-fill.svg'
export function VideoCard(props: { curCart: Video[], setcart: React.Dispatch<React.SetStateAction<Video[]>>, video: Video, videoList: Video[], setvideoList: React.Dispatch<React.SetStateAction<Video[] | null>>, page: React.Dispatch<React.SetStateAction<Page>>, theater: React.Dispatch<React.SetStateAction<Video | null>> }) {

    function toggleFav() {
        let changeList = structuredClone(props.videoList)
        if (!props.video.isFavorited) {
            props.video.isFavorited = true
            for (const vid of changeList) {
                if (vid.id === props.video.id) {
                    vid.isFavorited = true
                }
            }
        }
        else {
            props.video.isFavorited = false
            for (const vid of changeList) {
                if (vid.id === props.video.id) {
                    vid.isFavorited = false
                }
            }
        }
        props.setvideoList(changeList)

    }

    function addtoCart() {
        let newCart = structuredClone(props.curCart)
        let changeList = structuredClone(props.videoList)
        if (!newCart.find(vid => vid.id === props.video.id)) {
            newCart.push(props.video)
        }
        props.setcart(newCart)
        if (!props.video.isFavorited) {
            props.video.inCart = true
            for (const vid of changeList) {
                if (vid.id === props.video.id) {
                    vid.inCart = true
                }
            }
        }
        props.setcart(newCart)
        props.setvideoList(changeList)
    }



    return <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '250px',
            maxWidth: '425px',
            position: 'relative'
        }}>
            <div className="videoC" style={{
                position: 'relative'
            }}>
                {!props.video.isPurchased && <PaidCover price={props.video.price}></PaidCover>}
                <div style={{ backgroundColor: '#2fa2f2f88', color: '#f1ddbf', position: "absolute", bottom: '20px', right: '20px', padding: '2px', borderRadius: '5px' }}>{props.video.duration.slice(-5)}</div>
                <div className="videoC" style={{
                    backgroundColor: '#78938a',
                    display: 'flex',
                    padding: '8px',
                    width: 'fit-content'
                }} onClick={() => {
                    if (props.video.isPurchased) {
                        props.page('theater')
                        props.theater(props.video)
                    }
                }} >
                    <video crossOrigin="anonymous" style={{
                        width: '100%'
                    }}>
                        <source src={props.video.url} />
                    </video>
                </div>
            </div>
            <div className="videoDetails" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-between"
            }}>
                <h1 style={{
                    margin: '0',
                    fontSize: '20px',
                    color: '#f1ddbf',
                    fontWeight: '300',
                    width: '80%',
                    height: '2.4em',

                }} className="vidTitle" onClick={() => {
                    if (props.video.isPurchased) {
                        props.page('theater')
                        props.theater(props.video)
                    }
                }}>
                    {props.video.name}
                </h1>
                {!props.video.isPurchased && props.video.inCart && <img className="push" src={incart} alt="In cart" onClick={addtoCart} style={{ alignSelf: "flex-end" }} />}
                {!props.video.isPurchased && !props.video.inCart && <img src={addCart} className="push" alt="Add to Cart" onClick={addtoCart} style={{ alignSelf: "flex-end" }} />}
                {props.video.isPurchased && !props.video.isFavorited && <img src={favorite} className="push" alt="Favorite" style={{ alignSelf: "flex-end" }} onClick={toggleFav} />}
                {props.video.isPurchased && props.video.isFavorited && <img src={favoriteFilled} className="push" alt="Favorited" style={{ alignSelf: "flex-end" }} onClick={toggleFav} />}
            </div>
        </div>
    </>
}