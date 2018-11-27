import {saveComment} from 'actions'
import {SAVE_COMMENT} from 'actions/types'

describe('saveComment test', () => {
    it('should return the correct type', () => {
        const action = saveComment()
        expect(action.type).toEqual(SAVE_COMMENT)
    })

    it('should return the correct payload', () => {
        const payload = 'new Comment'
        const action = saveComment(payload)
        expect(action.payload).toEqual(payload)
    })
})