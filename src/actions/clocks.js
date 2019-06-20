import { SET_GAME_TIME, SET_LEVEL_TIME, TIMER_STARTED, TIMER_STOPPED } from './actionTypes'
import { setTimerAlert, hideStart, hidePause, setNotice, stopDance, setMoleInHole } from './index'

let gameClock = null

export const pauseGameClock = () => {
    return dispatch => {
        dispatch(stopTimer())
        // stop dancing moles
        dispatch(stopDance())
    }
}

export const startGameClock = () => {
    return dispatch => {
        dispatch(start())
    }
}

const start = () => (dispatch) => {
    gameClock = setInterval(() => dispatch(gameTimer()), 1000)
    dispatch({ type: TIMER_STARTED });
}

export const stopGameClock = () => {
    return dispatch => {
        dispatch(stopTimer())

        // stop any dancing moles
        dispatch(stopDance())

        // reset the UI clock to zero
        dispatch(setGameTime('00'))
    }
}

const stopTimer = () => {
    clearInterval(gameClock)
    return { type: TIMER_STOPPED }
}

const gameTimer = () => {
    return (dispatch, state) => {
        let gameTime = state().clock.gameTime * 1
        if (gameTime <= 6 && gameTime > 0) {
            dispatch(setTimerAlert(true))
        }
    
        if (gameTime === 0) {
            dispatch(stopTimer());
            dispatch(setTimerAlert(false))

            dispatch(setNotice('notice-overlay game-over', 'Missed: ' + state().stats.missed))

            dispatch(stopDance())
            dispatch(setMoleInHole(null))
    
            dispatch(hideStart())
            dispatch(hidePause())
        } else {
            let newTime = gameTime - 1
            dispatch(setGameTime(formatSeconds(newTime)))
        }        
    }
}

export const setGameClock = () => {
    return (dispatch, state) => {
        const gameTime = state().clock.levelTime
        dispatch(setGameTime(formatSeconds(gameTime)))
    }
}

export const resetGameClock = () => {
    return (dispatch) => {
        // stop the timer and dancing moles
        dispatch(stopGameClock())
                
        // set game time to the current level's time
        dispatch(setGameClock())
    }
}

const setGameTime = (newGameTime) => {
    return {
        type: SET_GAME_TIME,
        gameTime: newGameTime
    }
}

export const setLevelTime = (levelTime) => {
    return {
        type: SET_LEVEL_TIME,
        levelTime: levelTime
    }
}

const formatSeconds = seconds => {
    return ('0' + seconds).substr(-2);
}
