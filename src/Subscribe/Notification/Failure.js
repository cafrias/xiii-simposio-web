import React from 'react'

import type { StatusReason } from '../Form'

// MESSAGES ____________________________________________________________________

type MessagesTypes = {
  [StatusReason]: string
}

export const messages: MessagesTypes = {
  invalid: 'Algo está mal con la información que envió, por favor revise la información, e intente nuevamente. Si el problema persiste,',
  duplicated: '¡Ya se encuentra registrado! Si usted no se registró anteriormente,',
  unknown: '¡Oops, algo salió mal! Intente nuevamente más tarde. Si el problema persiste,',
  internal: '¡Oops, hubo algún error en nuestros servidores, por favor intente nuevamente más tarde. Si el problema persiste,'
}

type FailureType = {
  reason: StatusReason
}

const Failure = ({reason}: FailureType) =>
  <p className="notification is-danger">
    {messages[reason]} contáctese con nosotros a:{' '}
    <a href="mailto:ponencias.simposio@gmail.com">ponencias.simposio@gmail.com</a>
  </p>

export default Failure
