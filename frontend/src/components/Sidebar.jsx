import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Package, FolderTree, Truck, ArrowLeftRight, FileText, BarChart3, Settings } from 'lucide-react'
import logo from "../assets/screen.png"

export default function Sidebar() {
  const location = useLocation()
  return (
    <div className='flex flex-col'>
        <div className="flex flex-row items-center">
            <div className="aspect-square w-[20%]">
                <img src={logo} alt="logo" />
            </div>
            <div>
                <span className="flex flex-row gap-2"><h3 className="text-xl font-semibold">Stock Pilot</h3><span className="bg-gray-300 text-gray-700 rounded font-semibold text-sm p-1">UMKM</span></span>
                <h5 className="font-medium text-sm text-gray-800">Toko Berkah Jaya (Jakarta)</h5>
            </div>
        </div>
        <div className='flex flex-col mt-7 gap-3'>
            <Link to="/" className={`${location.pathname == "/" ? "bg-blue-600 text-white" : "text-gray-800 bg-white"} p-2 rounded flex items-center gap-2`}>
                <LayoutDashboard size={20} /> Overview
            </Link>
            <Link to="/products" className={`${location.pathname == "/products" ? "bg-blue-600 text-white" : "text-gray-800 bg-white"} p-2 rounded flex items-center gap-2`}>
                <Package size={20} /> Products
            </Link>
            <Link to="/categories" className={`${location.pathname == "/categories" ? "bg-blue-600 text-white" : "text-gray-800 bg-white"} p-2 rounded flex items-center gap-2`}>
                <FolderTree size={20} /> Categories
            </Link>
            <Link to="/suppliers" className={`${location.pathname == "/suppliers" ? "bg-blue-600 text-white" : "text-gray-800 bg-white"} p-2 rounded flex items-center gap-2`}>
                <Truck size={20} /> Suppliers
            </Link>
            <Link to="/stock" className={`${location.pathname == "/stock" ? "bg-blue-600 text-white" : "text-gray-800 bg-white"} p-2 rounded flex items-center gap-2`}>
                <ArrowLeftRight size={20} /> Stock Movements
            </Link>
            <Link to="/order" className={`${location.pathname == "/order" ? "bg-blue-600 text-white" : "text-gray-800 bg-white"} p-2 rounded flex items-center gap-2`}>
                <FileText size={20} /> Purchase Orders
            </Link>
            <Link to="/settings" className={`${location.pathname == "/settings" ? "bg-blue-600 text-white" : "text-gray-800 bg-white"} p-2 rounded flex items-center gap-2`}>
                <Settings size={20} /> Settings
            </Link>
        </div>
    </div>
  )
}