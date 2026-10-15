import React from 'react'

export default function TableRowStock(props) {
  return (
    <tr className="bg-neutral-primary border-b border-gray-200">
      <td scope="row" className="px-6 py-4 text-heading flex items-center whitespace-nowrap gap-3">{props.date}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">{props.number}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">{props.email}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">{props.address}</td>
    </tr>
  )
}