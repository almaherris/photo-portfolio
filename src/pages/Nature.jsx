import { useEffect } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"

export const Nature = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const natureImg = [
    { src: "/photos/nature1.jpg" },
    { src: "/photos/nature2.jpg" },
    { src: "/photos/nature3.jpg" },
    { src: "/photos/nature4.jpg" },
    { src: "/photos/nature5.jpg" },
    { src: "/photos/nature6.jpg" },
    { src: "/photos/nature7.jpg" },
    { src: "/photos/nature8.jpg" },
    { src: "/photos/nature9.jpg" },
    { src: "/photos/nature10.jpg" },
    { src: "/photos/nature11.jpg" },
  ]

  return (
    <div>
      <PageTemplate
        title="Nature"
        description="Landscapes, wildlife, flora, and natural scenery."
        section={<Gallery images={natureImg} />}
      />
    </div>
  )
}
