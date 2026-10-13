import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Layout from "./Layout.jsx"
import "./index.css"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}