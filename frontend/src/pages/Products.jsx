import { useState, useEffect } from "react"
import { getProducts } from "../services/Services"
import TableRowProduct from "../components/TableRowProduct"
import Table from '../components/Table'

export default function Products() {
  const [data,setData] = useState([])
    
  const fetching = async() => {
    const rawData = await getProducts()
    setData(rawData.data.data)
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
    
  useEffect(() => {
    fetching()
  },[])
  return (
    <div className='bg-[#F8FAFC] p-4'>
        <div>
            <h1 className="text-2xl font-semibold">Katalog Produk & Inventaris</h1>
            <span className='text-sm text-gray-800'>Kelola siklus hidup produk, ambang batas stok minimum, dan harga jual/beli berbasis Weighted-Average Costing (WAC) secara realtime.</span>
        </div>
        <div className="w-[95%] mt-4">
            <Table data={data?.map((d,i) => <TableRowProduct key={i} name={d.name} sku={d.sku} sellPrice={numberWithCommas(d.sellingPrice)} buyPrice={numberWithCommas(d.costPrice)} currentStock={d.currentStock} minThreshold={d.minThreshold} category={d.category} supplier={d.supplier}/>)}/>
        </div>
    </div>
  )
}
