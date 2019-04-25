import React from "react";

import Explanation from "../messages/Explanation";
import LeftIcon from "../icons/LeftIcon";

// TYPES _______________________________________________________________________

import { ControlProps } from "./Field";

// COMPONENT ___________________________________________________________________

const Input = (props: ControlProps) => {
  const {
    id,
    hasError,
    value,
    changeHandler,
    blurHandler,
    icon = "",
    type = "text"
  } = props;

  const controlClassName = `control has-icons-right ${
    icon ? "has-icons-left" : ""
  }`;

  return (
    <div className={controlClassName}>
      <input
        id={id}
        name={id}
        onChange={changeHandler}
        type={type}
        onBlur={blurHandler}
        className={`input ${hasError ? "is-danger" : ""}`}
        value={value}
      />
      {type === "number" ? Explanation({ message: "* Sólo números" }) : null}
      {icon ? <LeftIcon icon={icon} /> : null}
    </div>
  );
};

export default Input;
