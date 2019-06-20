import { PAUSE_GAME, SET_GAME_TIME, SET_LEVEL_TIME } from '../actions/actionTypes'

const initialState = {
    isGamePaused: false,
    gameTime: 60,
    levelTime: 60
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAUSE_GAME:
            return {
                ...state,
                isGamePaused: action.isGamePaused
            }
        case SET_GAME_TIME:
            return {
                ...state,
                gameTime: action.gameTime
            }
        case SET_LEVEL_TIME:
            return {
                ...state,
                levelTime: action.levelTime
            }
        default:
            return state
    }
}
