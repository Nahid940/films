/**
 * action that will be invoked on particular user
 * function like user login and the type of this action is SET_LOGGED_IN_USER
 **/
export const setCurrentUser=user=>({
    type:'SET_LOGGED_IN_USER',
    payload:user
})

export const setUserLogout=user=>({
    type:'SET_LOGGED_OUT_USER',
    payload:user
})


