import Table from '../components/Table'

export default function Order() {
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
