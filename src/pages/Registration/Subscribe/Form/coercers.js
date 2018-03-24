// @flow
type CoercersMap = {
  [string]: (value: mixed) => mixed,
}

const coercers: CoercersMap = {
  identity: value => value,
  number: value => Number(value),
  boolean: value => value === 'true' || value === 'false',
}

export default coercers
