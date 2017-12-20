// @flow
import React from 'react'
import FormLayout from './FormLayout'

import Field from '../fields/Field'

import fields from './fields'

import type { StatelessFunctionalComponent } from 'react'
import type { FieldProps } from '../fields/Field'

type FormFields = {|
  nombre: StatelessFunctionalComponent<FieldProps>,
  apellido: StatelessFunctionalComponent<FieldProps>,
  documento: StatelessFunctionalComponent<FieldProps>,
  telefono: StatelessFunctionalComponent<FieldProps>,
  celular: StatelessFunctionalComponent<FieldProps>,
  fax: StatelessFunctionalComponent<FieldProps>,
  email: StatelessFunctionalComponent<FieldProps>,
  direccion: StatelessFunctionalComponent<FieldProps>,
  zip: StatelessFunctionalComponent<FieldProps>,
  localidad: StatelessFunctionalComponent<FieldProps>,
  pais: StatelessFunctionalComponent<FieldProps>,
|}

class SubscriptionForm extends React.Component<any> {
  construct() {
    
  }

  render() {
    const fieldKeys = Object.keys(fields)
    return (
      <FormLayout>
        {
          fieldKeys.map((field, idx) => {
            const {
              id,
              label,
              control,
              icon = '',
              options = [],
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
