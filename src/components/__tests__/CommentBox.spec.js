import React from 'react'
import {mount} from 'enzyme'
import CommentBox from '../CommentBox'
import Root from 'Root'
let wrapper
beforeEach(() => {
    wrapper = mount(<Root><CommentBox/></Root>)
})

afterEach(() => {
    // always unmount when use enzyme fullDOM render
    wrapper.unmount()
})

it('should has a textarea input and a submit button', () => {
    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
})

// describe is used to organize test cases with the same setup in one test suite
describe('test handlers', () => {
    const newCommentContent = 'new comment'
    
    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: { value: newCommentContent }
        })
        wrapper.update()
    })

    it('should show the correct value when use type into some text', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual(newCommentContent)
    })
    
    it('should clear the textarea when submit the button', () => {
        wrapper.find('form').simulate('submit')
        wrapper.update()
        expect(wrapper.find('textarea').prop('value')).toEqual('')
    })
})
