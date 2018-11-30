/**
 * @module actions:comments
 */

import { constants } from '../../constants'
import { services } from '../../services'

/**
 * @description Dispatch all the actions necessary so that the user can comment
 * on a recipe.
 * @param {Object} values - The comment object which will be sent to the api.
 */
function comment(values) {
    return dispatch => {
        dispatch(request())

        services.comments.comment(values)
                .then(() => {
                    dispatch(success(values))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.comments.COMMENTS_COMMENT_REQUEST
        }
    }

    function success(values) {
        return {
            type: constants.comments.COMMENTS_COMMENT_SUCCESS,
            payload: values
        }
    }

    function failure(error) {
        return {
            type: constants.comments.COMMENTS_COMMENT_FAILURE,
            payload: error
        }
    }
}

const comments = {
    comment
}

export { comments }
