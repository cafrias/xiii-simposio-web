import React from 'react'
import { shallow } from 'enzyme'

import Submit from './Submit'

const reqProps = {
  id: 'id',
  loading: false,
  success: false,
  failure: false,
}

test('renders with basic props', () => {
  const wrapper = shallow(<Submit {...reqProps} />)

  expect(wrapper.find(`#${reqProps.id}`)).toHaveLength(1)
})

test('matches snapshot', () => {
  const wrapper = shallow(<Submit {...reqProps}/>)

  expect(wrapper).toMatchSnapshot()
})

test('renders loading class', () => {
  const props = Object.assign({}, reqProps, {
    loading: true
  })
  const wrapper = shallow(<Submit {...props}/>)

  expect(wrapper.find('.is-loading')).toHaveLength(1)
})
