import React from 'react'
import Container from '../bosons/Container'
import Header from '../organisms/Header'
import Presentation from '../organisms/Presentation'
import Services from '../organisms/Services'

export default function HomeTemplate() {
  return (
    <Container className="home-template">
      <Header />
      <Presentation />
      <Services />
    </Container>
  )
}
