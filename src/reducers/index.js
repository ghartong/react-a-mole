import { combineReducers } from 'redux'

// call reducers to create links
import buttonReducer from './buttons'
import noticeReducer from './notices'
import clockReducer from './clock'
import statsReducer from './stats'
import moleReducer from './moles'

const rootReducers = combineReducers({
    // add reducer files references here
    buttons: buttonReducer,
    notices: noticeReducer,
    clock: clockReducer,
    stats: statsReducer,
    moles: moleReducer
});

export default rootReducers
