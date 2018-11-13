import { apiUrl } from '../../constants'
import { history } from '../../helpers'

const requestOptions = {
    method: 'post',
    headers: { 'content-type': 'application/json', 'authorization': JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : undefined }
}

function handleResponse(response) {
    return response.text().then(text => {
        if (!response.ok && response.status === 401) {
            logout()
            history.push('/login')
            window.location.reload()
        }

        return text && JSON.parse(text)
    })
}

function register(user) {
    return fetch(`${apiUrl}/register`, Object.assign({}, requestOptions, {body: JSON.stringify(user)}))
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))

            return user
        })
}

function login(user) {
    return fetch(`${apiUrl}/login`, Object.assign({}, requestOptions, {body: JSON.stringify(user)}))
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

const userService = {
    register,
    login,
    logout
}

export { userService }
