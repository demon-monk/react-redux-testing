import React from 'react'
import {shallow} from 'enzyme'
import App from 'components/App' 
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList';

describe('App.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App/>)
    })
    afterEach(() => {
        
    })
    it('should show comment box', () => {
        expect(wrapper.find(CommentBox).length).toBeGreaterThanOrEqual(1)
    })
    it('should show comment list', () => {
        expect(wrapper.find(CommentList).length).toBeGreaterThanOrEqual(1)
    })
})