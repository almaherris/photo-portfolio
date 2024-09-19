import { useEffect, useState } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"
import { shuffleArray } from "../utils/shuffleArray"

export const Urban = () => {
  const [shuffledImages, setShuffledImages] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })

    const urbanImg = [
      { src: "/photos/urban1.jpg" },
      { src: "/photos/urban2.jpg" },
      { src: "/photos/urban3.jpg" },
      { src: "/photos/urban4.jpg" },
      { src: "/photos/urban5.jpg" },
    ]

    setShuffledImages(shuffleArray([...urbanImg]))
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
