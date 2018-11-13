import { userConstants } from '../../constants'

const user = localStorage.getItem('user')

const initialState = {
    loggedIn: false,
    loggingOut: false,
    user: user ? user : undefined
}

function logoutReducer(state = initialState, action) {
    switch (action.type) {
    case userConstants.LOGOUT_REQUEST:
        return Object.assign({}, state, {
            loggingOut: true,
            user: action.payload
        })
    case userConstants.LOGOUT_SUCCESS:
        return Object.assign({}, state, {
            loggedIn: false,
            loggingOut: false,
            user: action.payload
        })
    case userConstants.LOGOUT_FAILURE:
        return state
    default:
        return state
    }
}

export { logoutReducer }
