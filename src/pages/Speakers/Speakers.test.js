import React from 'react'
import { mount, shallow } from 'enzyme'

import Speakers from './index'

it('should render without errors', () => {
  const wrapper = mount(<Speakers/>)
  expect(wrapper).toHaveLength(1)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Speakers/>)
  expect(wrapper).toMatchSnapshot()
})
