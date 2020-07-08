// actions
// profile_actions
//

import ApiObj from '../utils/api'
import {changeStatusAsBusy} from '.'

//const updateProfileSuccessAction = ()=> ({type:'UPDATE_USER_PROFILE_SUCCESS'})
//const updateProfileFailAction = ()=> ({type:'UPDATE_USER_PROFILE_FAIL'})

const call_UpdateProfileAPI = (userObj)=>{
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.put.update_doctor
    const userDataAsPerAPI = {
        doctorId : userObj.id,
        doctorName : userObj.name,
        doctorPassword : userObj.password,
        doctorEmail : userObj.email,
        doctorPhone : userObj.phone,
        doctorSpecialization : userObj.specialization,
        doctorAddress : userObj.address
    }
    const fetch_data = {
        method: 'PUT', 
        mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(userDataAsPerAPI)
    }
    return fetch(url_1, fetch_data)
}
  
export const updateUserProfileAction = updatedUserObject=>{
    return function(dispatch){
        dispatch( changeStatusAsBusy(true) )
        call_UpdateProfileAPI(updatedUserObject).then(function(success){
            console.log( 'updateUserProfileAction : UPDATE_PROFILE_SUCCESS' )
            console.log( success )
            success.json().then(function(result_data){
                console.log('updateUserProfileAction : UPDATE_PROFILE_SUCCESS : RESULT')
                console.log( result_data )
                dispatch( changeStatusAsBusy(false) )
            }).catch(function(error_2){
                console.log('updateUserProfileAction : UPDATE_PROFILE_SUCCESS : ERROR_2')
                console.log(error_2)
                dispatch( changeStatusAsBusy(false) )
            })
        },function(error){
            console.log( 'updateUserProfileAction : UPDATE_PROFILE_FAIL' )
            console.log( error )
            dispatch( changeStatusAsBusy(false) )
        })
    } 
}
