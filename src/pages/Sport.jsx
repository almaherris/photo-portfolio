import { useEffect, useState } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"
import { shuffleArray } from "../utils/shuffleArray"

export const Sport = () => {
  const [shuffledImages, setShuffledImages] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })

  const sportImg = [
    { src: "/photos/sport1.jpg" },
    { src: "/photos/sport2.jpg" },
    { src: "/photos/sport3.jpg" },
    { src: "/photos/sport4.jpg" },
    { src: "/photos/sport5.jpg" },
    { src: "/photos/sport6.jpg" },
    { src: "/photos/sport7.jpg" },
  ]
  setShuffledImages(shuffleArray([...sportImg]))
}, [])

  return (
    <div>
      <PageTemplate
        title="Sports & Events"
        description="Fast-paced sports, live performances, and gatherings filled with energy and movement."
        section={<Gallery images={shuffledImages} />}
      />
    </div>
  )
}
