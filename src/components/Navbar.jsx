import { NavLink } from "react-router-dom"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import { useState, useRef, useEffect } from "react"

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu() // Close menu if click is outside of dropdown
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    // Cleanup event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showMenu])

  return (
    //Frosty glass here below - delete "md:backdrop-blur-xl md:bg-opacity-30"
    <div className="text-3xl z-50 fixed top-0 w-full bg-off-white md:backdrop-blur-xl md:bg-opacity-30 md:px-10 md:py-5 md:text-xl lg:text-3xl">
      {/* Phone */}
      <nav className="flex items-center justify-between p-3 md:hidden">
        <div className="text-5xl" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenuLine />}
        </div>
        <div
          ref={menuRef}
          className={`dropdown-menu bg-off-white absolute top-[55px] w-full z-50 p-2.5 pb-10 h-screen
            transition-all duration-700 ease 
            ${
              showMenu
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100%] opacity-0"
            }`}>
          <ul>
            <li className="mt-5">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "underline" : "")}>
                Home
              </NavLink>
            </li>
            <li className="mt-5">
              <NavLink
                to="/people"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "underline" : "")}>
                People
              </NavLink>
            </li>
            <li className="mt-5">
              <NavLink
                to="/nature"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "underline" : "")}>
                Nature
              </NavLink>
            </li>
            <li className="mt-5">
              <NavLink
                to="/urban"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "underline" : "")}>
                Urban & Architecture
              </NavLink>
            </li>
            <li className="mt-5">
              <NavLink
                to="/sport"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "underline" : "")}>
                Sports & Events{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Tablet and up*/}
      <nav className="hidden md:flex">
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }>
              Home
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              to="/people"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }>
              People
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              to="/nature"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }>
              Nature
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/urban"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }>
              Urban & Architecture
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sport"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }>
              Sports & Events{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
