import { userConstants } from '../../constants'

const initialState = {
    registering : false
}

function registrationReducer(state = initialState, action) {
    switch (action.type) {
    case userConstants.REGISTER_REQUEST:
        return Object.assign({}, state, {
            registering: true
        })
    case userConstants.REGISTER_SUCCESS:
        return Object.assign({}, state, {
            registering: false
        })
    case userConstants.REGISTER_FAILURE:
        return Object.assign({}, state, {
            registering: false
        })
    default:
        return state
    }
}

export { registrationReducer }
