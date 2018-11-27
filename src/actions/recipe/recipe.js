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
                .then(() => {
                    dispatch(success())
                })
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

function load(recipe) {
    return dispatch => {
        dispatch(request())

        services.recipe.load(recipe)
                .then(recipe => {
                    dispatch(success(recipe))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_LOAD_REQUEST
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

function recent() {
    return dispatch => {
        dispatch(request())

        services.recipe.recent()
                .then(recipes => {
                    dispatch(success(recipes))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_RECENT_REQUEST
        }
    }

    function success(recipes) {
        return {
            type: constants.recipe.RECIPE_RECENT_SUCCESS,
            payload: recipes
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_RECENT_FAILURE,
            payload: error
        }
    }
}

function top() {
    return dispatch => {
        dispatch(request())

        services.recipe.top()
                .then(recipes => {
                    dispatch(success(recipes))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_TOP_REQUEST
        }
    }

    function success(recipes) {
        return {
            type: constants.recipe.RECIPE_TOP_SUCCESS,
            payload: recipes
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_TOP_FAILURE,
            payload: error
        }
    }
}

function like(id) {
    return dispatch => {
        dispatch(request())

        services.recipe.like(id)
                .then(() => {
                    dispatch(success())
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_LIKE_REQUEST
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_LIKE_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_LIKE_FAILURE,
            payload: error
        }
    }
}

function unlike(id) {
    return dispatch => {
        dispatch(request())

        services.recipe.unlike(id)
                .then(() => {
                    dispatch(success())
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_UNLIKE_REQUEST
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_UNLIKE_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_UNLIKE_FAILURE,
            payload: error
        }
    }
}

function report(id) {
    return dispatch => {
        dispatch(request())

        services.recipe.report(id)
                .then(() => {
                    dispatch(success())
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_REPORT_REQUEST
        }
    }

    function success() {
        return {
            type: constants.recipe.RECIPE_REPORT_SUCCESS
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_REPORT_FAILURE,
            payload: error
        }
    }
}

function search(query) {
    return dispatch => {
        dispatch(request())

        services.recipe.search(query)
                .then(results => {
                    dispatch(success(results))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_SEARCH_REQUEST
        }
    }

    function success(results) {
        return {
            type: constants.recipe.RECIPE_SEARCH_SUCCESS,
            payload: results
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_SEARCH_FAILURE,
            payload: error
        }
    }
}

const recipe = {
    save,
    edit,
    publish,
    togglePublished,
    update,
    load,
    recent,
    top,
    like,
    unlike,
    report,
    search
}

export { recipe }
