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
  ];
  

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
