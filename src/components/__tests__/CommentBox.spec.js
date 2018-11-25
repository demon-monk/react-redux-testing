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

it('should show the correct value when use type into some text', () => {
    const newCommentContent = 'new comment'
    wrapper.find('textarea').simulate('change', {
        target: { value: newCommentContent }
    })
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual(newCommentContent)
})

it('should clear the textarea when submit the button', () => {
    wrapper.find('textarea').simulate('change', {
        target: { value: 'some text'}
    })
    wrapper.update()
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
})