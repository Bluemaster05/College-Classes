import { Header } from "./components/header"
import { VideoCard } from "./components/VideoCard"

function App() {
  return (
    <>
      <Header></Header>
      <VideoCard video={{
  "id": 0,
  "name": "A Girl Taking a Selfie With Her Boyfriend",
  "isFree": false,
  "isPurchased": false,
  "duration": "00:00:16.93",
  "size": 7990219,
  "price": 7.62,
  "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4"
}} />
    </>
  )
}

export default App
