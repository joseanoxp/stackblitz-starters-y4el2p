import React from 'react'
import SocialLink from '../atoms/SocialLink.js'

export default function SocialNetworks() {
  return (
    <div className="social-networks">
      <SocialLink name="Facebook" icon="facebook.svg" to="" />
      <SocialLink name="Github" icon="github.svg" to="" />
      <SocialLink name="Twitter" icon="twitter.svg" to="" />
    </div>
  )
}
