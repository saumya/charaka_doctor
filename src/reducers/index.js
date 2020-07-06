// Reducer
// version - 1.0.0
//

import { combineReducers } from 'redux'

import messages from './messages'


const theReducer = combineReducers({
    messages: messages
})
export default theReducer