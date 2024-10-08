import { Link } from "react-router-dom"
import { useEffect } from "react"

export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="flex flex-col min-h-[calc(100vh-160px)] relative">
      <h1 className="font-cormorant text-6xl max-w-5xl md:text-8xl">
        ALMA CHARLOTTA PHOTO PORTFOLIO
      </h1>
      <div className="text-xl mt-5 md:text-3xl flex flex-col flex-grow gap-5">
        <p>
          Welcome to my portfolio. Start exploring my photos{" "}
          <Link to="/nature">
            <u>here</u>
          </Link>
          .
        </p>
        <p>
          Need pictures taken? Email me
          <a href="mailto:almaherrstrom@hotmail.com">
            {" "}
            <u>here</u>
          </a>
          .
        </p>
      </div>
      <p className="text-xl self-end pr-4 md:text-3xl">
        Based in Stockholm, Sweden.
      </p>
    </div>
  )
}
