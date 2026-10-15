import React from 'react'

export default function TableRowProduct(props) {
  return (
    <tr className="bg-neutral-primary border-b border-gray-200">
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
        <div className="flex flex-col">
          <span className="font-medium text-lg">{props.name}</span>
          <span className="text-gray-600">{props.sku}</span>
        </div>
      </td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
        <div className="flex flex-col">
          <span className="font-medium text-gray-800 p-1 rounded bg-gray-300">{props.category}</span>
          <span className="text-gray-600">{props.supplier}</span>
        </div>
      </td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
        <span className={`font-medium ${props.currentStock == 0 ? "text-red-600" : props.currentStock < props.minThreshold ? "text-yellow-600" : "text-green-600"}`}>{props.currentStock}/{props.minThreshold}</span>
      </td>
      <td scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
        <div className="flex flex-col">
          <span className="font-medium text-lg">Rp. {props.sellPrice}</span>
          <span className="text-gray-600">WAC: Rp. {props.buyPrice}</span>
        </div>
      </td>
    </tr>
  )
}