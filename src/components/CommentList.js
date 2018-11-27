import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class CommentList extends PureComponent {
    renderList () {
        return this.props.comments.map(comment => <li key={comment}>{comment}</li>)
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps (state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList)
