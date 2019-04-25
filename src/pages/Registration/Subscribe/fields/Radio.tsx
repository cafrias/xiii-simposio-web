import React from "react";

// TYPES _______________________________________________________________________

import { ControlProps } from "./Field";

// COMPONENT ___________________________________________________________________

const Input = (props: ControlProps) => {
  const { id, changeHandler, blurHandler, centered } = props;

  const controlClassName = `control ${centered ? "flx justify-center" : ""}`;

  return (
    <div className={controlClassName}>
      <label className="radio">
        <input
          type="radio"
          name={id}
          onChange={changeHandler}
          onBlur={blurHandler}
          value="true"
        />
        Si
      </label>
      <label className="radio">
        <input
          type="radio"
          name={id}
          onChange={changeHandler}
          onBlur={blurHandler}
          value="false"
        />
        No
      </label>
    </div>
  );
};

export default Input;
