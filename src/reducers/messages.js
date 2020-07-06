//
const initialState = {
    isBusy: false,
    message: 'Nothing'
}
const messages = (state = initialState, action )=>{
    switch(action.type){
        case 'NEW_MESSAGE' :
            return { ...state, message: action.payload}
        case 'NEW_STATUS' :
            return { ...state, isBusy: action.payload}
        default :
            return state
    }
}

export default messages