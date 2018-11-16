const api = {
    url: '//localhost:8080',
    requests: {
        json: {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : undefined
            }
        },
        multipart: {
            method: 'post',
            headers: {
                'authorization': JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : undefined
            }
        }
    }
}

export { api }
