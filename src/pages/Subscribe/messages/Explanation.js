// @flow
import React from 'react'

import type { Message } from './_types'

const Explanation = ({ message }: Message) =>
  <small>{ message }</small>

export default Explanation
