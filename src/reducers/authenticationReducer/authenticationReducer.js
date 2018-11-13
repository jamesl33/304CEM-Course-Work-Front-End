import { userConstants } from '../../constants'

const user = localStorage.getItem('user')

const initialState = {
    loggedIn: user ? true : undefined,
    loggingIn : false,
    loggingOut: false,
    user: user ? user : undefined
}

function authenticationReducer(state = initialState, action) {
    switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return Object.assign({}, state, {
            loggingIn: true,
            user: action.payload
        })
    case userConstants.LOGIN_SUCCESS:
        return Object.assign({}, state, {
            loggedIn: true,
            loggingIn: false,
            user: action.payload
        })
    case userConstants.LOGIN_FAILURE:
        return Object.assign({}, state, {
            loggingIn: false,
        })
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
    default:
        return state
    }
}

export { authenticationReducer }
