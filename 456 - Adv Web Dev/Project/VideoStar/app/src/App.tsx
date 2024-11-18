import { useEffect, useState } from "react"
import { AllVideos } from "./components/AllVideos"
import { Header } from "./components/header"
import { ReccomendedVideos } from "./components/reccomended"
import { VideoCard } from "./components/VideoCard"
import { Video } from "./types/video.type"
import { PaymentCard } from "./components/PaymentCard"
import { Page } from "./types/page.type"
import { SortToggle } from "./components/SortToggle"

// async function getVideos(){
//   const videos =  await fetch('https://videostar.dacoder.io/')
//   const parsedVideos = await videos.json()
//   return parsedVideos
// }

function App() {
  const [videoList, setVideoList] = useState<Array<Video> | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [filterToggle, setFilterToggle] = useState<boolean>(false)

  function toggleFilter() {
    if (filterToggle === false){
      setFilterToggle(true)
    } else {
      setFilterToggle(false)
    }
  }

  toggleFilter
  useEffect(() => {
    async function getVideos() {
      setIsLoading(true)
      const videos = await fetch('https://videostar.dacoder.io/')
      const parsedVideos = (await videos.json()) as Video[]
      setVideoList(parsedVideos)
      setIsLoading(false)
    }
    getVideos()
  }, [])

  //   const allvideos = videoList!.map( video => <VideoCard video={video}></VideoCard>)

  // const allVideos = videoList!.map( (video: Video) => <VideoCard video={video}></VideoCard>)
  const [page, setPage] = useState<Page>('home')
  const [theaterVideo, setTheaterVideo] = useState<Video | null>(null)

  return (<>
    <Header page={setPage}></Header>
    {/* <PaymentCard video={{
      "id": 0,
      "name": "A Girl Taking a Selfie With Her Boyfriend",
      "isFree": false,
      "isPurchased": false,
      "duration": "00:00:16.93",
      "size": 7990219,
      "price": 7.62,
      "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
    }}></PaymentCard> */}
    <main
      style={{
        paddingLeft: '30px'
      }}
    >
      { page === 'home' && <ReccomendedVideos videos={[<VideoCard video={{
        "id": 0,
        "name": "A Girl Taking a Selfie With Her Boyfriend",
        "isFree": false,
        "isPurchased": false,
        "duration": "00:00:16.93",
        "size": 7990219,
        "price": 7.62,
        "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
      }} />, <VideoCard video={{
        "id": 0,
        "name": "A Girl Taking a Selfie With Her Boyfriend",
        "isFree": false,
        "isPurchased": false,
        "duration": "00:00:16.93",
        "size": 7990219,
        "price": 7.62,
        "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
      }} />, <VideoCard video={{
        "id": 0,
        "name": "A Girl Taking a Selfie With Her Boyfriend",
        "isFree": false,
        "isPurchased": false,
        "duration": "00:00:16.93",
        "size": 7990219,
        "price": 7.62,
        "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
      }} />, <VideoCard video={{
        "id": 0,
        "name": "A Girl Taking a Selfie With Her Boyfriend",
        "isFree": false,
        "isPurchased": false,
        "duration": "00:00:16.93",
        "size": 7990219,
        "price": 7.62,
        "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
      }} />]}></ReccomendedVideos>}
      <SortToggle></SortToggle>
      { page === 'home' && <AllVideos>
        {isLoading && <div>Loading...</div>}
        {videoList && (<>{videoList.map(video => <VideoCard key={video.id} video={video} page={setPage} theater={setTheaterVideo}></VideoCard>)}</>)
        }
      </AllVideos> }
      

    </main>
  </>
  )
}

export default App
