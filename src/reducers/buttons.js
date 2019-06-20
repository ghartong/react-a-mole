import { SHOW_PAUSE, HIDE_PAUSE, SHOW_RESET, HIDE_RESET, SHOW_START, HIDE_START } from '../actions/actionTypes'

const initialState = {
    hidePauseBtn: true,
    hideStartBtn: false,
    hideResetBtn: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PAUSE:
            return {
                ...state,
                hidePauseBtn: action.hide
            }
        case HIDE_PAUSE:
            return {
                ...state,
                hidePauseBtn: action.hide
            }
        case SHOW_RESET:
            return {
                ...state,
                hideResetBtn: action.hide
            }
        case HIDE_RESET:
            return {
                ...state,
                hideResetBtn: action.hide
            }
        case SHOW_START:
            return {
                ...state,
                hideStartBtn: action.hide
            }
        case HIDE_START:
            return {
                ...state,
                hideStartBtn: action.hide
            }
        default:
            return state
    }
}
