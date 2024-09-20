import { useEffect, useState } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"
import { shuffleArray } from "../utils/shuffleArray"
import photos from "../data/photos.json"; 

export const People = () => {
  const [shuffledImages, setShuffledImages] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setShuffledImages(shuffleArray([...photos.people]))
  }, [])

  return (
    <div>
      <PageTemplate
        title="People"
        description="Portraits, street photography, and candid moments featuring individuals or groups."
        section={<Gallery images={shuffledImages} />}
      />
    </div>
  )
}
