import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Suppliers from "./pages/Suppliers.jsx"
import Settings from "./pages/Settings.jsx"
import Stock from "./pages/Stock.jsx"
import Order from "./pages/Order.jsx"
import Categories from "./pages/Categories.jsx"
import "./index.css"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/suppliers" element={<Suppliers/>} />
          <Route path="/stock" element={<Stock/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/settings" element={<Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}