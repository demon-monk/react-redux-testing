import commentsReducer from 'reducers/comments'
import {SAVE_COMMENT} from 'actions/types'

it('should return the correct state when receives SAVE_COMMENT action type', () => {
    const newComment = 'New Comment'
    const action = {
        type: SAVE_COMMENT,
        payload: newComment,
    }
    const newState = commentsReducer([], action)
    expect(newState).toEqual([newComment])
})

it('should return the old state when received unknown action type', () => {
    const oldState = ['Old Comment']
    expect(commentsReducer(oldState, {})).toEqual(oldState)
})