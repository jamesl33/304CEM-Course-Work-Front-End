import { constants } from '../../constants'
import { helpers } from '../../helpers'

function register(user) {
    return fetch(`${constants.api.url}/user/register`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify(user) }))
        .then(helpers.api.handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user))
            }

            return user
        })
}

function login(user) {
    return fetch(`${constants.api.url}/user/login`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify(user) }))
        .then(helpers.api.handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user))
            }

            return user
        })
}

function logout() {
    localStorage.removeItem('user')
}

function loadProfile(id) {
    return fetch(`${constants.api.url}/user/profile`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify({ id: id }) }))
        .then(helpers.api.handleResponse)
}

const user = {
    register,
    login,
    logout,
    loadProfile
}

export { user }
