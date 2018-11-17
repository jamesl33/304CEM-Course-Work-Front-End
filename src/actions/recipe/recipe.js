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

function load(recipe) {
    return dispatch => {
        dispatch(request(recipe))

        services.recipe.load(recipe)
                .then(recipe => {
                    dispatch(success(recipe))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request(recipe) {
        return {
            type: constants.recipe.RECIPE_LOAD_REQUEST,
            payload: recipe
        }
    }

    function success(recipe) {
        return {
            type: constants.recipe.RECIPE_LOAD_SUCCESS,
            payload: recipe
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_LOAD_FAILURE,
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

const recipe = {
    save,
    load,
    publish,
    unpublish
}

export { recipe }
