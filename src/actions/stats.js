import { SET_TIMER_ALERT, SET_LEVEL, SET_SCORE, SET_MISSED } from "./actionTypes"
import { setNotice, setLevelTime, resetGameClock, startGameClock, stopGameClock, setMoleInHole } from './index'

export const levelUp = () => {
    return (dispatch, state) => {
        // stop the clock
        dispatch(stopGameClock())

        // clear the moles
        dispatch(setMoleInHole(null))

        // up the level
        let newLevel = state().stats.level * 1 + 1
        // update the display
        dispatch(setLevel(newLevel))
        
        // congratulate the player
        dispatch(setNotice('notice-overlay level-up', ''))

        // update the time limit for this level
        let newLevelTime = 60 - (newLevel - 1) * 5
        dispatch(setLevelTime(newLevelTime))
        
        // reset game clock to new level time
        dispatch(resetGameClock())
        
        // wait 1 second,
        setTimeout(function () {
            // remove overlay
            dispatch(setNotice('', ''))
            // start clock
            dispatch(startGameClock())
        }, 1000)
    }
}

export const setTimerAlert = (timerAlert) => {
    return {
        type: SET_TIMER_ALERT,
        timerAlert: timerAlert
    }
}

export const setLevel = (level) => {
    return {
        type: SET_LEVEL,
        level: level
    }
}

export const setScore = (score) => {
    return {
        type: SET_SCORE,
        score: score
    }
}

export const setMissed = (missed) => {
    return {
        type: SET_MISSED,
        missed: missed
    }
}
