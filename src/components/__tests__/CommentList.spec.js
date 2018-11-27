import React from 'react'
import {mount} from 'enzyme'
import Root from 'Root'
import CommentList from 'components/CommentList'

let wrapper
let initialState
beforeEach(() => {
    initialState = {
        comments: ['comment1', 'comment2']
    }
    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

afterEach(() => {
    wrapper.unmount()
})

it('should render the same number of <li>s with the length of comments', () => {
    expect(wrapper.find('li').length).toEqual(initialState.comments.length)
})

it('should show the correct text', () => {
    expect(wrapper.render().text()).toContain(initialState.comments[0])
    expect(wrapper.render().text()).toContain(initialState.comments[1])
})