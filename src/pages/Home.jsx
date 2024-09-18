export const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-120px)] relative">
      <h1 className="font-cormorant text-7xl max-w-5xl md:text-8xl">
        ALMA CHARLOTTA PHOTO PORTFOLIO
      </h1>
      <div className="text-xl mt-5 md:text-3xl flex flex-col flex-grow gap-5">
        <p>Welcome to my portfolio. I like taking photos.</p>
        <p>
          Need photos taken? Email me
          <a href="mailto:almaherrstrom@hotmail.com">
            {" "}
            <u>here</u>
          </a>
          .
        </p>
      </div>
      <p className="text-xl md:text-3xl mt-auto">Based in Stockholm, Sweden.</p>
    </div>
  )
}
