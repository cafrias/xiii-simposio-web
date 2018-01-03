import React from 'react'
import { mount, shallow } from 'enzyme'

import Schedule from './index'

it('should render without errors', () => {
  const wrapper = mount(<Schedule/>)
  expect(wrapper).toHaveLength(1)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Schedule/>)
  expect(wrapper).toMatchSnapshot()
})
