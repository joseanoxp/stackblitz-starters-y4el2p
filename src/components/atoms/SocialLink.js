import React from 'react'

export default function SocialLink({ name, icon, to }) {
  const iconPath = '/assets/images/icons/' + icon
  return (
    <a className="social-link" href={to}>
      <img src={iconPath} alt={name} />
    </a>
  )
}
