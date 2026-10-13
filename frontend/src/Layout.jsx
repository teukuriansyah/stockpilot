import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'

export default function Layout() {
  return (
    <div className="flex flex-row">
        <div className='p-3 w-1/4 shadow-lg'>
            <Sidebar/>
        </div>
        <div className="w-3/4">
            <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}
