// @flow
import React from 'react'

import type { StatelessFunctionalComponent } from 'react'

export type ControlProps = {
  id: string,
  icon?: string,
  type?: string
}

type FieldProps = {
  id: string,
  label: string,
  control: StatelessFunctionalComponent<ControlProps>,
  className?: string,
  icon?: string,
  type?: string
}

const Field = ({ id, label, control, className = '', icon = '', type = '' }: FieldProps) =>
  <div className={`field ${className}`}>
    <label htmlFor={id} className="label">{label}</label>
    { control({ id, icon, type }) }
  </div>

export default Field
