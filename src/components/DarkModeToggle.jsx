import { useState, useEffect } from "react"
import { LuSun } from "react-icons/lu"
import { FaRegMoon } from "react-icons/fa6"

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode")
    return (
      savedTheme === "true" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  return (
    <button
      className="dark:text-off-white"
      onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <LuSun /> : <FaRegMoon />}
    </button>
  )
}
