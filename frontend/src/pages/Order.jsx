import { useState, useEffect } from "react"
import { getOrder } from "../services/Services"
import Table from '../components/Table'

export default function Order() {
  const [data,setData] = useState([])
  
  const fetching = async() => {
    const rawData = await getOrder()
    setData(rawData.data.data)
  }
  
  useEffect(() => {
    fetching()
  },[])
  return (
    <div className='bg-[#F8FAFC] p-4'>
        <div>
            <h1 className="text-2xl font-semibold">Pesanan Pembelian & Pengadaan (Purchase Orders)</h1>
            <span className='text-sm text-gray-800'>Alur kerja pengadaan bertahap (Draft Ordered Partially Received Fulfilled terhubung langsung dengan kalkulasi WAC realtime.</span>
        </div>
        <div className="w-[95%] mt-4">
            <Table />
        </div>
    </div>
  )
}
