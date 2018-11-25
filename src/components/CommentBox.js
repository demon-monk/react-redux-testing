import React, {PureComponent} from 'react'

export default class CommentBox extends PureComponent {

    state = {
        comment: ''
    }

    onTextAreaChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            comment: ''
        })
    }

    render () {

        return (
            <form onSubmit={this.onSubmit}>
                <h4>add comment</h4>
                <textarea value={this.state.comment} onChange={this.onTextAreaChange} />
                <button>Submit comment</button>
            </form>
        )
    }
}