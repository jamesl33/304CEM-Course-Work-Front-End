import { userConstants } from '../../constants'
import { userService } from '../../services/userService'
import { history } from '../../helpers'

function login(user) {
    return dispatch => {
        dispatch(request(user.userName))

        userService.login(user)
                   .then(user => {
                       dispatch(success(user))
                       history.push('/')
                   })
                   .then(error => {
                       dispatch(failure(user))
                   })
    }

    function request(user) {
        return {
            type: userConstants.LOGIN_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            payload: user
        }
    }

    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE,
            payload: error
        }
    }
}

function register(user) {
    return dispatch => {
        dispatch(request(user))

        userService.register(user)
                   .then(user => {
                       dispatch(success(user))
                       history.push('/')
                   })
                   .then(error => {
                       dispatch(failure(error))
                   })
    }

    function request(user) {
        return {
            type: userConstants.REGISTER_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: userConstants.REGISTER_SUCCESS,
            payload: user
        }
    }

    function failure(error) {
        return {
            type: userConstants.REGISTER_FAILURE,
            payload: error
        }
    }
}

function logout(user) {
    return dispatch => {
        dispatch(request(user))
        userService.logout()
        dispatch(success(user))
    }

    function request(user) {
        return {
            type: userConstants.LOGOUT_REQUEST,
            payload: user
        }
    }

    function success(user) {
        return {
            type: userConstants.LOGOUT_SUCCESS,
            payload: user
        }
    }
}

const userActions = {
    register,
    login,
    logout
}

export { userActions }
