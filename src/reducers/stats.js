import { SET_LEVEL, SET_MISSED, SET_SCORE, SET_TIMER_ALERT } from '../actions/actionTypes'

const initialState = {
    level: 1,
    missed: 0,
    score: 0,
    timerAlert: false,
    molesToProgress: 10
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TIMER_ALERT:
            return {
                ...state,
                timerAlert: action.timerAlert
            }
        case SET_LEVEL:
            return {
                ...state,
                level: action.level
            }
        case SET_MISSED:
            return {
                ...state,
                missed: action.missed
            }
        case SET_SCORE:
            return {
                ...state,
                score: action.score
            }
        default:
            return state
    }
}
