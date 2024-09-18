import { useEffect } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"

export const Sport = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const sportImg = [
    { src: "/photos/sport1.jpg" },
    { src: "/photos/sport2.jpg" },
    { src: "/photos/sport3.jpg" },
    { src: "/photos/sport4.jpg" },
    { src: "/photos/sport5.jpg" },
    { src: "/photos/sport6.jpg" },
    { src: "/photos/sport7.jpg" },
    { src: "/photos/sport8.jpg" },
    { src: "/photos/sport9.jpg" },
    { src: "/photos/sport10.jpg" },
  ]

  return (
    <div>
      <PageTemplate
        title="Sports & Events"
        description="Fast-paced sports, live performances, and gatherings filled with energy and movement."
        section={<Gallery images={sportImg} />}
      />
    </div>
  )
}
