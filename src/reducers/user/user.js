/* eslint no-fallthrough: 0 */

import { constants } from '../../constants'

const user = (state = { profile: undefined, loading: false }, action) => {
    switch (action.type) {
    case constants.user.USER_LOAD_PROFILE_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })
    case constants.user.USER_LOAD_PROFILE_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            profile: action.payload
        })
    case constants.user.USER_LOAD_PROFILE_FAILURE:
        return Object.assign({}, state, {
            loading: false
        })
    default:
        return state
    }
}

export { user }
