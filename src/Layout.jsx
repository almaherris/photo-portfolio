import { Outlet } from "react-router-dom"
import { NavBar } from "./components/Navbar"

export const Layout = () => {
  return (
    <div className="font-dmsans">
      <NavBar />{" "}
      <main
        className="bg-off-white flex-1 min-h-[calc(100vh-120px)] px-4 pt-24 md:p-10 md:pt-28"
        id="content">
        <Outlet />
      </main>
    </div>
  )
}
