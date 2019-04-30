import validators from "./validators";
import coercers from "./coercers";

import Input from "../fields/Input";
import Select from "../fields/Select";
import TextArea from "../fields/TextArea";
import Radio from "../fields/Radio";

export type FormField =
  | "nombre"
  | "apellido"
  | "documento"
  | "telefono"
  | "celular"
  | "fax"
  | "email"
  | "direccion"
  | "zip"
  | "localidad"
  | "pais"
  | "arancel_categoria"
  | "arancel_adicional"
  | "arancel_pago"
  | "acompanantes"
  | "ponencia_presenta"
  | "institucion"
  | "ponencia_titulo"
  | "ponencia_area"
  | "ponencia_coautores";

export function validFieldName(value: string): [boolean, FormField] {
  switch (value) {
    case "nombre":
    case "apellido":
    case "documento":
    case "telefono":
    case "celular":
    case "fax":
    case "email":
    case "direccion":
    case "zip":
    case "localidad":
    case "pais":
    case "arancel_categoria":
    case "arancel_adicional":
    case "arancel_pago":
    case "acompanantes":
    case "ponencia_presenta":
    case "institucion":
    case "ponencia_titulo":
    case "ponencia_area":
    case "ponencia_coautores":
      return [true, value as FormField];
    default:
      return [false, "nombre"];
  }
}

type OptionsObject = {
  val: any;
  label: string;
};

export type OptionsArray = string | OptionsObject;

export interface FieldDescriptor {
  required: boolean;
  validator: (value: any) => boolean;
  coercer: (value: any) => any;
  control: React.SFC<any>;
  id: string;
  default?: any;
  requiredIf?: string;
  label: string;
  type?: string;
  icon?: string;
  options?: OptionsArray[];
  small?: string;
  centered?: boolean;
}
export type FieldsObject = { [k: string]: FieldDescriptor };

const fields: FieldsObject = {
  nombre: {
    required: true,
    validator: validators.any,
    coercer: coercers.identity,
    control: Input,
    id: "nombre",
    label: "Nombre(s)"
  },
  apellido: {
    required: true,
    validator: validators.any,
    coercer: coercers.identity,
    control: Input,
    id: "apellido",
    label: "Apellido(s)"
  },
  documento: {
    required: true,
    validator: validators.number,
    coercer: coercers.number,
    control: Input,
    type: "number",
    id: "documento",
    label: "Documento de Identidad"
  },
  telefono: {
    required: false,
    validator: validators.number,
    coercer: coercers.number,
    control: Input,
    type: "number",
    id: "telefono",
    label: "Teléfono",
    icon: "fa-phone"
  },
  celular: {
    required: false,
    validator: validators.number,
    coercer: coercers.number,
    control: Input,
    type: "number",
    id: "celular",
    label: "Celular",
    icon: "fa-mobile"
  },
  fax: {
    required: false,
    validator: validators.number,
    coercer: coercers.number,
    control: Input,
    type: "number",
    id: "fax",
    label: "Fax",
    icon: "fa-fax"
  },
  email: {
    required: true,
    validator: validators.email,
    coercer: coercers.identity,
    control: Input,
    type: "email",
    id: "email",
    label: "Email",
    icon: "fa-envelope"
  },
  institucion: {
    required: false,
    validator: validators.any,
    coercer: coercers.identity,
    control: Input,
    id: "institucion",
    label: "Institución"
  },
  direccion: {
    required: true,
    validator: validators.any,
    coercer: coercers.identity,
    control: Input,
    id: "direccion",
    label: "Dirección",
    icon: "fa-map-marker"
  },
  zip: {
    required: true,
    validator: validators.number,
    coercer: coercers.number,
    control: Input,
    type: "number",
    id: "zip",
    label: "Código Postal"
  },
  localidad: {
    required: true,
    validator: validators.any,
    coercer: coercers.identity,
    control: Input,
    id: "localidad",
    label: "Localidad",
    icon: "fa-building"
  },
  pais: {
    required: true,
    validator: validators.any,
    coercer: coercers.identity,
    control: Select,
    options: ["Argentina"],
    id: "pais",
    label: "País",
    icon: "fa-globe",
    default: "Argentina"
  },
  arancel_categoria: {
    required: true,
    validator: validators.categorias,
    coercer: coercers.identity,
    control: Select,
    options: [
      { val: "estudiante_untdf", label: "Sin cargo - Estudiantes UNTDF" },
      {
        val: "estudiante_otro",
        label: "$500 - Estudiantes otras instituciones"
      },
      { val: "docente_untdf", label: "$1900 - Docentes UNTDF*" },
      { val: "matriculado_cpcetf", label: "$2400 - Matriculados CPCETF*" },
      { val: "general", label: "$3200 - Docentes/General*" }
    ],
    id: "arancel_categoria",
    label: "Arancel",
    icon: "fa-money",
    default: "estudiante_untdf",
    small:
      "* Se incluye: Material, Certificado de Asistencia/Ponencia, Cóctel de Bienvenida y Cena de Camaradería"
  },
  arancel_adicional: {
    required: false,
    validator: validators.number,
    coercer: coercers.number,
    control: Input,
    type: "number",
    id: "arancel_adicional",
    label: "Adicional"
  },
  arancel_pago: {
    required: true,
    validator: validators.any,
    coercer: coercers.identity,
    control: TextArea,
    id: "arancel_pago",
    label: "Forma de pago (detallar Nº de recibo)"
  },
  acompanantes: {
    required: true,
    validator: validators.number,
    coercer: coercers.number,
    control: Select,
    options: ["0", "1", "2", "3", "4", "5"],
    id: "acompanantes",
    label: "Acompañantes",
    default: "0"
  },
  ponencia_presenta: {
    required: true,
    validator: validators.boolean,
    coercer: coercers.boolean,
    control: Radio,
    id: "ponencia_presenta",
    label: "¿Presenta Ponencia?",
    default: false,
    centered: true
  },
  ponencia_titulo: {
    required: false,
    requiredIf: "presenta_ponencia",
    validator: validators.any,
    coercer: coercers.identity,
    control: Input,
    id: "ponencia_titulo",
    label: "Título de la Ponencia"
  },
  ponencia_area: {
    required: false,
    requiredIf: "presenta_ponencia",
    validator: validators.any,
    coercer: coercers.identity,
    control: Input,
    id: "ponencia_area",
    label: "Área"
  },
  ponencia_coautores: {
    required: false,
    requiredIf: "presenta_ponencia",
    validator: validators.any,
    coercer: coercers.identity,
    control: Input,
    id: "ponencia_coautores",
    label: "Co-Autor/es"
  }
};

export default fields;
