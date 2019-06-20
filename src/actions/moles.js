import { SET_MOLE_IN_HOLE } from './actionTypes'
import { setScore, levelUp, setMissed } from './index'

let danceClock = null

export const setMoleInHole = (holeNumber) => {
    return {
        type: SET_MOLE_IN_HOLE,
        holeNumber: holeNumber
    }
}

export const startMoleDance = () => {
    return (dispatch, state) => {
        // hide any moles...maybe user hit start twice
        dispatch(setMoleInHole(null))
    
        // pick a hole for the mole
        const moleHole = Math.floor(Math.random() * 7 + 1)
        
        // display the mole by adding .mole to the hole
        dispatch(setMoleInHole(moleHole))
        
        // get random amount of time per the requirements and let the mole dance for that long
        const danceTime = Math.floor(Math.random() * 3 + 1) * 1000; 
        
        // start dance timer
        danceClock = setTimeout(function () {
            // when time is up, clear the .mole from the hole
            // and start mole dance again, if game time has not expired
            if (state().clock.gameTime) {
                dispatch(startMoleDance())
            }
        }, danceTime)
    }    
}

export const onHit = () => {
    return (dispatch, state) => {
        //stop the mole dance so he doesn't move again too soon, although...it would add some difficulty to the game!
        stopMoleDance()

        // add a point to the score variable
        let score = state().stats.score * 1 + 1
        dispatch(setScore(score))
                
        // did we level up yet?
        if (score % state().stats.molesToProgress === 0) {
            dispatch(levelUp())
        }

        // start mole dance if there is time left in the game
        let gameTime = state().clock.gameTime * 1
        if (gameTime) {
            dispatch(startMoleDance())
        }
    }
}

export const onMiss = () => {
    return (dispatch, state) => {
        let missed = state().stats.missed * 1 + 1
        dispatch(setMissed(missed))
    }
}

export const stopDance = () => {
    return dispatch => { 
        stopMoleDance()
    }
}

const stopMoleDance = () => {
    clearTimeout(danceClock)
    return true
}
