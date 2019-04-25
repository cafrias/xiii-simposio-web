import validator from "validator";

type ValidatorsMap = {
  [k: string]: (value: any) => boolean;
};

function categorias(value: string) {
  switch (value) {
    case "estudiante_untdf":
    case "estudiante_otro":
    case "docente_untdf":
    case "matriculado_cpcetf":
    case "general":
      return true;
    default:
      return false;
  }
}

const validators: ValidatorsMap = {
  any: value => true,
  number: value => validator.isNumeric(String(value)),
  email: value => validator.isEmail(String(value)),
  boolean: value => validator.isBoolean(String(value)),
  categorias
};

export default validators;
