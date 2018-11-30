/**
 * @module actions:recipe
 */

import { constants } from '../../constants'
import { services } from '../../services'
import { helpers } from '../../helpers'

/**
 * @description Dispatch all the actions needed to allow the user to save a
 * recipe to the api's database.
 * @param {Object} recipe - The recipe object that will be sent to the api.
 */
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

/**
 * @description Dispatch all the actions and run any services needed to
 * successfully load a recipe so that it can be edited.
 * @param {Integer} id - The id of the recipe which the user wants to load.
 */
function edit(id) {
    return dispatch => {
        dispatch(request())

        services.recipe.edit(id)
                .then(recipe => {
                    dispatch(success(recipe))
                })
                .catch(error => {
                    helpers.history.replace('/404') // I know it was a 403 but the user doesn't need to know that
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

/**
 * @description Dispatch any actions which are needed when publishing a users
 * recipe.
 * @param {Object} recipe - The recipe which is going to be publish on the blog.
 */
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

/**
 * @description Dispatch the actions need so that the user can toggle the
 * published state of one of thier recipes.
 * @param {Integer} id - The id of the recipe the user is attempting to
 * publish/unpublish
 */
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

/**
 * @description Dispatch all the actions and run any services neeed so that a
 * user can update a recipe. This is run when a submitting the RecipeEdit form.
 * @param {Object} recipe - The updated recipe object.
 */
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

/**
 * @description Dispatch all of the actions to allow a user to load
 * a recipe. This function is used with the Recipe component.
 * @param {Integer} id - The id of the recipe the user is trying to view.
 */
function load(id) {
    return dispatch => {
        dispatch(request())

        services.recipe.load(id)
                .then(recipe => {
                    dispatch(success(recipe))
                })
                .catch(error => {
                    helpers.history.replace('/404') // I know it was a 403 but the user doesn't need to know that
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

/**
 * @description Dispatch all the actions and run any services which will load
 * the recent recipes.
 */
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

/**
 * @description Dispatch all the actions and run any services which will load
 * the top rated recipes.
 */
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

/**
 * @description Dispatch any actions and run any services which mean that a
 * user can like a recipe.
 * @param {Integer} id - The id of the recipe the user is liking.
 */
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

/**
 * @description Dispatch any actions and run any services that allow
 * the user to unlike a recipe.
 * @param {integer} id - The id of recipe which the user is unliking.
 */
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

/**
 * @description Dispatch the actions and run services which will mark a recipe
 * as reported.
 * @param {Integer} id - The id of the recipe the user is reporting.
 */
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

/**
 * @description Dispatch the actions and run services which will allow the user
 * to search for a recipe.
 * @param {String} query - The string which will be search for in the database.
 */
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

/**
 * @description Dispatch any actions and run any services which will load the
 * user recipes.
 * @param {Integer} id - The id of the user whose recipes we want to load.
 */
function userRecipes(id) {
    return dispatch => {
        dispatch(request())

        services.recipe.userRecipes(id)
                .then(results => {
                    dispatch(success(results))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_GET_USER_RECIPES_REQUEST
        }
    }

    function success(results) {
        return {
            type: constants.recipe.RECIPE_GET_USER_RECIPES_SUCCESS,
            payload: results
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_GET_USER_RECIPES_FAILURE,
            payload: error
        }
    }
}

/**
 * @description Dispatch any actions and run services to load the a
 * users liked recipes.
 * @param {Integer} id - The id of the user whose recipes we want to load.
 */
function likedRecipes(id) {
    return dispatch => {
        dispatch(request())

        services.recipe.likedRecipes(id)
                .then(results => {
                    dispatch(success(results))
                })
                .catch(error => {
                    dispatch(failure(error))
                })
    }

    function request() {
        return {
            type: constants.recipe.RECIPE_GET_LIKED_RECIPES_REQUEST
        }
    }

    function success(results) {
        return {
            type: constants.recipe.RECIPE_GET_LIKED_RECIPES_SUCCESS,
            payload: results
        }
    }

    function failure(error) {
        return {
            type: constants.recipe.RECIPE_GET_LIKED_RECIPES_FAILURE,
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
    search,
    userRecipes,
    likedRecipes
}

export { recipe }
