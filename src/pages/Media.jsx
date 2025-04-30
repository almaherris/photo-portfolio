import { useEffect, useState } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"
import { shuffleArray } from "../utils/shuffleArray"
import photos from "../data/photos.json"; 

export const Media = () => {
  const [shuffledImages, setShuffledImages] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setShuffledImages(shuffleArray([...photos.media]))
  }, [])

  return (
    <div>
      <PageTemplate
        title="Media"
        description="My photos in media."
        section={<Gallery images={shuffledImages} />}
      />
    </div>
  )
}
