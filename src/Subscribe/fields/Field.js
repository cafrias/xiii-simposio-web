// @flow
import * as React from 'react'

import Missing from '../messages/Missing'
import Invalid from '../messages/Invalid'

import type { FieldState, TargetElements } from '../Form/index.js'

export type ControlProps = {
  id: string,
  icon?: string,
  type?: string,
  options?: [string]
}

export type FieldProps = {
  label: string,
  control: React.StatelessFunctionalComponent<ControlProps>,
  changeHandler: (field: string, event: SyntheticEvent<TargetElements>) => void,
  state: FieldState,
  className?: string
} & ControlProps

const isMissing = ({ touched, missing }) => touched && missing
const isInvalid = ({ touched, invalid }) => touched && invalid
const hasError = state => isMissing(state) || isInvalid(state)

const Field = (props: FieldProps) => {
  const {
    id,
    label,
    control,
    changeHandler,
    className = '',
    icon = '',
    type = '',
    options,
    state
  } = props

  const controlProps = {
    id,
    icon,
    type,
    options,
    value: state.value,
    changeHandler,
    hasError: hasError(state)
  }

  return (
    <div className={`field ${className}`}>
      <label htmlFor={id} className="label">{label}</label>
      { control(controlProps) }
      { isMissing(state) ? Missing() : null }
      { isInvalid(state) ? Invalid() : null }
    </div>
  )
}

export default Field
