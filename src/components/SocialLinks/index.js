// @flow
import React from 'react'

import './SocialLinks.css'

// ICONS _______________________________________________________________________
import FacebookIcon from './FacebookIcon'
import GmailIcon from './GmailIcon'

function SocialLinks() {
  return (
    <div className="social-container">
      <a className="social__icon-link" target="_blank" rel="noopener noreferrer"
        href="https://es-la.facebook.com/people/Simposio-Ushuaia/100008262517328">
        <FacebookIcon />
      </a>
      <a className="social__icon-link social__mail" href="mailto:ponencias.simposio@gmail.com">
        <GmailIcon />
      </a>
    </div>
  )
}

export default SocialLinks
