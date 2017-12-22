// @flow
import validators from './validators'

import Input from '../fields/Input'
import Select from '../fields/Select'
import TextArea from '../fields/TextArea'

import type { StatelessFunctionalComponent } from 'react'

export type FormField =
  | 'nombre'
  | 'apellido'
  | 'documento'
  | 'telefono'
  | 'celular'
  | 'fax'
  | 'email'
  | 'direccion'
  | 'zip'
  | 'localidad'
  | 'pais'
  | 'arancel_base'
  | 'arancel_adicional'
  | 'arancel_pago'

type FieldsObject = {
  [FormField]: {|
    required: boolean,
    validator: (value: mixed) => boolean,
    control: StatelessFunctionalComponent<Object>,
    id: string,
    label: string,
    type?: string,
    icon?: string,
    options?: string[]
  |}
}

const fields: FieldsObject =  {
  nombre: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'nombres',
    label: 'Nombre(s)'
  },
  apellido: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'apellido',
    label: 'Apellido(s)'
  },
  documento: {
    required: true,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'documento',
    label: 'Documento de Identidad'
  },
  telefono: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'telefono',
    label: 'Teléfono',
    icon: 'fa-phone'
  },
  celular: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'celular',
    label: 'Celular',
    icon: 'fa-mobile'
  },
  fax: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'fax',
    label: 'Fax',
    icon: 'fa-fax'
  },
  email: {
    required: true,
    validator: validators.email,
    control: Input,
    type: 'email',
    id: 'email',
    label: 'Email',
    icon: 'fa-envelope'
  },
  direccion: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'direccion',
    label: 'Dirección',
    icon: 'fa-map-marker'
  },
  zip: {
    required: true,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'zip',
    label: 'Código Postal',
  },
  localidad: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'localidad',
    label: 'Localidad',
    icon: 'fa-building'
  },
  pais: {
    required: true,
    validator: validators.any,
    control: Select,
    options: [
      'Argentina',
      'Bolivia',
      'Brasil',
      'Chile',
      'Paraguay',
      'Uruguay',
      'Otro'
    ],
    id: 'pais',
    label: 'País',
    icon: 'fa-globe'
  },
  arancel_base: {
    required: true,
    validator: validators.number,
    control: Select,
    options: [
      'asd',
      'dsa'
    ],
    id: 'arancel_base',
    label: 'Arancel',
    icon: 'fa-money'
  },
  arancel_adicional: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'arancel_adicional',
    label: 'Adicional',
  },
  arancel_pago: {
    required: true,
    validator: validators.any,
    control: TextArea,
    id: 'arancel_pago',
    label: 'Forma de pago (detallar Nº de recibo)',
  }
}

export default fields
