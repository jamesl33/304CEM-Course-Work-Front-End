import { userConstants } from '../../constants'

const user = localStorage.getItem('user')

const initialState = {
    loggedIn: user ? true : undefined,
    user: user ? user : undefined,
    loggingIn : false
}

function loginReducer(state = initialState, action) {
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
    default:
        return state
    }
}

export { loginReducer }
