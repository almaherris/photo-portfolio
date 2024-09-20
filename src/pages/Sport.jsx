import { useEffect, useState } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"
import { shuffleArray } from "../utils/shuffleArray"
import photos from "../data/photos.json"

export const Sport = () => {
  const [shuffledImages, setShuffledImages] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setShuffledImages(shuffleArray([...photos.sport]))
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
