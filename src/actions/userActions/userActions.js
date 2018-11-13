import { userConstants } from '../../constants'
import { userService } from '../../services/userService'
import { history } from '../../helpers'

function login(user) {
    return dispatch => {
        dispatch(request(user.userName))

        userService.login(user)
                   .then(user => {
                       dispatch(success(user.userName))
                       history.push('/')
                   })
                   .then(error => {
                       dispatch(failure(error.toString()))
                   })
    }

    function request(user) {
        return {
            type: userConstants.LOGIN_REQUEST,
            payload: user.userName
        }
    }

    function success(user) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            payload: user.userName
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
        dispatch(request(user.userName))

        userService.register(user)
                   .then(user => {
                       dispatch(success(user.userName))
                       history.push('/')
                   })
                   .then(error => {
                       dispatch(failure(error.toString()))
                   })
    }

    function request(user) {
        return {
            type: userConstants.REGISTER_REQUEST,
            payload: user.userName
        }
    }

    function success(user) {
        return {
            type: userConstants.REGISTER_SUCCESS,
            payload: user.userName
        }
    }

    function failure(error) {
        return {
            type: userConstants.REGISTER_FAILURE,
            payload: error
        }
    }
}

function logout() {
    return dispatch => {
        dispatch(request())

        userService.logout()
                   .then(dispatch(success))
                   .then(history.push('/'))
                   .then(error => {
                       dispatch(failure(error.toString()))
                   })
    }

    function request(user) {
        return {
            type: userConstants.LOGOUT_REQUEST,
            payload: user.userName
        }
    }

    function success(user) {
        return {
            type: userConstants.LOGOUT_SUCCESS,
            payload: user.userName
        }
    }

    function failure(error) {
        return {
            type: userConstants.LOGOUT_FAILURE,
            payload: error
        }
    }
}

const userActions = {
    register,
    login,
    logout
}

export { userActions }
