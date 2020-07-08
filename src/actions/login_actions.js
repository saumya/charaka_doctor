// actions
// login_actions.js
//

import ApiObj from '../utils/api'
import {changeStatusAsBusy} from '.'

//const successLoginAction = ()=> ({type:'LOGIN_SUCCESS'})
//const failLoginAction = ()=> ({type:'LOGIN_FAIL'})

const call_LoginDoctorAPI = (loginObj) => {
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.post.loginDoctor
    const fetch_data = {
        method: 'POST', 
        mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(loginObj)
    }
    return fetch(url_1, fetch_data)
}

export const loginActionCreator = loginObj=>{
    return function (dispatch) {
        call_LoginDoctorAPI(loginObj).then(
            success => {
                console.log('SUCCESS : call_LoginDoctorAPI :');
                //console.log(success);
                success.json().then(function(result){
                  console.log('RESULT : call_LoginDoctorAPI :', result)
                  // result.success
                  // result.data
                  if(result.success===false){
                    dispatch( changeLoginStatus(false) )
                  }else{
                    dispatch(loginStatusAndData({ isLoggedIn: true, loginUserObject: result.data}))
                  }
                  dispatch( changeStatusAsBusy(false) )
                })
              },
              error => {
                console.log('ERROR : call_LoginDoctorAPI :')
                console.log(error)
                dispatch( changeStatusAsBusy(false) )
              }
        )
    }
}
// Login
export const changeLoginStatus = status=>({
    type: 'UPDATE_LOGIN_STATUS',
    payload: status
})
export const updateLoginData = loginData=>({
    type: 'UPDATE_LOGIN_OBJECT',
    payload: loginData
})
export const loginStatusAndData = loginStatusData=>({
    type: 'UPDATE_LOGIN_STATUS_AND_OBJECT',
    payload: loginStatusData
})