import React from "react";

import LeftIcon from "../icons/LeftIcon";

// TYPES _______________________________________________________________________

import { ControlProps } from "./Field";

// COMPONENT ___________________________________________________________________

const TextArea = (props: ControlProps) => {
  const { id, hasError, value, changeHandler, blurHandler, icon = "" } = props;

  const controlClassName = `control has-icons-right ${
    icon ? "has-icons-left" : ""
  }`;

  return (
    <div className={controlClassName}>
      <textarea
        id={id}
        name={id}
        onChange={changeHandler}
        onBlur={blurHandler}
        className={`input ${hasError ? "is-danger" : ""}`}
        value={value}
      />
      {icon ? <LeftIcon icon={icon} /> : null}
    </div>
  );
};

export default TextArea;
