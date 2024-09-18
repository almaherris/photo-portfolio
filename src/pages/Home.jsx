export const Home = () => {
  return (
    <div>
      <h1 className="font-cormorant text-5xl md:text-8xl">
        ALMA CHARLOTTA PHOTO PORTFOLIO
      </h1>
      <p>Welcome to my portfolio. I like taking photos.</p>
      <p>
        Need photos taken? Email me
        <a href="mailto:almaherrstrom@hotmail.com">
          {" "}
          <u>here</u>
        </a>
        .
      </p>
      <p>Based in Stockholm, Sweden.</p>
    </div>
  )
}
