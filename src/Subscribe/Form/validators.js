import validator from 'validator'

export default {
  any: value => true,
  number: value => validator.isNumeric(String(value)),
  email: value => validator.isEmail(String(value))
}
