import React from 'react'

export default function Link({ to, children }) {
  return (
    <a href={to} style={{ color: '#293947', textDecoration: 'none', fontSize: '1.3rem' }}>
      {children}
    </a>
  )
}
