// Actions
// version - 1.0.0
//

import ApiObj from '../utils/api'

//export { loginActionCreator } from "./login_actions"
export * from "./login_actions"
export * from './profile_actions'

// message
export const changeMessage = message=> {
    return ({
        type: 'NEW_MESSAGE',
        payload: message
    })
}

export const changeStatusAsBusy = status=> {
    return ({
        type: 'NEW_STATUS',
        payload: status
    })
}

// Menu Navigation
export const menuNavigationAction = menuName=>({
  type: 'MENU_NAVIGATION',
  payload: menuName
})


