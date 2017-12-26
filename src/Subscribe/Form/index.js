// @flow
import React from 'react'
import FormLayout from './FormLayout'

import Field from '../fields/Field'
import fields from './fields'


// TYPES _______________________________________________________________________

import type { FormField } from './fields'

export type FieldState = {|
  value: string | boolean,
  touched: boolean,
  invalid: boolean,
  missing: boolean
|}
type FieldsMap = {
  [string]: FieldState
}

type SubscriptionFormProps = {
  [string]: any
}

type SubscriptionFormState = {
  loading: boolean,
  fields: FieldsMap
}

export type TargetElements =
  | HTMLInputElement
  | HTMLSelectElement


// COMPONENT ___________________________________________________________________

class SubscriptionForm extends React.Component<SubscriptionFormProps, SubscriptionFormState> {
  constructor(props: SubscriptionFormProps) {
    super(props)
    this.state = {
      loading: false,
      fields: this.initializeState()
    }

    // Bindings
    this.submitHandler = this.submitHandler.bind(this)
  }

  initializeState = (): FieldsMap => {
    const keys = Object.keys(fields)
    const newState = {}

    keys.forEach((field) => {
      newState[field] = {
        value: '',
        touched: false,
        invalid: false,
        missing: false
      }
    })

    return newState
  }

  submitHandler = (): void => {
    console.log('Submitted')
  }

  changeHandler = (field: FormField, event: SyntheticEvent<TargetElements>) => {
    const newValue = event.currentTarget.value || ''
    const {required, validator} = fields[field]
    const newState: SubscriptionFormState = {
      loading: this.state.loading,
      fields: Object.assign({}, this.state.fields, {
        [field]: {
          value: newValue,
          touched: true,
          missing: required && !Boolean(newValue),
          invalid: newValue !== '' && required && !validator(newValue)
        }
      })
    }

    console.log('New State:', newState)

    this.setState(newState)
  }

  render() {
    const fieldKeys = Object.keys(fields)
    const presentaValue = this.state.fields.ponencia_presenta.value
    console.log('Precasted presentaValue: ', presentaValue)
    return (
      <FormLayout presenta={Boolean(presentaValue)} handleSubmit={this.submitHandler}>
        {
          fieldKeys.map((fieldName, idx) => {
            const {
              id,
              label,
              control,
              icon,
              options,
              type,
              required
            } = fields[fieldName]
            const state: FieldState = this.state.fields[fieldName]
            return (
              <Field key={idx} id={id} label={label} control={control} type={type}
                required={required} state={state} icon={icon} options={options}
                changeHandler={this.changeHandler.bind(this, fieldName)}  /> 
            )
          }, this)
        }
      </FormLayout>
    )
  }
}

export default SubscriptionForm
