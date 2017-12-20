// @flow
import React from 'react'
import FormLayout from './FormLayout'

import Field from '../fields/Field'

import fields from './fields'

type FieldState = {
  value: mixed,
  touched: boolean,
  valid: boolean
}
type FieldsMap = {
  [any]: FieldState
}

type SubscriptionFormProps = {}
type SubscriptionFormState = {
  loading: boolean,
  fields: FieldsMap
}

class SubscriptionForm extends React.Component<SubscriptionFormProps> {
  state: SubscriptionFormState

  submitHandler: () => void
  initializeState: () => FieldsMap
  
  construct() {
    this.setState({
      loading: false,
      fields: this.initializeState()
    })
    // Binding
    this.submitHandler = this.submitHandler.bind(this)
  }

  initializeState() {
    const keys = Object.keys(fields)
    const newState = {}

    keys.forEach((field) => {
      newState[field] = {
        value: '',
        touched: false,
        valid: false
      }
    })

    return newState
  }

  submitHandler() {
    console.log('Submitted')
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
              <Field key={idx} id={id} label={label} control={control} icon={icon} options={options} />
            )
          })
        }
      </FormLayout>
    )
  }
}

export default SubscriptionForm
