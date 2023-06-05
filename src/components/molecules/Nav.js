import React from 'react'
import Link from '../atoms/Link.js'

export default function Nav() {
  return (
    <nav style={{ width: 'max-content', display: 'flex', gap: '2.5rem' }}>
      <Link to="/services">Serviços</Link>
      <Link to="/about">Sobre mim</Link>
      <Link to="/cases">Cases</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  )
}
