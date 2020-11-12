import React from 'react'
import { shallow } from 'enzyme'

import Failure from './Failure'

const reason = 'This is the message'
const logID = 'alksdjj2hh8273'

test('renders right message', () => {
  const wrapper = shallow(<Failure reason={reason} logID={logID} />)

  const notifText = wrapper.find('.notification').text()
  expect(notifText).toEqual(expect.stringContaining(reason))
  expect(notifText).toEqual(expect.stringContaining(logID))
})
