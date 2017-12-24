// @flow
import validator from 'validator'

type ValidatorsMap = {
  [string]: (value: mixed) => boolean,
}

const validators: ValidatorsMap = {
  any: value => true,
  number: value => validator.isNumeric(String(value)),
  email: value => validator.isEmail(String(value)),
  boolean: value => validator.isBoolean(String(value))
}

export default validators
