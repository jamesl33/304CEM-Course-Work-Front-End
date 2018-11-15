import { constants } from '../../constants'

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

function authentication(state = initialState, action) {
    switch (action.type) {
    case constants.user.REGISTER_REQUEST:
        return Object.assign({}, state, {
            registering: true
        })
    case constants.user.REGISTER_SUCCESS:
        return Object.assign({}, state, {
            loggedIn: true,
            registering: false,
            registration: { error: undefined }
        })
    case constants.user.REGISTER_FAILURE:
        return Object.assign({}, state, {
            registering: false,
            registration: { error: action.payload }
        })
    case constants.user.LOGIN_REQUEST:
        return Object.assign({}, state, {
            loggingIn: true,
            user: action.payload
        })
    case constants.user.LOGIN_SUCCESS:
        return Object.assign({}, state, {
            loggedIn: true,
            loggingIn: false,
            login: { error: undefined },
            user: action.payload
        })
    case constants.user.LOGIN_FAILURE:
        return Object.assign({}, state, {
            loggingIn: false,
            login: { error: action.payload }
        })
    case constants.user.LOGOUT_REQUEST:
        return Object.assign({}, state, {
            loggingOut: true
        })
    case constants.user.LOGOUT_SUCCESS:
        return Object.assign({}, state, {
            loggedIn: false,
            loggingOut: false,
            user: action.payload
        })
    default:
        return state
    }
}

export { authentication }
