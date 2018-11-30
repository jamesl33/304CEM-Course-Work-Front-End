/**
 * @module services:user
 */

import { constants } from '../../constants'
import { helpers } from '../../helpers'

/**
 * @description Use fetch to make a request to the api sending the user object
 * to /user/register.
 * @param {Object} user - The user object which contains the needed information
 * to register a user.
 */
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

/**
 * @description Use fetch to make a request to the api to login the user.
 * @param {Object} user - The user object which contains the needed information
 * for the user to login.
 */
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

/**
 * @description Log the user out of the recipe blog.
 */
function logout() {
    localStorage.removeItem('user')
}

/**
 * @description Load the users profile from the api.
 * @param {Integer} id - The id of the user whose profile we want to load.
 */
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
