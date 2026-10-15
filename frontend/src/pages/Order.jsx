import { useState, useEffect } from "react"
import { getOrder } from "../services/Services"
import TableRowOrder from "../components/TableRowOrder"
import Table from '../components/Table'

export default function Order() {
  const [data,setData] = useState([])
  
  const fetching = async() => {
    const rawData = await getOrder()
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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
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
            <Table data={data.map((d,i) => <TableRowOrder key={i} date={formatDate(d.orderDate)} po={d.orderNumber} name={d.supplier} item={JSON.parse(d.items).length} list={JSON.parse(d.items).map(d => d.productName).join("").split("").map((d,i) => i<15 ? d : i>=15&&i<18?".":null).join("")} estimatedDate={formatDate(d.expectedDeliveryDate)} amount={numberWithCommas(d.totalAmount)} status={d.status}/>)} />
        </div>
    </div>
  )
}
