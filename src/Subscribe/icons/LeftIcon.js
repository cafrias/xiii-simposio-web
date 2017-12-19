// @flow
import React from 'react'

type Icon = {
  icon: string
}

const LeftIcon = ({ icon }: Icon) =>
  <div class="icon is-small is-left">
    <i class={`fa ${icon}`}></i>
  </div>

export default LeftIcon
