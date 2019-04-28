type CoercersMap = {
  [k: string]: (value: any) => any;
};

const coercers: CoercersMap = {
  identity: value => value,
  number: value => Number(value),
  boolean: value => value === "true"
};

export default coercers;