import React from 'react'
import {mount} from 'enzyme'
import CommentBox from '../CommentBox'

let wrapper
beforeEach(() => {
    wrapper = mount(<CommentBox/>)
})

afterEach(() => {
    // always unmount when use enzyme fullDOM render
    wrapper.unmount()
})

it('should has a textarea input and a submit button', () => {
    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
})