import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {saveComment, fetchComments} from 'actions'

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
            <div>
                <form onSubmit={this.onSubmit}>
                    <h4>add comment</h4>
                    <textarea value={this.state.comment} onChange={this.onTextAreaChange} />
                    <button>Submit comment</button>
                </form>
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default connect(null, {saveComment, fetchComments})(CommentBox)