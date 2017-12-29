// @flow
import React from 'react'

type SubmitButtonProps = {
  id: string,
  loading: boolean,
  failure: boolean,
  success: boolean
}

const Icon = (icon: string) =>
  <span className={icon}></span>

const SubmitButton = ({id, loading, success, failure}: SubmitButtonProps) => {
  const className = `
    button is-link
    ${loading ? 'is-loading' : ''}
    ${failure ? 'is-danger' : ''}
    ${success ? 'is-success' : ''}
    `

  return (
    <div className="control">
      <button id={id} className={className} type="submit">
        { failure ? Icon('fa fa-times') : null }
        { success ? Icon('fa fa-check') : null }
        Enviar
      </button>
    </div>
  )
}

export default SubmitButton
