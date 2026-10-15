import React from 'react'

export default function TableRowStock(props) {
  return (
    <tr className="bg-neutral-primary border-b border-gray-200">
      <td scope="row" className="px-6 py-4 text-heading flex items-center whitespace-nowrap gap-3">{props.date}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3"><span className={`${props.type == "Stock In" ? "text-green-600 bg-green-200 p-1 rounded" : props.type == "Stock Out" ? "text-red-600 bg-red-200 p-1 rounded" : "text-yellow-600 bg-yellow-200 p-1 rounded"}`}>{props.type}</span></td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">{props.name}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3 font-medium">{props.stockBefore}</td>
      <td scope="row" className={`px-6 py-4 text-heading whitespace-nowrap gap-3 ${props.type == "Stock In" ? "text-green-500" : props.type == "Stock Out" ? "text-red-500" : "text-yellow-500"} font-medium`}>{props.type == "Stock In" ? "+" : props.type == "Stock Out" ? "-" : ""}{props.quantity}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3 font-medium"><span className='bg-gray-300 rounded p-2'>{props.stockAfter}</span></td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3 font-medium"><span className='bg-gray-300 rounded p-2'>{props.reference}</span></td>
    </tr>
  )
}