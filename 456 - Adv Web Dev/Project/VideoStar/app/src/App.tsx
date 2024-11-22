import { useEffect, useState } from "react"
import { AllVideos } from "./components/AllVideos"
import { Header } from "./components/header"
import { ReccomendedVideos } from "./components/reccomended"
import { VideoCard } from "./components/VideoCard"
import { Video } from "./types/video.type"
import { PaymentCard } from "./components/PaymentCard"
import { Page } from "./types/Page.type"
import { SortToggle } from "./components/SortToggle"
import { Theater } from "./components/Theater"
import { OpenFilter } from "./components/openFilter"
import { Filter } from "./types/filter.type"
import { sortNFilter } from "./lib/sortNFilter.lib"
import { Cart } from "./components/cart"
import { Checkout } from "./components/Checkout"
import loading from './assets/loading.gif'
function App() {
  const [currentCart, setCurrentCart] = useState<Array<Video>>([])
  const [videoList, setVideoList] = useState<Array<Video> | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [filterToggle, setFilterToggle] = useState<boolean>(false)
  const [SortSettings, setSortSettings] = useState<Filter>({
    title: '',
    min: 0,
    max: 100,
    paidvFree: 'all',
    favorites: false,
    dur: 'none',
    sort: 'none',
  })

  function toggleFilter() {
    if (filterToggle === false) {
      setFilterToggle(true)
    } else {
      setFilterToggle(false)
    }
  }
  useEffect(() => {
    async function getVideos() {
      setIsLoading(true)
      const videos = await fetch('https://videostar.dacoder.io/')
      const parsedVideos = (await videos.json()).map((video: Video) => {
        return {
          ...video,
          isFavorited: false,
          inCart: false,
        }
      }) as Video[]
      setVideoList(parsedVideos)
      setIsLoading(false)
    }
    getVideos()
  }, [])
  const [page, setPage] = useState<Page>('home')
  const [theaterVideo, setTheaterVideo] = useState<Video | null>(null)

  return (<>
    <Header cart={currentCart} page={setPage}></Header>
    <main
      style={{
        paddingLeft: '30px',
        paddingBottom: '30px'
      }}
    >
      {page === 'checkout' && videoList &&
        <div className="checkoutHolder" style={{
          display: 'flex',
          position: 'relative'
        }}>
          <Checkout VidList={videoList} setCart={setCurrentCart} setVidList={setVideoList} cart={currentCart}></Checkout>
          <Cart cart={currentCart}>
            {currentCart.map(vid => <PaymentCard setVidlist={setVideoList} vidList={videoList} key={vid.id} setcart={setCurrentCart} cart={currentCart} video={vid} ></PaymentCard>)}
          </Cart>
        </div>}
      {page === 'theater' && <Theater reccomended={videoList?.filter(vid => vid.id < 4).map(vid => <VideoCard key={vid.id} videoList={videoList} video={vid} theater={setTheaterVideo} setvideoList={setVideoList} setcart={setCurrentCart} curCart={currentCart} page={setPage} ></VideoCard>)} video={theaterVideo}></Theater>}
      {isLoading && <img src={loading}></img>}
      {videoList && page === 'home' && <ReccomendedVideos videos={videoList?.filter(vid => vid.id < 4).map(vid => <VideoCard key={vid.id} videoList={videoList} video={vid} theater={setTheaterVideo} setvideoList={setVideoList} setcart={setCurrentCart} curCart={currentCart} page={setPage} ></VideoCard>)} ></ReccomendedVideos>}
      {page === 'home' && <div style={{display: 'flex', justifyContent: 'end'}}><SortToggle func={toggleFilter}></SortToggle></div>}
      {filterToggle && page === 'home' &&
        <div className="filterHolder" style={{ display: 'flex', paddingTop: '20px', paddingRight: '20px' }}>
          <OpenFilter sort={setSortSettings} settings={SortSettings}></OpenFilter>
        </div>}
      {page === 'home' && <AllVideos>
        {isLoading && <img src={loading}></img>}
        {videoList && (<>{sortNFilter(videoList, SortSettings).map(video => <VideoCard setcart={setCurrentCart} curCart={currentCart} videoList={videoList} setvideoList={setVideoList} key={video.id} video={video} page={setPage} theater={setTheaterVideo}></VideoCard>)}</>)
        }
      </AllVideos>}

    </main>
  </>
  )
}

export default App
