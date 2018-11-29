import { constants } from '../../constants'
import { helpers } from '../../helpers'

function comment(values) {
    return fetch(`${constants.api.url}/comment/comment`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify(values) }))
        .then(helpers.api.handleResponse)
}

const comments = {
    comment
}

export { comments }
