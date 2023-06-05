import React from 'react'

export default function Search() {
  return (
    <form className="search">
      <input type="search" placeholder="Buscar" />
      <button type="submit">
        <img src="/assets/images/icons/search.svg" alt="Buscar" />
      </button>
    </form>
  )
}
