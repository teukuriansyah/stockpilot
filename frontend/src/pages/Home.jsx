import { useState, useEffect } from "react"
import { getProducts } from "../services/Services"
import Card from "../components/Card"

export default function Home() {
  const [wac,setWac] = useState(0)
  const [units,setUnits] = useState(0)
  const [sku, setSku] = useState(0)
    
  const fetching = async() => {
    const rawData = await getProducts()
    const data = rawData.data.data
    const rawWac = data.reduce((accumulator, current) => accumulator + (current.costPrice || 0), 0)
    const rawSku = data.filter(d => d.status).length
    const rawUnits = data.filter(d => d.status).reduce((accumulator, current) => accumulator + (current.currentStock || 0), 0)
    setWac(rawWac)
    setSku(rawSku)
    setUnits(rawUnits)
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
    
  useEffect(() => {
    fetching()
  },[])
  return(
    <div className="bg-[#F8FAFC] p-8 ">
      <div className="flex justify-between gap-4">
        <Card title="TOTAL VALUATION (WAC)" description="Weighted Average Cost" section={<span className="text-2xl font-semibold">Rp. {numberWithCommas(wac)}</span>} />
        <Card title="ACTIVE PRODUCTS" description="Barcode Synced" section={<div><span className="text-2xl font-semibold">{sku}</span><span> SKUs</span></div>}/>
        <Card title="TOTAL STOCK UNIT" description="Turnover rate" section={<div><span className="text-2xl font-semibold">{units}</span><span> units</span></div>}/>
      </div>
    </div>
  )
}