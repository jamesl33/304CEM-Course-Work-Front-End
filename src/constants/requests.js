const requests = {
    options: {
        method: 'post',
        headers: { 'content-type': 'application/json', 'authorization': JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).token : undefined }
    }
}

export { requests }
