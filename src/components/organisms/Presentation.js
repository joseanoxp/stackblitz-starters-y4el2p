import React from 'react'
import SocialNetworks from '../molecules/SocialNetworks'

export default function Presentation() {
  return (
    <div className="presentation">
      <SocialNetworks />

      <img className="presentation" src="/assets/images/presentation.svg" alt="Apresentação" />
    </div>
  )
}
