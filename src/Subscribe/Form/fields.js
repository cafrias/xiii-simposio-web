import validators from './validators'

import Input from '../fields/Input'
import Select from '../fields/Select'

export default {
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
  }
}