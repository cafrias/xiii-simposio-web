// @flow
import React from 'react'
import LeftIcon from '../icons/LeftIcon'

import type { ControlProps } from './Field'

const Select = ({ id }: ControlProps) =>
  <div className="control has-icons-left has-icons-right" style={{ width: '100%' }}>
    <div className="select">
      <select id={id} name={id}>
        <option selected>Argentina</option>
        <option>Bolivia</option>
        <option>Brasil</option>
        <option>Chile</option>
        <option>Paraguay</option>
        <option>Uruguay</option>
        <option>Otro</option>
      </select>
      <LeftIcon icon="fa-globe"/>
    </div>
  </div>

export default Select
