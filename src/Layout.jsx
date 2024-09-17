import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"

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
