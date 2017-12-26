// @flow
import React from 'react'
import LeftIcon from '../icons/LeftIcon'

import type { ControlProps } from './Field'

const Select = (props: ControlProps) => {
  const {
    id,
    hasError,
    value,
    changeHandler,
    blurHandler,
    icon = '',
    options = ['No Elements'],
  } = props

  const divClassName = `control ${icon ? 'has-icons-left' : ''}`

  return (
    <div className={divClassName} style={{ width: '100%' }}>
      <div className={`select is-fullwidth ${hasError ? 'is-danger' : ''}`}>
        <select onBlur={blurHandler}
          onChange={changeHandler} id={id} name={id} value={value}>
          {
            options.map((option, idx) => (
              typeof option === 'string'
                ? <option key={idx}>{option}</option>
                : <option key={idx} value={option.val}>{option.label}</option>)
            )
          }
        </select>
        <LeftIcon icon={icon}/>
      </div>
    </div>
  )
}

export default Select
