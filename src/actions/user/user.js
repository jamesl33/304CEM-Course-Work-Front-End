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
            type: constants.user.LOGIN_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: constants.user.LOGIN_SUCCESS,
            payload: user
        }
    }

    function failure(error) {
        return {
            type: constants.user.LOGIN_FAILURE,
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
            type: constants.user.REGISTER_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: constants.user.REGISTER_SUCCESS,
            payload: user
        }
    }

    function failure(error) {
        return {
            type: constants.user.REGISTER_FAILURE,
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
            type: constants.user.LOGOUT_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: constants.user.LOGOUT_SUCCESS,
            payload: user
        }
    }
}

const user = {
    register,
    login,
    logout
}

export { user }
