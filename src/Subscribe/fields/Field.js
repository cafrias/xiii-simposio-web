// @flow
import React from 'react'

import type { StatelessFunctionalComponent } from 'react'

export type ControlProps = {
  id: string,
  icon?: string,
  type?: string,
  options?: [string]
}

export type FieldProps = {
  label: string,
  control: StatelessFunctionalComponent<ControlProps>,
  className?: string
} & ControlProps

const Field = ({ id, label, control, className = '', icon = '', type = '', options }: FieldProps) =>
  <div className={`field ${className}`}>
    <label htmlFor={id} className="label">{label}</label>
    { control({ id, icon, type, options }) }
  </div>

export default Field
