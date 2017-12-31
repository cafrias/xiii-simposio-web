// @flow
import React from 'react'

type SubmitButtonProps = {
  id: string,
  loading: boolean
}

const SubmitButton = ({id, loading}: SubmitButtonProps) => {
  const className = `
    button is-link
    ${loading ? 'is-loading' : ''}
    `

  return (
    <div className="control">
      <button id={id} className={className} type="submit">
        Enviar
      </button>
    </div>
  )
}

export default SubmitButton
