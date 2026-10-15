import { useState, useEffect } from "react"
import { getCategories } from "../services/Services"
import TableRowCategories from "../components/TableRowCategories"
import Table from '../components/Table'

export default function Categories() {
  const [data,setData] = useState([])

  const fetching = async() => {
    const rawData = await getCategories()
    setData(rawData.data.data)
  }

  useEffect(() => {
    fetching()
  },[])
  return (
    <div className='bg-[#F8FAFC] p-4'>
        <div>
            <h1 className="text-2xl font-semibold">Kategori Produk & Taksonomi</h1>
            <span className='text-sm text-gray-800'>Kelola pengelompokan produk, ambang batas minimum default, dan proteksi integritas relasi produk untuk operasional toko ritel.</span>
        </div>
        <div className="w-[95%] mt-4">
            <Table data={data?.map((d,i) => <TableRowCategories key={i} color={d.color} title={d.name} icon={d.name?.split(" ").filter(d => d != "&").map(d => d[0].toUpperCase()).join("")} description={d.description}/>)}/>
        </div>
    </div>
  )
}
