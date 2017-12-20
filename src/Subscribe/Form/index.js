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
  submitHandler: () => void
  initializeState: () => any
  
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      fields: this.initializeState()
    }
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
        invalid: false,
        missing: false
      }
    })

    return newState
  }

  submitHandler() {
    console.log('Submitted')
  }

  changeHandler(field, event, validator) {
    const newValue = event.value
    this.setState({
      loading: this.state.loading,
      fields: Object.assign({}, this.state.fields, {
        [field]: {
          value: newValue,
          touched: true,
          missing: true,
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
              <Field key={idx} state={this.state.fields[field]}
                id={id} label={label} control={control} icon={icon} options={options} />
            )
          }, this)
        }
      </FormLayout>
    )
  }
}

export default SubscriptionForm
