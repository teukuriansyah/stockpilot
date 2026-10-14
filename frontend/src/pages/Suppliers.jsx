import { useState, useEffect } from "react"
import { getSuppliers } from "../services/Services"
import Table from '../components/Table'

export default function Suppliers() {
  const [data,setData] = useState([])
      
  const fetching = async() => {
    const rawData = await getSuppliers()
    setData(rawData.data.data)
  }
      
  useEffect(() => {
    fetching()
  },[])
  return (
    <div className='bg-[#F8FAFC] p-4'>
        <div>
            <h1 className="text-2xl font-semibold">Direktori Pemasok & Vendor</h1>
            <span className='text-sm text-gray-800'>Manajemen kontak principal, riwayat pesanan (PO), rekam jejak pengiriman, dan volume pengadaan berbasis IDR.</span>
        </div>
        <div className="w-[95%] mt-4">
            <Table />
        </div>
    </div>
  )
}
