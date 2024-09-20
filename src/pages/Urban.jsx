import { useEffect, useState } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"
import { shuffleArray } from "../utils/shuffleArray"
import photos from "../data/photos.json"

export const Urban = () => {
  const [shuffledImages, setShuffledImages] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setShuffledImages(shuffleArray([...photos.urban]))
  }, [])

  return (
    <div>
      <PageTemplate
        title="Urban & Architecture"
        description="Cityscapes, buildings, and urban environments."
        section={<Gallery images={shuffledImages} />}
      />
    </div>
  )
}
