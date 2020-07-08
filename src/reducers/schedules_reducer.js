// reducer
// schedules_reducer.js
//

const initialState = {
    all_schedules_for_doctor: {}
}

const SchedulesReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'UPDATE_SCHEDULES_FOR_DOCTOR' :
            const newState = { ...state, all_schedules_for_doctor : action.payload }
            return newState
        break;
        default:
            return state
        break;
    }
}

export default SchedulesReducer