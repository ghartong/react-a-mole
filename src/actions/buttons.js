import { HIDE_PAUSE, SHOW_PAUSE, HIDE_START, SHOW_START, HIDE_RESET, SHOW_RESET, PAUSE_GAME } from "./actionTypes"
import { 
    setNotice, startGameClock, stopGameClock, setGameClock, resetGameClock, pauseGameClock, setLevel, setLevelTime,
    setScore, setMissed, startMoleDance, stopDance, setMoleInHole
 } from './index'

export const onStart = () => {
    return (dispatch, state) => {
        dispatch(setNotice('', ''))

        dispatch(hideStart())
        dispatch(showPause())

        if (state().clock.isGamePaused) {
            dispatch(unpauseGame())
            
            dispatch(startGameClock())
        } else {
            dispatch(setMissed(0))

            dispatch(setGameClock())

            dispatch(startGameClock())
        }

        // start mole dance
        dispatch(startMoleDance())
    }
}

export const onPause = () => {
    return dispatch => {
        dispatch(showStart())
        dispatch(hidePause())

        dispatch(pauseGame())

        dispatch(setNotice('notice-overlay pause', ''))

        // stop the timer
        dispatch(pauseGameClock())
        
        // clear the moles
        dispatch(stopDance())
        dispatch(setMoleInHole(null))
    }
}

export const onReset = () => {
    return dispatch => {
            // stop game clock
            dispatch(stopGameClock())
            
            // reset level, in part so we can set clock back to level 1 time
            dispatch(setLevel(1))

            // update the time limit for this level
            dispatch(setLevelTime(60))
            
            // reset game clock
            dispatch(resetGameClock())
            
            // clear the moles
            dispatch(stopDance())
            dispatch(setMoleInHole(null))
                
            // reset score
            dispatch(setScore(0))
            
            // reset missed
            dispatch(setMissed(0))
            
            // make sure we are un-paused
            dispatch(unpauseGame())
            
            // show start button
            dispatch(showStart())
            dispatch(hidePause())
                
            // remove any notices
            dispatch(setNotice('', ''))
        }
}

export const pauseGame = () => {
    return {
        type: PAUSE_GAME,
        isGamePaused: true
    }
}

export const unpauseGame = () => {
    return {
        type: PAUSE_GAME,
        isGamePaused: false
    }
}

export const hidePause = () => {
    return {
        type: HIDE_PAUSE,
        hide: true
    }
}
export const showPause = () => {
    return {
        type: SHOW_PAUSE,
        hide: false
    }
}
export const hideStart = () => {
    return {
        type: HIDE_START,
        hide: true
    }
}
export const showStart = () => {
    return {
        type: SHOW_START,
        hide: false
    }
}
export const hideReset = () => {
    return {
        type: HIDE_RESET,
        hide: true
    }
}
export const showReset = () => {
    return {
        type: SHOW_RESET,
        hide: false
    }
}
