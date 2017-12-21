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
    icon = '',
    options = ['No Elements'],
  } = props

  return (
    <div className="control has-icons-left has-icons-right" style={{ width: '100%' }}>
      <div className={`select ${hasError ? 'is-danger' : ''}`}>
        <select onChange={changeHandler} id={id} name={id} value={value}>
          {
            options.map((option, idx) => <option key={idx}>{option}</option>)
          }
        </select>
        <LeftIcon icon={icon}/>
      </div>
    </div>
  )
}

export default Select
