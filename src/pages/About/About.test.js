import React from 'react'
import { mount, shallow } from 'enzyme'

import About from './index'

it('should render without errors', () => {
  const wrapper = mount(<About/>)
  expect(wrapper).toHaveLength(1)
})

it('should match snapshot', () => {
  const wrapper = shallow(<About/>)
  expect(wrapper).toMatchSnapshot()
})
