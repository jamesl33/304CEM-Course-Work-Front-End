const api = {
    handleResponse: (response) => {
        return response.text().then(text => {
            const data = text && JSON.parse(text)

            if (!response.ok && response.status === 401) {
                return Promise.reject((data && data.message) || response.statusText)
            }

            return data
        })
    }
}

export { api }
