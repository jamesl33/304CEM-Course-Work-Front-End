import { constants } from '../../constants'
import { helpers } from '../../helpers'

function comment(values) {
    return fetch(`${constants.api.url}/comments/comment`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify(values) }))
        .then(helpers.api.handleResponse)
}

function reply(values) {
    return fetch(`${constants.api.url}/comments/reply`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify(values) }))
        .then(helpers.api.handleResponse)
}

const comments = {
    comment,
    reply
}

export { comments }
