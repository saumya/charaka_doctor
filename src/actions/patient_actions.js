// action
// patient_actions.js

import ApiObj from '../utils/api'
import {changeStatusAsBusy} from '.'


const call_GetPersonWithId_API = (user_id)=>{
    const url_1 = ApiObj.endpoint + ApiObj.version 
                    + ApiObj.get.get_person_with_id + user_id
    return fetch(url_1)
}
export const getPersonProfileAction = personId=>{
    return function(dispatch){
        dispatch( changeStatusAsBusy(true) )
        call_GetPersonWithId_API( personId ).then(function(success){
            success.json().then(function(result_data){
                console.log('call_GetPersonWithId_API : SUCCESS : RESULT')
                //console.log( result_data )
                dispatch( updatePatientData(result_data) )
                dispatch( changeStatusAsBusy(false) )
            }).catch(function(error_2){
                console.log('call_GetPersonWithId_API : SUCCESS : ERROR_2')
                console.log(error_2)
                dispatch( changeStatusAsBusy(false) )
            })
        }, function(error){
            console.log( 'call_GetPersonWithId_API : ERROR' )
            console.log( error )
            dispatch( changeStatusAsBusy(false) )
        })
    }
}

export const resetPersonProfileAction = ()=>({
    type: 'RESET_PATIENT_PROFILE_DATA',
    payload: {}
})
//
const updatePatientData = patientData=>({
    type: 'UPDATE_PATIENT_PROFILE_DATA',
    payload: patientData
})
