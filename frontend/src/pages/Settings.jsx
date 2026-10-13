import React from 'react'

export default function Settings() {
  return (
    <div className="bg-[#F8FAFC] p-4">
      {/* Profil toko dan standar finansial*/}
      <div>
        <div>
          <h1 className="text-2xl font-semibold">Pengaturan Sistem & Manajemen Data</h1>
        </div>
        <div className="mt-5 bg-white rounded-lg p-3">
          <div>
            <h1 className="text-xl font-semibold">Profil Toko & Standar Finansial</h1>
            <span className="text-sm text-gray-500">Konfigurasi entitas bisnis dan parameter pembukuan ritel</span>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-row justify-between gap-5">
              <div className="flex flex-col w-1/2">
                <h4 className="text-lg font-medium">Nama Toko/Outlet</h4>
                <span className="bg-[#F8FAFC] p-3 rounded-lg">Nama Toko/Outlet</span>
                <span className="text-sm text-gray-400">Dicetak pada kop faktur PO dan laporan mutasi</span>
              </div>
              <div className="flex flex-col w-1/2">
                <h4 className="text-lg font-medium">Tipe Klasifikasi Usaha</h4>
                <span className="bg-[#F8FAFC] p-3 rounded-lg">Ritel & Minimarket Sembako</span>
                <span className="text-sm text-gray-400">Menentukan format default SKU dan kategori</span>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <div className="flex flex-col w-1/2">
                <h4 className="text-lg font-medium">Standar Mata Uang Basis</h4>
                <span className="bg-[#F8FAFC] p-3 rounded-lg font-semibold">Indonesian Rupiah (IDR - Rp)</span>
                <span className="text-sm text-gray-400">Sesuai standar pelaporan keuangan UMKM</span>
              </div>
              <div className="flex flex-col w-1/2">
                <h4 className="text-lg font-medium">Format Tampilan Angka & Angka</h4>
                <span className="bg-[#F8FAFC] p-3 rounded-lg font-semibold">Rp. 150.000,00</span>
                <span className="text-sm text-gray-400">Format lokal Indonesia (desimal koma, ribuan titik)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}