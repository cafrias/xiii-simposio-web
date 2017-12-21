// @flow
import React from 'react'
import FormLayout from './FormLayout'

import Field from '../fields/Field'

import fields from './fields'
import type { FormField } from './fields'

export type FieldState = {
  value: mixed,
  touched: boolean,
  valid: boolean
}
type FieldsMap = {
  [any]: FieldState
}

type SubscriptionFormProps = {
  [any]: any
}

type SubscriptionFormState = {
  loading: boolean,
  fields: FieldsMap
}

export type TargetElements =
  | HTMLInputElement
  | HTMLSelectElement

class SubscriptionForm extends React.Component<SubscriptionFormProps, SubscriptionFormState> {
  constructor(props: SubscriptionFormProps) {
    super(props)
    this.state = {
      loading: false,
      fields: this.initializeState()
    }
    // Binding
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
    const newValue = event.currentTarget.value
    const {required, validator} = fields[field]
    this.setState({
      loading: this.state.loading,
      fields: Object.assign({}, this.state.fields, {
        [field]: {
          value: newValue,
          touched: true,
          missing: required && !Boolean(newValue),
          invalid: !validator(newValue)
        }
      })
    })
  }

  render() {
    const fieldKeys = Object.keys(fields)
    return (
      <FormLayout handleSubmit={this.submitHandler}>
        {
          fieldKeys.map((field, idx) => {
            const {
              id,
              label,
              control,
              icon,
              options,
            } = fields[field]
            return (
              <Field key={idx} state={this.state.fields[field]} changeHandler={this.changeHandler.bind(this, field)}
                id={id} label={label} control={control} icon={icon} options={options} />
            )
          }, this)
        }
      </FormLayout>
    )
  }
}

export default SubscriptionForm
