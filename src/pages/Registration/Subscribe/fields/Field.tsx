import * as React from "react";

import Missing from "../messages/Missing";
import Invalid from "../messages/Invalid";

// TYPES _______________________________________________________________________

import { FieldState, TargetElements } from "../Form/index.js";
import { OptionsArray } from "../Form/fields";

type ControlFieldProps = {
  id: string;
  changeHandler: React.ChangeEventHandler<TargetElements>;
  blurHandler: (e: React.SyntheticEvent) => void;
  icon?: string;
  type?: string;
  options?: OptionsArray[];
  small?: string;
  centered?: boolean;
};

export type ControlProps = ControlFieldProps & {
  value: string;
  hasError?: boolean;
};

export type FieldProps = ControlFieldProps & {
  label: string;
  control: React.SFC<ControlProps>;
  state: FieldState;
  required: boolean;
  className?: string;
};

// CONSTANTS ___________________________________________________________________

const isMissing = ({ touched, missing }: FieldState): boolean =>
  touched && missing;
const isInvalid = ({ touched, invalid }: FieldState): boolean =>
  touched && invalid;
const hasError = (state: FieldState): boolean =>
  isMissing(state) || isInvalid(state);

// COMPONENT ___________________________________________________________________

const Field = (props: FieldProps) => {
  // Workaroud because of weird bug on Flow.
  const state: FieldState = props.state;
  const control: React.SFC<ControlProps> = props.control;
  const {
    id,
    label,
    changeHandler,
    blurHandler,
    options,
    required,
    className = "",
    icon = "",
    type = "",
    small,
    centered
  } = props;

  const controlProps: ControlProps = {
    id,
    icon,
    type,
    options,
    value: state.value,
    changeHandler,
    blurHandler,
    hasError: hasError(state),
    small,
    centered
  };

  return (
    <div className={`field ${className}`}>
      <label
        htmlFor={id}
        className={`label ${centered ? "has-text-centered" : ""}`}
      >
        {label}
        {required ? <small> *</small> : null}
      </label>
      {control(controlProps)}
      {isMissing(state) ? <Missing /> : null}
      {isInvalid(state) ? <Invalid /> : null}
    </div>
  );
};

export default Field;
