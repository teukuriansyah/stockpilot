import React from 'react'

export default function TableRowOrder(props) {
  return (
    <tr className="bg-neutral-primary border-b border-gray-200">
      <td scope="row" className="px-6 py-4 text-heading flex items-center whitespace-nowrap gap-3">
        <div className="flex flex-col">
          <span className="font-medium">{props.po}</span>
          <span className="text-gray-400 text-sm">{props.date}</span>
        </div>
      </td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">{props.name}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">
        <div className="flex flex-col">
          <span className="font-medium">{props.item}</span>
          <span className="text-gray-400 text-sm">{props.list}</span>
        </div>
      </td>
      <td scope="row" className="px-6 py-4 text-heading font-medium whitespace-nowrap gap-3">Rp. {props.amount}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3"><span className={`${props.status == "Ordered" ? "text-green-600 bg-green-300 rounded p-1" : "text-blue-600 bg-blue-300 p-1 rounded"}`}>{props.status}</span></td>
      <td scope="row" className="px-6 py-4 text-heading font-medium whitespace-nowrap gap-3">{props.estimatedDate}</td>
    </tr>
  )
}