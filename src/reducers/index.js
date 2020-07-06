// Reducer
// version - 1.0.0
//

import { combineReducers } from 'redux'

import messages from './messages'
import loginReducer from './login_reducer'


const theReducer = combineReducers({
    messages: messages,
    loginData: loginReducer
})
export default theReducer