import React from 'react'
import FormLayout from './FormLayout'

import Field from '../fields/Field'
import Input from '../fields/Input'
import Select from '../fields/Select'
import Submit from '../fields/Submit'

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

class SubscriptionForm extends React.Component {
  construct() {
    
  }

  render() {
    return (
      <FormLayout>
        {/* Contact information */}
        {
          fields.map((field) => {
            const {
              id,
              label,
              control,
              icon = '',
              options = [],
            } = field
            return (
              <Field id={id} label={label} control={control} icon={icon} options={options} />
            )
          })
        }
      </FormLayout>
    )
  }
}

export default SubscriptionForm
