import Table from '../components/Table'

export default function Products() {
  return (
    <div className='bg-[#F8FAFC] p-4'>
        <div>
            <h1 className="text-2xl font-semibold">Katalog Produk & Inventaris</h1>
            <span className='text-sm text-gray-800'>Kelola siklus hidup produk, ambang batas stok minimum, dan harga jual/beli berbasis Weighted-Average Costing (WAC) secara realtime.</span>
        </div>
        <div className="w-[95%] mt-4">
            <Table />
        </div>
    </div>
  )
}
