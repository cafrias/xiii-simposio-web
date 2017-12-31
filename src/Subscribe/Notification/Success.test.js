import React from 'react'
import { shallow } from 'enzyme'

import Success from './Success'

test('matches snapshot', () => {
  const wrapper = shallow(<Success/>)

  expect(wrapper).toMatchSnapshot()
})
