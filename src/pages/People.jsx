import { useEffect, useState } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"
import { shuffleArray } from "../utils/shuffleArray"

export const People = () => {
  const [shuffledImages, setShuffledImages] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0 })

    const peopleImg = [
      { src: "/photos/people1.jpg" },
      { src: "/photos/people2.jpg" },
      { src: "/photos/people3.jpg" },
      { src: "/photos/people4.jpg" },
    ]

    setShuffledImages(shuffleArray([...peopleImg]))
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
