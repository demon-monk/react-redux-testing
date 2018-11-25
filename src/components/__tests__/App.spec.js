import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App' 

describe('App.js', () => {
    let div;
    beforeEach(() => {
        div = document.createElement('div')
        ReactDOM.render(<App/>, div)
    })
    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div)
    })
    it('show comment box', () => {
        expect(div.innerHTML).toContain('commentBox')
    })
})