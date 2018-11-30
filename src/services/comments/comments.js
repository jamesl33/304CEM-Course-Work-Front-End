/**
 * @module services:comments
 */

import { constants } from '../../constants'
import { helpers } from '../../helpers'

/**
 * @description Post a new comment to api.
 * @param {Object} comment - The comment object which will be sent to the api.
 */
function comment(comment) {
    return fetch(`${constants.api.url}/comment/comment`, Object.assign({}, constants.api.requests.json, { body: JSON.stringify(comment) }))
        .then(helpers.api.handleResponse)
}

const comments = {
    comment
}

export { comments }
