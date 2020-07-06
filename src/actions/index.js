// Actions
// version - 1.0.0
//


const testCallAPI = ()=> fetch('https://httpbin.org/get');
/*
export const loginActionCreator = loginObj=>{
    return ({
        type: 'NEW_MESSAGE',
        payload: loginObj.username
    })
}
*/
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
const call_LoginAPI = (loginObj) => {
    /*
    const url_1 = apiObj.endpoint + apiObj.version + '/loginClinic';
    const fetch_data = {
      method: 'POST', mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload)
    };
    */
    const url_1 = 'https://httpbin.org/get';
    return fetch(url_1)
  }
export const loginActionCreator = loginObj=>{
    return function (dispatch) {
        call_LoginAPI(loginObj).then(
            success => {
                console.log('success');
                //console.log(success);
                success.json().then(function(result){
                  console.log('result', result)
                  dispatch( changeStatusAsBusy(false) )
                })
              },
              error => {
                console.log('error')
                console.log(error)
                dispatch( changeStatusAsBusy(false) )
              }
        )
    }
}

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
