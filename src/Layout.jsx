import { Outlet } from "react-router-dom"
import { NavBar } from "./components/Navbar"

export const Layout = () => {
  return (
    <div className="font-dmsans dark:bg-off-black">
      <NavBar />{" "}
      <main
        className="bg-off-white dark:bg-off-black dark:text-off-white flex-1 mx-4 mt-24 md:m-10 md:mt-32"
        id="content">
        <Outlet />
      </main>
    </div>
  )
}
