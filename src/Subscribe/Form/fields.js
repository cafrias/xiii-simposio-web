// @flow
import validators from './validators'

import Input from '../fields/Input'
import Select from '../fields/Select'
import TextArea from '../fields/TextArea'
import Radio from '../fields/Radio'

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
  | 'acompanantes'
  | 'ponencia_presenta'
  | 'ponencia_institucion'
  | 'ponencia_titulo'
  | 'ponencia_area'
  | 'ponencia_coautores'

type OptionsObject = {|
  val: any,
  label: string  
|}

type OptionsArray = string | OptionsObject

type FieldsObject = {
  [FormField]: {|
    required: boolean,
    validator: (value: mixed) => boolean,
    control: StatelessFunctionalComponent<Object>,
    id: string,
    set: (value: string) => mixed,
    requiredIf?: string,
    label: string,
    type?: string,
    icon?: string,
    options?: OptionsArray[]
  |}
}

const setters = {
  string: (val: string): string => val,
  boolean: (val: string): boolean => val === 'true',
  int: (val: string): number => val ? parseInt(val, 10) : 0,
  float: (val: string): number => val ? parseFloat(val) : 0
}

const fields: FieldsObject =  {
  nombre: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'nombres',
    label: 'Nombre(s)',
    set: setters.string
  },
  apellido: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'apellido',
    label: 'Apellido(s)',
    set: setters.string
  },
  documento: {
    required: true,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'documento',
    label: 'Documento de Identidad',
    set: setters.int
  },
  telefono: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'telefono',
    label: 'Teléfono',
    icon: 'fa-phone',
    set: setters.int
  },
  celular: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'celular',
    label: 'Celular',
    icon: 'fa-mobile',
    set: setters.int
  },
  fax: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'fax',
    label: 'Fax',
    icon: 'fa-fax',
    set: setters.int
  },
  email: {
    required: true,
    validator: validators.email,
    control: Input,
    type: 'email',
    id: 'email',
    label: 'Email',
    icon: 'fa-envelope',
    set: setters.string
  },
  direccion: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'direccion',
    label: 'Dirección',
    icon: 'fa-map-marker',
    set: setters.string
  },
  zip: {
    required: true,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'zip',
    label: 'Código Postal',
    set: setters.int,
  },
  localidad: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'localidad',
    label: 'Localidad',
    icon: 'fa-building',
    set: setters.string
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
    icon: 'fa-globe',
    set: setters.string
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
    icon: 'fa-money',
    set: setters.float
  },
  arancel_adicional: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'arancel_adicional',
    label: 'Adicional',
    set: setters.float
  },
  arancel_pago: {
    required: true,
    validator: validators.any,
    control: TextArea,
    id: 'arancel_pago',
    label: 'Forma de pago (detallar Nº de recibo)',
    set: setters.string
  },
  acompanantes: {
    required: true,
    validator: validators.any,
    control: Select,
    options: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5'
    ],
    id: 'acompanantes',
    label: 'Acompañantes',
    set: setters.int
  },
  ponencia_presenta: {
    required: true,
    validator: validators.boolean,
    control: Radio,
    id: 'ponencia_presenta',
    label: '¿Presenta Ponencia?',
    set: setters.boolean
  },
  ponencia_titulo: {
    required: false,
    requiredIf: 'presenta_ponencia',
    validator: validators.any,
    control: Input,
    id: 'ponencia_titulo',
    label: 'Título de la Ponencia',
    set: setters.string
  },
  ponencia_area: {
    required: false,
    requiredIf: 'presenta_ponencia',
    validator: validators.any,
    control: Input,
    id: 'ponencia_area',
    label: 'Área',
    set: setters.string
  },
  ponencia_coautores: {
    required: false,
    requiredIf: 'presenta_ponencia',
    validator: validators.any,
    control: Input,
    id: 'ponencia_coautores',
    label: 'Co-Autor/es',
    set: setters.string
  },
  ponencia_institucion: {
    required: false,
    requiredIf: 'presenta_ponencia',
    validator: validators.any,
    control: Input,
    id: 'ponencia_instituciones',
    label: 'Institución',
    set: setters.string
  }
}

export default fields
