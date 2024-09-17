import { Outlet } from "react-router-dom"
import { NavBar } from "./components/Navbar"

export const Layout = () => {
  return (
    <>
      <NavBar />{" "}
      <main className="app-container" id="content">
        <Outlet />
      </main>
    </>
  )
}
