// @flow
import * as React from 'react'

import Missing from '../messages/Missing'
import Invalid from '../messages/Invalid'


// TYPES _______________________________________________________________________

import type { FieldState, TargetElements } from '../Form/index.js'

type EventHandler = (event: SyntheticEvent<TargetElements>) => void

export type ControlProps = {
  id: string,
  changeHandler: EventHandler,
  value: string,
  hasError?: boolean,
  icon?: string,
  type?: string,
  options?: string[]
}

export type FieldProps = ControlProps & {
  changeHandler: EventHandler,
  label: string,
  control: React.StatelessFunctionalComponent<ControlProps>,
  state: FieldState,
  required: boolean,
  className?: string
}


// CONSTANTS ___________________________________________________________________

const isMissing = ({ touched, missing }: FieldState): boolean =>
  touched && missing
const isInvalid = ({ touched, invalid }: FieldState): boolean =>
  touched && invalid
const hasError = (state: FieldState): boolean =>
  isMissing(state) || isInvalid(state)


// COMPONENT ___________________________________________________________________

const Field = (props: FieldProps) => {
  // Workaroud because of weird bug on Flow.
  const state: FieldState = props.state
  const control: React.StatelessFunctionalComponent<ControlProps> = props.control
  const {
    id,
    label,
    changeHandler,
    options,
    required,
    className = '',
    icon = '',
    type = ''
  } = props

  const controlProps: ControlProps = {
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
      <label htmlFor={id} className="label">
        {label}
        { required ? (<small> *</small>) : null }
      </label>
      { control(controlProps) }
      { isMissing(state) ? Missing() : null }
      { isInvalid(state) ? Invalid() : null }
    </div>
  )
}

export default Field
