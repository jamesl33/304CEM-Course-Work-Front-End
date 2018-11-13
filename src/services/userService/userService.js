import { apiUrl } from '../../constants'
import { history } from '../../helpers'

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
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return fetch(`${apiUrl}/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))

            return user
        })
}

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return fetch(`${apiUrl}/login`, requestOptions)
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
