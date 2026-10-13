import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./pages/Home.jsx"
import Settings from "./pages/Settings.jsx"
import "./index.css"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/settings" element={<Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}