import { constants } from '../../constants'
import { services } from '../../services'

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
