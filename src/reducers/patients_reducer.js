//
// Reducer : patients_reducer.js
//

const initialState = {
    name: 'PatientReducer',
    patientObject: {}
}


const patients_reducer = (state=initialState, action)=>{
    switch (action.type){
        case 'UPDATE_PATIENT_PROFILE_DATA':
            return { ...state, patientObject: action.payload }
        case 'RESET_PATIENT_PROFILE_DATA':
            return { ...state, patientObject:{} }
        default:
            return state
    }
}

export default patients_reducer