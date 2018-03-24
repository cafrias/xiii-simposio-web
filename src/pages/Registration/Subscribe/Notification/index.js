import React from 'react'

import Success from './Success'
import Failure from './Failure'

import type { FormStatus } from '../Form'

const Notification = ({condition, reason, logID}: FormStatus) => {
  let component
  switch(condition) {
  case 'failure':
    component = <Failure reason={reason} logID={logID}/>
    break
  case 'success':
    component = <Success/>
    break
  default:
    component = null
  }

  return (
    <div className="columns">
      <div className="column">
        { component }
      </div>
    </div>
  )
}

export default Notification
