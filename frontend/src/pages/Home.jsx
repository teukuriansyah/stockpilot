import { useState, useEffect } from "react"
import { getProducts } from "../services/Services"
import Card from "../components/Card"

export default function Home() {
  const [wac,setWac] = useState([])
    
  const fetching = async() => {
    const rawData = await getProducts()
    const data = rawData.data.data
    const rawWac = data.map(d => d.costPrice).reduce((accumulator, current) => accumulator + current.costPrice, 0)
    setWac(rawWac)
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
    
  useEffect(() => {
    fetching()
  },[])
  return(
    <div className="bg-[#F8FAFC] p-4">
      <div className="flex justify-between gap-4">
        <Card title="TOTAL VALUATION (WAC)" description="Weighted Average Cost" section={<span className="text-xl font-semibold">Rp. {wac}</span>} />
        <Card title="ACTIVE PRODUCTS" description="Barcode Synced"/>
        <Card title="TOTAL STOCK UNIT" description=""/>
      </div>
    </div>
  )
}