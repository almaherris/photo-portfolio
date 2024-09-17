import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { People } from "./pages/People"
import { Nature } from "./pages/Nature"
import { Urban } from "./pages/Urban"
import { Sports } from "./pages/Sports"
import { Layout } from "./Layout"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/nature" element={<Nature />} />
            <Route path="/urban" element={<Urban />} />
            <Route path="/sports" element={<Sports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
