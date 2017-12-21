// @flow
import React from 'react'

import Explanation from '../messages/Explanation'
import LeftIcon from '../icons/LeftIcon'


// TYPES _______________________________________________________________________

import type { ControlProps } from './Field'


// COMPONENT ___________________________________________________________________

const Input = (props: ControlProps) => {
  const {
    id,
    hasError,
    value,
    changeHandler,
    icon = '',
    type = 'text'
  } = props

  const controlClassName = `control has-icons-right ${ icon ? 'has-icons-left' : '' }`
  
  return (
    <div className={controlClassName} onBlur={changeHandler}>
      <input id={id} name={id} onChange={changeHandler} component="input" type={type}
        className={`input ${ hasError ? 'is-danger' : '' }`} value={value}/>
      { type === 'number' ? Explanation({ message: '* Sólo números' }) : null }
      { icon ? <LeftIcon icon={icon} /> : null }
    </div>
  )
}

export default Input
