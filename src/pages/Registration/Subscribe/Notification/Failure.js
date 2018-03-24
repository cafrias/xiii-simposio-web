import React from 'react'

import type { StatusReason } from '../Form'

// MESSAGES ____________________________________________________________________

type MessagesTypes = {
  [StatusReason]: string
}

type FailureType = {
  reason: string,
  logID: string
}

const Failure = ({reason, logID}: FailureType) =>
  <p className="notification is-danger">
    ERROR! <br/>
    {reason} <br/>
    Si el problema persiste, contáctese con nosotros a:{' '}
    <a href="mailto:ponencias.simposio@gmail.com">ponencias.simposio@gmail.com</a>.
    <br/>
    { logID ? `Número de seguimiento de error: ${logID}` : '' }
  </p>

export default Failure
