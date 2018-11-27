import { constants } from '../../constants'
import { services } from '../../services'
import { helpers } from '../../helpers'

function comment(values) {
    return dispatch => {
        dispatch(request())

        services.comments.comment(values)
                .then(() => {
                    dispatch(success())
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

    function success() {
        return {
            type: constants.comments.COMMENTS_COMMENT_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.comments.COMMENTS_COMMENT_FAILURE,
            payload: error
        }
    }
}

function reply(values) {
    return dispatch => {
        dispatch(request())

        services.comments.reply(values)
                .then(() => {
                    dispatch(success())
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.comments.COMMENTS_REPLY_REQUEST
        }
    }

    function success() {
        return {
            type: constants.comments.COMMENTS_REPLY_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.comments.COMMENTS_REPLY_FAILURE,
            payload: error
        }
    }
}

function setRecipeId(id) {
    return {
        type: constants.comments.COMMENTS_SET_RECIPE_ID,
        payload: id
    }
}

const comments = {
    comment,
    reply,
    setRecipeId
}

export { comments }
