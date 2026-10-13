import Table from '../components/Table'

export default function Categories() {
  return (
    <div className='bg-[#F8FAFC] p-4'>
        <div>
            <h1 className="text-2xl font-semibold">Kategori Produk & Taksonomi</h1>
            <span className='text-sm text-gray-800'>Kelola pengelompokan produk, ambang batas minimum default, dan proteksi integritas relasi produk untuk operasional toko ritel.</span>
        </div>
        <div className="w-[95%] mt-4">
            <Table />
        </div>
    </div>
  )
}
