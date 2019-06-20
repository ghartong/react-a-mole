import { SET_MOLE_IN_HOLE } from '../actions/actionTypes'

const initialState = {
    moleInHole: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MOLE_IN_HOLE:
            return {
                ...state,
                moleInHole: action.holeNumber
            }
        default:
            return state
    }
}
