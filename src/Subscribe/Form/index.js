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
  success: boolean,
  failure: boolean,
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
      success: false,
      failure: false,
      fields: this.initializeState()
    }

    // Bindings
    this.submitHandler = this.submitHandler.bind(this)
    this.submitRequest = this.submitRequest.bind(this)
  }

  initializeState = (): FieldsMap => {
    const keys = Object.keys(fields)
    const newState = {}

    keys.forEach((field) => {
      newState[field] = {
        value: fields[field].default || '',
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

  submitHandler = async (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newState = Object.assign({}, this.state, {
      loading: true
    })

    const isValid = await this.isValid()

    if(isValid) {
      console.log('Submitting ...')
      await this.setStateAsync(newState)
      await this.submitRequest()
    } else {
      console.error('Form is invalid')
    }

    this.setState(Object.assign({}, this.state, {
      loading: false
    }))

  }

  setStateAsync = (state: SubscriptionFormState): Promise<any> => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }

  isValid = async () => {
    const newState = Object.assign({}, this.state, {
      fields: this.updateAllFields()
    })
    await this.setStateAsync(newState)

    console.log('New state', this.state)
    
    const { fields } = this.state
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        const element = fields[field]
        
        // If any is invalid or missing, we simply have to return false, this form
        // isn't valid!
        console.log(field, 'missing', element.missing)
        console.log(field, 'invalid', element.invalid)
        if(element.missing || element.invalid)
          return false
      }
    }

    // Not a single element is missing nor invalid, hence, this form is valid!.
    return true
  }

  submitRequest = async () => {
    const request = this.generatePostRequest()

    try {
      const res = await fetch(endpointURI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
      })

      if(res.status === 201) {
        this.setState(Object.assign({}, this.state, {
          success: true
        }))
        console.log('Successfully done!')
      }

      if(res.status >= 400 && res.status <= 500) {
        const parsedRes = await res.json()
        this.setState(Object.assign({}, this.state, {
          failure: true
        }))
        console.log('Response body:', parsedRes)
      }
    } catch(err) {
      console.error(err)
    }
  }

  updateField = (field: FormField, newValue: any): FieldState => {
    const {required, validator} = fields[field]
    return {
      value: newValue,
      touched: true,
      missing: required && !Boolean(newValue),
      invalid: newValue !== '' && required && !validator(newValue)
    }
  }

  updateAllFields = (): FieldsMap => {
    // update basic state
    const { fields } = this.state
    const newFields = {}
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        const element = fields[field]
        
        newFields[field] = this.updateField(field, element.value)
      }
    }

    return newFields
  }

  changeHandler = (field: string, event: SyntheticEvent<TargetElements>) => {
    const newValue = event.currentTarget.value
    const newState: SubscriptionFormState = Object.assign({}, this.state, {
      fields: Object.assign({}, this.state.fields, {
        [field]: this.updateField(field, newValue)
      })
    })

    // console.log('New State:', newState)

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
    const {
      success,
      failure,
      loading
    } = this.state
    return (
      <FormLayout loading={loading} success={success} failure={failure}
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
              required,
              small
            } = fields[fieldName]

            const toPass = {
              id,
              label,
              control,
              icon,
              options,
              type,
              required,
              small
            }

            const state: FieldState = this.state.fields[fieldName]
            return (
              <Field key={idx} {...toPass} state={state}
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
