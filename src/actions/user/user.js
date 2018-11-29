import { constants } from '../../constants'
import { services } from '../../services'
import { helpers } from '../../helpers'

function login(user) {
    return dispatch => {
        dispatch(request(user))

        services.user.login(user)
                .then(user => {
                    dispatch(success(user))
                    helpers.history.push('/')
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request(user) {
        return {
            type: constants.user.USER_LOGIN_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: constants.user.USER_LOGIN_SUCCESS,
            payload: user
        }
    }

    function failure(error) {
        return {
            type: constants.user.USER_LOGIN_FAILURE,
            payload: error
        }
    }
}

function register(user) {
    return dispatch => {
        dispatch(request(user))

        services.user.register(user)
                .then(user => {
                    dispatch(success(user))
                    helpers.history.push('/')
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request(user) {
        return {
            type: constants.user.USER_REGISTER_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: constants.user.USER_REGISTER_SUCCESS,
            payload: user
        }
    }

    function failure(error) {
        return {
            type: constants.user.USER_REGISTER_FAILURE,
            payload: error
        }
    }
}

function logout(user) {
    return dispatch => {
        dispatch(request(user))
        services.user.logout()
        dispatch(success(user))
    }

    function request(user) {
        return {
            type: constants.user.USER_LOGOUT_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: constants.user.USER_LOGOUT_SUCCESS,
            payload: user
        }
    }
}

function loadProfile(id) {
    return dispatch => {
        dispatch(request())

        services.user.loadProfile(id)
                .then(results => {
                    dispatch(success(results))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.user.USER_LOAD_PROFILE_REQUEST
        }
    }

    function success(results) {
        return {
            type: constants.user.USER_LOAD_PROFILE_SUCCESS,
            payload: results
        }
    }

    function failure(error) {
        return {
            type: constants.user.USER_LOAD_PROFILE_FAILURE,
            payload: error
        }
    }
}

const user = {
    register,
    login,
    logout,
    loadProfile
}

export { user }
