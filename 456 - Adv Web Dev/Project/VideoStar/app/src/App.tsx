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

// async function getVideos(){
//   const videos =  await fetch('https://videostar.dacoder.io/')
//   const parsedVideos = await videos.json()
//   return parsedVideos
// }

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

  // const [sortedVideos, setSortedVideos] = useState<Video[] | null>(null)


  function toggleFilter() {
    if (filterToggle === false) {
      setFilterToggle(true)
    } else {
      setFilterToggle(false)
    }
  }

  // toggleFilter
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
  
  // useEffect(() => {
  //   () => {
  //     setSortedVideos(sortNFilter(videoList, SortSettings))

  //   }
  // }, [videoList, SortSettings])

  // {videoList && setSortedVideos(sortNFilter(videoList, SortSettings))}

  //   const allvideos = videoList!.map( video => <VideoCard video={video}></VideoCard>)

  // const allVideos = videoList!.map( (video: Video) => <VideoCard video={video}></VideoCard>)
  const [page, setPage] = useState<Page>('home')
  const [theaterVideo, setTheaterVideo] = useState<Video | null>(null)

  return (<>
    <Header cart={currentCart} page={setPage}></Header>
    <main
      style={{
        paddingLeft: '30px'
      }}
    >
      <Checkout cart={currentCart}></Checkout>
      { page === 'checkout' && videoList && <Cart cart={currentCart}>
        { currentCart.map( vid => <PaymentCard key={vid.id} setcart={setCurrentCart} cart={currentCart} video={vid} ></PaymentCard>)}
      </Cart>}
      {page === 'theater' && <Theater video={theaterVideo}></Theater>}
      {isLoading && <div>Loading...</div>}
      { videoList && page === 'home' && <ReccomendedVideos videos={videoList?.filter(vid => vid.id < 4).map(vid => <VideoCard key={vid.id} videoList={videoList} video={vid} theater={setTheaterVideo} setvideoList={setVideoList} setcart={setCurrentCart} curCart={currentCart} page={setPage} ></VideoCard>)} ></ReccomendedVideos>}
      {page === 'home' &&  <SortToggle func={toggleFilter}></SortToggle>}
      {filterToggle && page === 'home' && <OpenFilter sort={setSortSettings} settings={SortSettings}></OpenFilter>}
      {page === 'home' && <AllVideos>
        {isLoading && <div>Loading...</div>}
        {videoList && (<>{sortNFilter(videoList, SortSettings).map(video => <VideoCard setcart={setCurrentCart} curCart={currentCart} videoList={videoList} setvideoList={setVideoList} key={video.id} video={video} page={setPage} theater={setTheaterVideo}></VideoCard>)}</>)
        }
      </AllVideos>}
    {/* {page === "checkout" && } */}

    </main>
  </>
  )
}

export default App
