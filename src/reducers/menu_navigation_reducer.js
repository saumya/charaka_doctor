// menu_navigation_reducer.js
// active_menu = PROFILE / SCHEDULE / LOG_OUT

const initialState = {
    last_menu: '',
    active_menu: 'SCHEDULE'
}

const menu_navigation = (state = initialState, action)=>{
    switch (action.type){
        case 'MENU_NAVIGATION':
            return { last_menu: state.active_menu, active_menu: action.payload }
            //break;
        default : 
            return state
            //break;
    }
}

export default menu_navigation