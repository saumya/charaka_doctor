//
// Reducer : login_reducer.js
//

const initialState = {
    isLoggedIn: false,
    loginUserObject: {}
}

const login_reducer = (state=initialState, action)=>{
    switch (action.type){
        case 'UPDATE_LOGIN_STATUS':
            return { ...state, isLoggedIn: action.payload}
        case 'UPDATE_LOGIN_OBJECT':
            return { ...state, loginUserObject: action.payload}
        case 'UPDATE_LOGIN_STATUS_AND_OBJECT':
            return {isLoggedIn: action.payload.isLoggedIn, loginUserObject: action.payload.loginUserObject }
        default:
            return state
    }
}

export default login_reducer