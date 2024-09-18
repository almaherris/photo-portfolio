import { useEffect } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"

export const Urban = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const urbanImg = [
    { src: "/photos/urban1.jpg" },
    { src: "/photos/urban2.jpg" },
    { src: "/photos/urban3.jpg" },
    { src: "/photos/urban4.jpg" },
    { src: "/photos/urban5.jpg" },
  ]

  return (
    <div>
      <PageTemplate
        title="Urban & Architecture"
        description="Cityscapes, buildings, and urban environments."
        section={<Gallery images={urbanImg} />}
      />
    </div>
  )
}
