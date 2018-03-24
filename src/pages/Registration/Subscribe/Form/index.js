// @flow
import * as React from 'react'
import FormLayout from './FormLayout'

import Field from '../fields/Field'
import fields, { validFieldName } from './fields'

import 'whatwg-fetch'

// TYPES _______________________________________________________________________

import type { FormField } from './fields'

export type FieldState = {|
  value: any,
  touched: boolean,
  invalid: boolean,
  missing: boolean
|}
type FieldsMap = {
  [FormField]: FieldState
}

type SubscriptionFormProps = {
  [string]: any
}

export type StatusConditions =
  | 'success'
  | 'failure'
  | 'initial'

export type FormStatus = {
  condition: StatusConditions,
  logID?: string,
  reason?: string
}

type SubscriptionFormState = {
  loading: boolean,
  status: FormStatus,
  fields: FieldsMap
}

export type TargetElements =
  | HTMLInputElement
  | HTMLSelectElement


// COMPONENT ___________________________________________________________________

const endpointURI = `${process.env.REACT_APP_ENDPOINT || ''}/subscripcion`

class SubscriptionForm extends React.Component<SubscriptionFormProps, SubscriptionFormState> {
  constructor(props: SubscriptionFormProps) {
    super(props)
    this.state = {
      loading: false,
      status: {
        condition: 'initial'
      },
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
      const [isField, fieldName] = validFieldName(key)
      if (isField) {
        const element = stateFields[fieldName]
        // Let's coerce the value to the corresponding type to be parsed as valid JSON.
        requestObject[key] = fields[fieldName].coercer(element.value)
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
      const [isField, fieldName] = validFieldName(field)

      if (isField) {
        const element = fields[fieldName]  
        // If any is invalid or missing, we simply have to return false, this form
        // isn't valid!
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
          status: {
            condition: 'success'
          }
        }))
        console.log('Successfully done!')
      } else {
        const body = await res.json()

        this.setState(Object.assign({}, this.state, {
          status: {
            condition: 'failure',
            logID: body.log_id,
            reason: body.message,
          }
        }))
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
      const [isField, fieldName] = validFieldName(field)
      if (isField) {
        const element = fields[fieldName]
        
        newFields[fieldName] = this.updateField(fieldName, element.value)
      }
    }

    return newFields
  }

  changeHandler = (field: string, event: SyntheticEvent<TargetElements>) => {
    const newValue = event.currentTarget.value

    const [isField, fieldName] = validFieldName(field)
    if (isField) {
      const newState: SubscriptionFormState = Object.assign({}, this.state, {
        fields: Object.assign({}, this.state.fields, {
          [field]: this.updateField(fieldName, newValue)
        })
      })

      this.setState(newState)
    }
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
      status,
      loading
    } = this.state
    return (
      <FormLayout loading={loading} status={status}
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
              small,
              centered
            } = fields[fieldName]

            const toPass = {
              id,
              label,
              control,
              icon,
              options,
              type,
              required,
              small,
              centered
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
