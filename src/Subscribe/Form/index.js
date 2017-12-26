// @flow
import * as React from 'react'
import FormLayout from './FormLayout'

import Field from '../fields/Field'
import fields from './fields'

import 'whatwg-fetch'

// TYPES _______________________________________________________________________

import type { FormField } from './fields'

export type FieldState = {|
  value: string,
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

const endpointURI = 'https://t5n8p8b7m8.execute-api.sa-east-1.amazonaws.com/dev'

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

  generatePostRequest = () => {
    const stateFields = this.state.fields
    const requestObject = {}

    for (const key in stateFields) {
      if (stateFields.hasOwnProperty(key)) {
        const element = stateFields[key]
        requestObject[key] = element.value
      }
    }

    return requestObject
  }

  submitHandler = (e: SyntheticEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const newState = Object.assign({}, this.state, {
      loading: true
    })
    this.setState(newState, () => {
      const request = this.generatePostRequest()

      fetch(endpointURI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
      }).then(response => {
        console.log(response.status)
        const newState = Object.assign({}, this.state, {
          loading: false
        })
        this.setState(newState)
        if(response.status >= 400 && response.status <= 500)
          return response.json()
      }).then(json => {
        console.log('Response body:', json)
      }).catch(err => {
        console.error(err)
      })
    })

    console.log('Submitting ...')
  }

  changeHandler = (field: FormField, event: SyntheticEvent<TargetElements>) => {
    const newValue = event.currentTarget.value
    const {required, validator} = fields[field]
    const newState: SubscriptionFormState = Object.assign({}, this.state, {
      fields: Object.assign({}, this.state.fields, {
        [field]: Object.assign({}, this.state.fields[field], {
          value: newValue,
          touched: true,
          missing: required && !Boolean(newValue),
          invalid: newValue !== '' && required && !validator(newValue)
        })
      })
    })

    console.log('New State:', newState)

    this.setState(newState)
  }

  blurHandler = (field: FormField, event: SyntheticEvent<TargetElements>) => {
    const value = this.state.fields[field].value
    const {required, validator} = fields[field]
    const newState: SubscriptionFormState = Object.assign({}, this.state, {
      fields: Object.assign({}, this.state.fields, {
        [field]: Object.assign({}, this.state.fields[field], {
          touched: true,
          missing: required && !Boolean(value),
          invalid: value !== '' && required && !validator(value)
        })
      })
    })

    this.setState(newState)
  }

  render() {
    const fieldKeys = Object.keys(fields)
    const presenta = this.state.fields.ponencia_presenta.value === 'true'
    console.log('presenta: ', presenta)
    return (
      <FormLayout loading={this.state.loading}
        presenta={presenta} handleSubmit={this.submitHandler}>
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
                changeHandler={this.changeHandler.bind(this, fieldName)}
                blurHandler={this.blurHandler.bind(this, fieldName)}  /> 
            )
          }, this)
        }
      </FormLayout>
    )
  }
}

export default SubscriptionForm
