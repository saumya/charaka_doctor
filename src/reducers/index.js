// Reducer
// version - 1.0.0
//

import { combineReducers } from 'redux'

import messages from './messages'
import menuNavigationReducer from './menu_navigation_reducer'
import loginReducer from './login_reducer'
import schedulesReducer from './schedules_reducer'
import patientReducer from './patients_reducer'


const theReducer = combineReducers({
    messages: messages,
    menuNavigationData: menuNavigationReducer,
    loginData: loginReducer,
    schedulesData: schedulesReducer,
    patientData: patientReducer
})
export default theReducer