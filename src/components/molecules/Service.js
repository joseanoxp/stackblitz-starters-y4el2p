import React from 'react'

export default function Service({ title, description }) {
  return (
    <div className="service">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  )
}
