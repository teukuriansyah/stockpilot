import { useState, useEffect } from "react"
import { getStock } from "../services/Services"
import TableRowStock from "../components/TableRowStock"
import Table from '../components/Table'

export default function Stock() {
  const [data,setData] = useState([])
    
  const fetching = async() => {
    const rawData = await getStock()
    setData(rawData.data.data)
  }

  const formatDate = date => {
    let d = new Date(date);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let dateResult = (d.getDate()) < 10 ?`0${d.getDate()}`: d.getDate()
    let monthResult = d.getMonth()
    let yearResult = d.getFullYear()
    return `${dateResult}/${month[monthResult]}/${yearResult}`
  }
    
  useEffect(() => {
    fetching()
  },[])
  return (
    <div className='bg-[#F8FAFC] p-4'>
        <div>
            <h1 className="text-2xl font-semibold">Buku Besar & Audit Pergerakan Stok</h1>
            <span className='text-sm text-gray-800'>Rekam jejak seluruh mutasi inventaris secara realtime dengan audit non-negative guard, rekalkulasi Weighted Average Cost (WAC), dan penyesuaian fisik berkala</span>
        </div>
        <div className="w-[95%] mt-4">
        </div>
            <Table data={data.map((d,i) => <TableRowStock key={i} type={d.type} name={d.name} date={formatDate(d.transactionDate)} stockBefore={d.stockBefore} quantity={d.quantity} stockAfter={d.stockAfter} reference={d.referenceNo}/>)}/>
    </div>
  )
}
