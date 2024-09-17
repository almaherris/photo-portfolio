import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import { useState, useRef, useEffect } from "react"

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      //Scroll to top if on homepage
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      //Navigate to homepage if on another page
      navigate("/")
    }
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
    <div className="z-50 fixed top-0 w-full">
      {/* Phone */}
      <nav className="flex items-center justify-between">
        <div className="hamburger-icon" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenuLine />}
        </div>
        <div
          ref={menuRef}
          className={`dropdown-menu ${showMenu ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/people"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nature"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Nature
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/urban"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Urban & Architecture
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sport"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}>
                Sports & Events{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="navbar-logo"
            src="/logos/pm-logo.png"
            alt="Pianomäster Logo"
            onClick={handleLogoClick}
          />
        </div>
      </nav>

      {/* Tablet and up*/}
      <nav className="navsection-tablet">
        <div>
          <img
            className="navbar-logo"
            src="/logos/pm-logo.png"
            alt="Pianomäster Logo"
            onClick={handleLogoClick}
          />
        </div>
        <ul className="navigation">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              to="/people"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              People
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              to="/nature"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Nature
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/urban"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Urban & Architecture
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sport"
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              Sports & Events{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
