// Reducer
// version - 1.0.0
//

import { combineReducers } from 'redux'

import messages from './messages'
import menuNavigationReducer from './menu_navigation_reducer'
import loginReducer from './login_reducer'


const theReducer = combineReducers({
    messages: messages,
    menuNavigationData: menuNavigationReducer,
    loginData: loginReducer
})
export default theReducer