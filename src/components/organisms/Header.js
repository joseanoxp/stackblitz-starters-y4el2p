import React from 'react'
import Logo from '../atoms/Logo'
import Nav from '../molecules/Nav'
import Search from '../molecules/Search'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <Search />
    </header>
  )
}
