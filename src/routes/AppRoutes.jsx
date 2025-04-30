import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { People } from "../pages/People"
import { Nature } from "../pages/Nature"
import { Urban } from "../pages/Urban"
import { Sport } from "../pages/Sport"
import { Media } from "../pages/Media"
import { Layout } from "../Layout"

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/urban" element={<Urban />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/media" element={<Media />} />
        </Route>
      </Routes>
    </>
  )
}
