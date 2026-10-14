import { useLocation } from "react-router-dom"

export default function Table() {
  const location = useLocation()
  return (
    <div className="rounded bg-white relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="bg-blue-100 text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                    <th scope="col" className="px-6 py-3 font-medium">{location.pathname == "/suppliers" ? "PEMASOK & PIC" : location.pathname == "/products" ? "DETAIL PRODUCT & SKU" : location.pathname == "/categories" ? "KATEGORI & CAKUPAN SKU" : location.pathname == "/stock" ? "WAKTU & TANGGAL" : location.pathname == "/order" ? "NOMOR PO & TANGGAL" : null}
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        {location.pathname == "/suppliers" ? "KATEGORI PRODUK" : location.pathname == "/products" ? "KATEGORI & PEMASOK" : location.pathname == "/categories" ? "SKU AKTIF" : location.pathname == "/stock" ? "TIPE MUTASI" : location.pathname == "/order" ? "PEMASOK" : null}
                    </th>
                    <th scope="col" className="px-6 py-3 font-medium">
                        {location.pathname == "/suppliers" ? "KONTAK & WILAYAH" : location.pathname == "/products" ? "STOK FISIK & BUFFER" : location.pathname == "/categories" ? "TOTAL VALUE" : location.pathname == "/stock" ? "SKU & NAMA PRODUK" : location.pathname == "/order" ? "JUMLAH ITEM/SKU" : null}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-neutral-primary border-b border-default">
                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                        Silver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
