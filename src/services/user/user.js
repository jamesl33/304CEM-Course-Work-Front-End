import { constants } from '../../constants'

const requestOptions = {
    method: 'post',
    headers: { 'content-type': 'application/json', 'authorization': JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : undefined }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)

        if (!response.ok && response.status === 401) {
            return Promise.reject((data && data.message) || response.statusText)
        }

        return data
    })
}

function register(user) {
    return fetch(`${constants.api.url}/user/register`, Object.assign({}, requestOptions, { body: JSON.stringify(user) }))
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user))
            }

            return user
        })
}

function login(user) {
    return fetch(`${constants.api.url}/user/login`, Object.assign({}, requestOptions, { body: JSON.stringify(user) }))
        .then(handleResponse)
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

const user = {
    register,
    login,
    logout
}

export { user }
