import Table from '../components/Table'

export default function Stock() {
  return (
    <div className='bg-[#F8FAFC] p-4'>
        <div>
            <h1 className="text-2xl font-semibold">Buku Besar & Audit Pergerakan Stok</h1>
            <span className='text-sm text-gray-800'>Rekam jejak seluruh mutasi inventaris secara realtime dengan audit non-negative guard, rekalkulasi Weighted Average Cost (WAC), dan penyesuaian fisik berkala</span>
        </div>
        <div className="w-[95%] mt-4">
            <Table />
        </div>
    </div>
  )
}
