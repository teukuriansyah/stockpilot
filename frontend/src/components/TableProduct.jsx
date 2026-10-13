export default function TableProduct() {
  return (
    <div class="rounded bg-white relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="bg-blue-100 text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                    <th scope="col" class="px-6 py-3 font-medium">
                        DETAIL PRODUCT & SKU
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        KATEGORI & PEMASOK
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        STOK FISIK & BUFFER
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-neutral-primary border-b border-default">
                    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
