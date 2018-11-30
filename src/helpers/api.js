const api = {
    handleResponse: (response) => {
        return response.text().then(text => {
            const data = text && JSON.parse(text)

            if ((!response.ok && response.status === 401) || response.status === 403) {
                return Promise.reject((data && data.message) || response.statusText)
            }

            return data
        })
    },
    jsonRequest: (body) => {
        return {
            body: body,
            headers: {
                authorization: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : undefined,
                'content-type': 'application/json',
            },
            method: 'post'

        }
    },
    multipartRequest: (body) => {
        return {
            body: body,
            headers: {
                authorization: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : undefined
            },
            method: 'post'
        }
    }
}

export { api }
