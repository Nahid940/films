const INITIAL_STATE={
    loggedINUser:null
}
const userReducer=(state=INITIAL_STATE,action) => {

    switch(action.type)
    {
        case 'SET_LOGGED_IN_USER':
            return {
                ...state,
                loggedINUser: action.payload
            }
            // set loggedINUser = null when user logged out
        case 'SET_LOGGED_OUT_USER':
            return {
                ...state,
                loggedINUser:action.payload
            }
        default :
            return state
    }
}

export default  userReducer

