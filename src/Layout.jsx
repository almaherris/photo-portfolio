import { Outlet } from "react-router-dom"
import { NavBar } from "./components/Navbar"

export const Layout = () => {
  return (
    <div className="font-dmsans">
      <NavBar />{" "}
      <main
        className="bg-off-white flex-1 min-h-[calc(100vh-120px)] mx-4 mt-24 md:m-10 md:mt-28"
        id="content">
        <Outlet />
      </main>
    </div>
  )
}
