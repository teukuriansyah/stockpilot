import React from 'react'

export default function TableRowSupplier(props) {
  return (
    <tr className="bg-neutral-primary border-b border-gray-200">
      <td scope="row" className="px-6 py-4 text-heading flex items-center whitespace-nowrap gap-3">
        <div style={{ backgroundColor:props.color }} className="text-white aspect-square flex p-1 w-9 justify-center rounded items-center font-medium">{props.icon}</div>
        <div className="flex flex-col">
          <span className="font-medium">{props.name}</span>
          <span className="text-gray-400 text-sm">{props.company}</span>
        </div>
      </td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">{props.number}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">{props.email}</td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap gap-3">{props.address}</td>
    </tr>
  )
}