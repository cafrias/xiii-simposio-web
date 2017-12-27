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

export type OptionsArray = string | OptionsObject

type FieldsObject = {
  [FormField]: {|
    required: boolean,
    validator: (value: mixed) => boolean,
    control: StatelessFunctionalComponent<Object>,
    id: string,
    default?: any,
    requiredIf?: string,
    label: string,
    type?: string,
    icon?: string,
    options?: OptionsArray[],
    small?: string
  |}
}

const fields: FieldsObject =  {
  nombre: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'nombre',
    label: 'Nombre(s)',
  },
  apellido: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'apellido',
    label: 'Apellido(s)',
  },
  documento: {
    required: true,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'documento',
    label: 'Documento de Identidad',
  },
  telefono: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'telefono',
    label: 'Teléfono',
    icon: 'fa-phone',
  },
  celular: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'celular',
    label: 'Celular',
    icon: 'fa-mobile',
  },
  fax: {
    required: false,
    validator: validators.number,
    control: Input,
    type: 'number',
    id: 'fax',
    label: 'Fax',
    icon: 'fa-fax',
  },
  email: {
    required: true,
    validator: validators.email,
    control: Input,
    type: 'email',
    id: 'email',
    label: 'Email',
    icon: 'fa-envelope',
  },
  direccion: {
    required: true,
    validator: validators.any,
    control: Input,
    id: 'direccion',
    label: 'Dirección',
    icon: 'fa-map-marker',
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
    icon: 'fa-building',
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
    default: 'Argentina'
  },
  arancel_base: {
    required: true,
    validator: validators.number,
    control: Select,
    options: [
      { val: '0', label: 'Sin cargo - Estudiantes UNTDF' },
      { val: '1', label: '$350 - Estudiantes otras instituciones' },
      { val: '2', label: '$1600 - Docentes UNTDF*' },
      { val: '3', label: '$2000 - Matriculados CPCETF*' },
      { val: '4', label: '$2700 - Docentes/General*' },
    ],
    id: 'arancel_base',
    label: 'Arancel',
    icon: 'fa-money',
    default: '0',
    small: '* Se incluye: Material, Certificado de Asistencia/Ponencia, Cóctel de Bienvenida y Cena de Camaradería'
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
    default: '0'
  },
  ponencia_presenta: {
    required: true,
    validator: validators.boolean,
    control: Radio,
    id: 'ponencia_presenta',
    label: '¿Presenta Ponencia?',
    default: 'false'
  },
  ponencia_titulo: {
    required: false,
    requiredIf: 'presenta_ponencia',
    validator: validators.any,
    control: Input,
    id: 'ponencia_titulo',
    label: 'Título de la Ponencia',
  },
  ponencia_area: {
    required: false,
    requiredIf: 'presenta_ponencia',
    validator: validators.any,
    control: Input,
    id: 'ponencia_area',
    label: 'Área',
  },
  ponencia_coautores: {
    required: false,
    requiredIf: 'presenta_ponencia',
    validator: validators.any,
    control: Input,
    id: 'ponencia_coautores',
    label: 'Co-Autor/es',
  },
  ponencia_institucion: {
    required: false,
    requiredIf: 'presenta_ponencia',
    validator: validators.any,
    control: Input,
    id: 'ponencia_institucion',
    label: 'Institución',
  }
}

export default fields
