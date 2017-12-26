// @flow
import React from 'react'

// TYPES _______________________________________________________________________

import type { ControlProps } from './Field'


// COMPONENT ___________________________________________________________________

const Input = (props: ControlProps) => {
  const {
    id,
    changeHandler,
    blurHandler,
  } = props
  
  return (
    <div className="control flx justify-center">
      <label className="radio">
        <input type="radio" name={id}
          onChange={changeHandler}
          onBlur={blurHandler}
          value={true}/>
        Si
      </label>
      <label className="radio">
        <input type="radio" name={id}
          onChange={changeHandler}
          onBlur={blurHandler}
          value={false}/>
        No
      </label>
    </div>
  )
}

export default Input
