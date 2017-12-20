// @flow
import React from 'react'

type Icon = {
  icon: string
}

const LeftIcon = ({ icon }: Icon) =>
  <div className="icon is-small is-left">
    <i className={`fa ${icon}`}></i>
  </div>

export default LeftIcon
