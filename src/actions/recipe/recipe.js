import { constants } from '../../constants'
import { services } from '../../services'
import { helpers } from '../../helpers'

function save(recipe) {
    return dispatch => {
        dispatch(request(recipe))

        services.recipe.save(recipe)
                .then(() => {
                    dispatch(success())
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request(recipe) {
        return {
            type: constants.recipe.RECIPE_SAVE_REQUEST,
            payload: recipe
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_SAVE_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_SAVE_FAILURE,
            payload: error
        }
    }
}

function edit(recipe) {
    return dispatch => {
        dispatch(request(recipe))

        services.recipe.edit(recipe)
                .then(recipe => {
                    dispatch(success(recipe))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request(recipe) {
        return {
            type: constants.recipe.RECIPE_EDIT_REQUEST,
            payload: recipe
        }
    }

    function success(recipe) {
        return {
            type: constants.recipe.RECIPE_EDIT_SUCCESS,
            payload: recipe
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_EDIT_FAILURE,
            payload: error
        }
    }
}

function publish(recipe) {
    return dispatch => {
        dispatch(request(recipe))

        services.recipe.publish(recipe)
                .then(recipe => {
                    dispatch(success())
                    helpers.history.push(recipe.url)
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request(recipe) {
        return {
            type: constants.recipe.RECIPE_PUBLISH_REQUEST,
            payload: recipe
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_PUBLISH_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_PUBLISH_FAILURE,
            payload: error
        }
    }
}

function unpublish(recipe) {
    return dispatch => {
        dispatch(request(recipe))

        services.recipe.unpublish(recipe)
                .then(() => {
                    dispatch(success())
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request(recipe) {
        return {
            type: constants.recipe.RECIPE_UNPUBLISH_REQUEST,
            payload: recipe
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_UNPUBLISH_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_UNPUBLISH_FAILURE,
            payload: error
        }
    }
}

function update(recipe) {
    return dispatch => {
        dispatch(request(recipe))

        services.recipe.update(recipe)
                .then(() => {
                    dispatch(success())
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request(recipe) {
        return {
            type: constants.recipe.RECIPE_UPDATE_REQUEST,
            payload: recipe
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_UPDATE_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_UPDATE_FAILURE,
            payload: error
        }
    }
}

const recipe = {
    save,
    edit,
    publish,
    unpublish,
    update
}

export { recipe }
