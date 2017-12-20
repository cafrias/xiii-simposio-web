// @flow
import React from 'react'
import LeftIcon from '../icons/LeftIcon'

import type { ControlProps } from './Field'

const Select = ({ id, options = ['No Elements'], hasError }: ControlProps) =>
  <div className="control has-icons-left has-icons-right" style={{ width: '100%' }}>
    <div className={`select ${hasError ? 'is-danger' : ''}`}>
      <select id={id} name={id} defaultValue={options[0]}>
        {
          options.map((option, idx) => <option key={idx}>{option}</option>)
        }
      </select>
      <LeftIcon icon="fa-globe"/>
    </div>
  </div>

export default Select
