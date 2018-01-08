// @flow
import React from 'react'

type Icon = {
  icon: string
}

const LeftIcon = ({ icon }: Icon) =>
  <span className="icon is-small is-left">
    <i className={`fa ${icon}`}></i>
  </span>

export default LeftIcon
