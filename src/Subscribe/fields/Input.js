import React from 'react'
import Explanation from '../messages/Explanation'
import LeftIcon from '../icons/LeftIcon'

import type { ControlProps } from './Field'

const Input = ({ id, icon = '', type = 'text' }: ControlProps) => {
  const controlClassName = `control has-icons-right ${ icon ? 'has-icons-left' : '' }`
  return (
    <div className={controlClassName}>
      <input id={id} name={id} component="input" type={type} className="input"/>
      { type === 'number' ? Explanation({ message: '* Sólo números' }) : null }
      { icon ? <LeftIcon className={icon} /> : null }
    </div>
  )
}

export default Input
