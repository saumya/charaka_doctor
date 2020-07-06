// Actions
// version - 1.0.0
//


let testCallAPI = ()=> fetch('https://httpbin.org/get');
export const loginActionCreator = payload=>{
    return ({
        type: 'NEW_MESSAGE',
        payload: payload.username
    })
}
/*
export const loginActionCreator = loginObj=>{
    return dispatch=>{
        return testCallAPI().then(
                success=> dispatch( successLoginAction( loginObj, success) ),
                error=> dispatch( failLoginAction( loginObj, error) )
            )
    }
}
*/
const successLoginAction = ()=> ({type:'LOGIN_SUCCESS'})
const failLoginAction = ()=> ({type:'LOGIN_FAIL'})

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
