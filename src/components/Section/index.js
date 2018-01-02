// @flow
import React from 'react'

import Header from '../Header'

type SectionProps = {
  id: string,
  name: string,
  className: string,
  children?: any
}

function Section({id, name, className, children}: SectionProps) {
  return (
    <section className={className} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Header id={id} title={name}/>
      {children}
    </section>
  )
}

export default Section
