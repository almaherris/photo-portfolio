import { useEffect } from "react"
import { PageTemplate } from "../components/PageTemplate"
import { Gallery } from "../components/Gallery"

export const People = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const peopleImg = [
    { src: "/photos/people1.jpg" },
    { src: "/photos/people2.jpg" },
    { src: "/photos/people3.jpg" },
  ];
  

  return (
    <div>
      <PageTemplate
        title="People"
        description="Portraits, street photography, or candid moments featuring individuals or groups."
        section={<Gallery images={peopleImg} />}
      />
    </div>
  )
}
