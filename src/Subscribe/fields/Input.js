// @flow
import React from 'react'
import Explanation from '../messages/Explanation'
import LeftIcon from '../icons/LeftIcon'

import type { ControlProps } from './Field'

const Input = ({ id, icon = '', type = 'text', hasError, value }: ControlProps) => {
  const controlClassName = `control has-icons-right ${ icon ? 'has-icons-left' : '' }`
  return (
    <div className={controlClassName}>
      <input id={id} name={id} component="input" type={type} className={`input ${ hasError ? 'is-danger' : '' }`} value={value}/>
      { type === 'number' ? Explanation({ message: '* Sólo números' }) : null }
      { icon ? <LeftIcon icon={icon} /> : null }
    </div>
  )
}

export default Input
