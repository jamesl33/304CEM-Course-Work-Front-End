import { userConstants } from '../../constants'

const user = localStorage.getItem('user')

const initialState = {
    loggedIn: user ? true : undefined,
    loggingIn : false,
    loggingOut: false,
    login: { error: undefined },
    registering: false,
    registration: { error: undefined },
    user: user ? user : undefined
}

function authenticationReducer(state = initialState, action) {
    switch (action.type) {
    case userConstants.REGISTER_REQUEST:
        return Object.assign({}, state, {
            registering: true
        })
    case userConstants.REGISTER_SUCCESS:
        return Object.assign({}, state, {
            loggedIn: true,
            registering: false,
            registration: { error: undefined }
        })
    case userConstants.REGISTER_FAILURE:
        return Object.assign({}, state, {
            registering: false,
            registration: { error: action.payload }
        })
    case userConstants.LOGIN_REQUEST:
        return Object.assign({}, state, {
            loggingIn: true,
            user: action.payload
        })
    case userConstants.LOGIN_SUCCESS:
        return Object.assign({}, state, {
            loggedIn: true,
            loggingIn: false,
            login: { error: undefined },
            user: action.payload
        })
    case userConstants.LOGIN_FAILURE:
        return Object.assign({}, state, {
            loggingIn: false,
            login: { error: action.payload }
        })
    case userConstants.LOGOUT_REQUEST:
        return Object.assign({}, state, {
            loggingOut: true
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
