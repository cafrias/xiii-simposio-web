// @flow
import React from 'react'
import FormLayout from './FormLayout'

import Field from '../fields/Field'

import fields from './fields'

type SubscriptionFormProps = {}

class SubscriptionForm extends React.Component<SubscriptionFormProps> {
  submitHandler: () => void
  
  construct() {
    // Binding
    this.submitHandler = this.submitHandler.bind(this)
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
