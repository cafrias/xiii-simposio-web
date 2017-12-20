// @flow
import React from 'react'

import Missing from '../messages/Missing'
import Invalid from '../messages/Invalid'

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
  className?: string,
} & ControlProps

const Field = ({ id, label, control, className = '', icon = '', type = '', options, state }: FieldProps) =>
  <div className={`field ${className}`}>
    <label htmlFor={id} className="label">{label}</label>
    { control({ id, icon, type, options }) }
    { state.touched && state.missing ? Missing() : null }
    { state.touched && state.invalid ? Invalid() : null }
  </div>

export default Field
