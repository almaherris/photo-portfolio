import { useEffect, useState } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"
import { shuffleArray } from "../utils/shuffleArray"
import photos from "../data/photos.json"; 

export const Nature = () => {
  const [shuffledImages, setShuffledImages] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setShuffledImages(shuffleArray([...photos.nature]))
  }, [])

  return (
    <div>
      <PageTemplate
        title="Nature"
        description="Landscapes, wildlife, flora, and natural scenery."
        section={<Gallery images={shuffledImages} />}
      />
    </div>
  )
}
