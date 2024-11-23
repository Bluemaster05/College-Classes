// Logan Gardner
// Adv Web Development
// 11/22/24
// Last Fix: Spelling error -> Favorites! :)
import { useEffect, useState } from "react"
import { AllVideos } from "./components/AllVideos"
import { Header } from "./components/Header"
import { ReccomendedVideos } from "./components/ReccomendedVideos"
import { VideoCard } from "./components/VideoCard"
import { Video } from "./types/Video.type"
import { PaymentCard } from "./components/PaymentCard"
import { Page } from "./types/Page.type"
import { SortToggle } from "./components/SortToggle"
import { Theater } from "./components/Theater"
import { OpenFilter } from "./components/OpenFilter"
import { Filter } from "./types/Filter.type"
import { sortNFilter } from "./lib/sortNFilter.lib"
import { Cart } from "./components/Cart"
import { Checkout } from "./components/Checkout"
import loading from './assets/loading.gif'
function App() {
  const [videoList, setVideoList] = useState<Array<Video> | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [filterToggle, setFilterToggle] = useState<boolean>(false)
  const [page, setPage] = useState<Page>('home')
  const [theaterVideo, setTheaterVideo] = useState<Video | null>(null)
  const [sortSettings, setSortSettings] = useState<Filter>({
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
      setVideoList(prevVideoList => {
        if (!prevVideoList) {
          return parsedVideos
        }
        return prevVideoList
      })
      setIsLoading(false)
    }
    getVideos()
  }, [])

  return (<>
    <Header vidList={videoList} page={setPage}></Header>
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
          <Checkout VidList={videoList} setVidList={setVideoList}></Checkout>
          <Cart vidList={videoList}>
            {videoList.filter(vid => vid.inCart).map(vid => <PaymentCard setVidlist={setVideoList} vidList={videoList} key={vid.id} video={vid} ></PaymentCard>)}
          </Cart>
        </div>}
      {page === 'theater' && <Theater key={theaterVideo?.id} reccomended={videoList?.filter(vid => vid.id < 4).map(vid => <VideoCard key={vid.id} videoList={videoList} video={vid} theater={setTheaterVideo} setvideoList={setVideoList} page={setPage} ></VideoCard>)} video={theaterVideo}></Theater>}
      {isLoading && <img src={loading}></img>}
      {videoList && page === 'home' && <ReccomendedVideos videos={videoList?.filter(vid => vid.id < 4).map(vid => <VideoCard key={vid.id} videoList={videoList} video={vid} theater={setTheaterVideo} setvideoList={setVideoList} page={setPage} ></VideoCard>)} ></ReccomendedVideos>}
      {page === 'home' && <div style={{ display: 'flex', justifyContent: 'end' }}><SortToggle func={toggleFilter}></SortToggle></div>}
      {filterToggle && page === 'home' &&
        <div className="filterHolder" style={{ display: 'flex', paddingTop: '20px', paddingRight: '20px' }}>
          <OpenFilter sort={setSortSettings} settings={sortSettings}></OpenFilter>
        </div>}
      {page === 'home' && <AllVideos>
        {isLoading && <img src={loading}></img>}
        {videoList && (<>{sortNFilter(videoList, sortSettings).map(video => <VideoCard videoList={videoList} setvideoList={setVideoList} key={video.id} video={video} page={setPage} theater={setTheaterVideo}></VideoCard>)}</>)
        }
      </AllVideos>}

    </main>
  </>
  )
}

export default App
