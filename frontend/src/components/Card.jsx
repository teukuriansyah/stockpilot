import React from 'react'

export default function Card(props) {
  return (
    <div className="flex flex-col bg-white rounded p-3">
      <span className="text-gray-700 font-medium">{props.title}</span>
      <span>{props.section}</span>
      <span className="text-gray-300 text-sm">{props.description}</span>
    </div>
  )
}