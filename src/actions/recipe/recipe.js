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

    function request() {
        return {
            type: constants.recipe.RECIPE_SAVE_REQUEST
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_SAVE_SUCCESS
        }
    }

    function failure() {
        return {
            type: constants.recipe.RECIPE_SAVE_FAILURE
        }
    }
}

function edit(recipe) {
    return dispatch => {
        dispatch(request())

        services.recipe.edit(recipe)
                .then(recipe => {
                    dispatch(success(recipe))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_EDIT_REQUEST
        }
    }

    function success(recipe) {
        return {
            type: constants.recipe.RECIPE_EDIT_SUCCESS,
            payload: recipe
        }
    }

    function failure() {
        return {
            type: constants.recipe.RECIPE_EDIT_FAILURE
        }
    }
}

function publish(recipe) {
    return dispatch => {
        dispatch(request())

        services.recipe.publish(recipe)
                .then(recipe => {
                    dispatch(success())
                    helpers.history.push(recipe.url)
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_PUBLISH_REQUEST
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

function togglePublished(id) {
    return dispatch => {
        dispatch(request())

        services.recipe.togglePublished(id)
                .then(dispatch(success()))
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_TOGGLE_PUBLISHED_REQUEST
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_TOGGLE_PUBLISHED_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_TOGGLE_PUBLISHED_FAILURE,
            payload: error
        }
    }
}

function update(recipe) {
    return dispatch => {
        dispatch(request())

        services.recipe.update(recipe)
                .then(dispatch(success()))
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_UPDATE_REQUEST
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
    togglePublished,
    update
}

export { recipe }
