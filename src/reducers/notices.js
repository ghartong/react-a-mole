import { SET_NOTICE } from '../actions/actionTypes'

const initialState = {
    type: '',
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTICE:
            return {
                ...state,
                type: action.notice,
                message: action.message
            }
        default:
            return state
    }
}
