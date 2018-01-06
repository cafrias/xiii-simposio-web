import React from 'react'
import { mount, shallow } from 'enzyme'

import Registration from './index'

it('should render without errors', () => {
  const wrapper = mount(<Registration/>)
  expect(wrapper).toHaveLength(1)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Registration/>)
  expect(wrapper).toMatchSnapshot()
})
