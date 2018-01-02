// @flow
import React from 'react'

import './Header.css'

type HeaderProps = {
  id: string,
  title: string
}

function Header({id, title}: HeaderProps) {
  const shouldShrink = title.length > 12
  return (
    <header className="section__header">
      <h2 id={id} className={`section__title ${shouldShrink ? 'shrunk' : ''}`}>
        {title}
      </h2>
    </header>
  )
}

export default Header
