import { useEffect, useState } from "react"
import { AllVideos } from "./components/AllVideos"
import { Header } from "./components/header"
import { ReccomendedVideos } from "./components/reccomended"
import { VideoCard } from "./components/VideoCard"
import { Video } from "./types/video.type"

// async function getVideos(){
//   const videos =  await fetch('https://videostar.dacoder.io/')
//   const parsedVideos = await videos.json()
//   return parsedVideos
// }

function App() {
  const [videoList, setVideoList] = useState<Array<Video> | null>(null)
    // async function getVideos() {
    //   const videos =  await fetch('https://videostar.dacoder.io/')
    //   const parsedVideos = await videos.json()
    //   return parsedVideos
    }
    
    setVideoList(getVideos())
    // const allVideos = videoList!.map( (video: Video) => <VideoCard video={video}></VideoCard>)
  }, [])
  return (<>
      <Header></Header>
    <main
    style={{
      paddingLeft: '30px'
    }}
    >
      <ReccomendedVideos videos={[<VideoCard video={{
  "id": 0,
  "name": "A Girl Taking a Selfie With Her Boyfriend",
  "isFree": false,
  "isPurchased": false,
  "duration": "00:00:16.93",
  "size": 7990219,
  "price": 7.62,
  "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
}} />,<VideoCard video={{
  "id": 0,
  "name": "A Girl Taking a Selfie With Her Boyfriend",
  "isFree": false,
  "isPurchased": false,
  "duration": "00:00:16.93",
  "size": 7990219,
  "price": 7.62,
  "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
}} />,<VideoCard video={{
  "id": 0,
  "name": "A Girl Taking a Selfie With Her Boyfriend",
  "isFree": false,
  "isPurchased": false,
  "duration": "00:00:16.93",
  "size": 7990219,
  "price": 7.62,
  "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
}} />,<VideoCard video={{
  "id": 0,
  "name": "A Girl Taking a Selfie With Her Boyfriend",
  "isFree": false,
  "isPurchased": false,
  "duration": "00:00:16.93",
  "size": 7990219,
  "price": 7.62,
  "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
}} />]}></ReccomendedVideos>
{/* <AllVideos videos={} ></AllVideos> */}
</main>
</>
  )
}

export default App
