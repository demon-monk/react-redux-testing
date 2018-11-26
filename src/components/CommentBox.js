import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {saveComment} from 'actions'

class CommentBox extends PureComponent {

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
        this.props.saveComment(this.state.comment)
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

export default connect(null, {saveComment})(CommentBox)