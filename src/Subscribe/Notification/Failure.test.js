import React from 'react'
import { shallow } from 'enzyme'

import Failure, { messages } from './Failure'

const reasons = [
  'invalid',
  'duplicated',
  'unknown',
  'internal'
]

test('renders right message according to fixture', () => {
  reasons.forEach(reason => {
    let wrapper = shallow(<Failure reason={reason} />)

    const notifText = wrapper.find('.notification').text()
    expect(notifText).toEqual(expect.stringContaining(messages[reason]))
  })
})
