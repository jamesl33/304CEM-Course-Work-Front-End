/* eslint no-fallthrough: 0 */

import { constants } from '../../constants'

const recipe = (state = { loading: false, recent: [], top: [], liking: false, unliking: false, reporting: false }, action) => {
    switch (action.type) {
    case constants.recipe.RECIPE_LOAD_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })
    case constants.recipe.RECIPE_LOAD_SUCCESS:
        return Object.assign({}, state, action.payload, {
            loading: false
        })
    case constants.recipe.RECIPE_LOAD_FAILURE:
        return Object.assign({}, state, {
            loading: false
        })
    case constants.recipe.RECIPE_RECENT_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })
    case constants.recipe.RECIPE_RECENT_SUCCESS:
        return Object.assign({}, state, {
            recent: action.payload,
            loading: false
        })
    case constants.recipe.RECIPE_RECENT_FAILURE:
        return Object.assign({}, state, {
            loading: false
        })
    case constants.recipe.RECIPE_TOP_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })
    case constants.recipe.RECIPE_TOP_SUCCESS:
        return Object.assign({}, state, {
            top: action.payload,
            loading: false
        })
    case constants.recipe.RECIPE_TOP_FAILURE:
        return Object.assign({}, state, {
            loading: false
        })
    case constants.recipe.RECIPE_LIKE_REQUEST:
        return Object.assign({}, state, {
            liking: true
        })
    case constants.recipe.RECIPE_LIKE_SUCCESS:
        return Object.assign({}, state, {
            liking: false,
            liked: true,
            likes: state.likes + 1
        })
    case constants.recipe.RECIPE_LIKE_FAILURE:
        return Object.assign({}, state, {
            liking: false
        })
    case constants.recipe.RECIPE_UNLIKE_REQUEST:
        return Object.assign({}, state, {
            unliking: true
        })
    case constants.recipe.RECIPE_UNLIKE_SUCCESS:
        return Object.assign({}, state, {
            unliking: false,
            liked: false,
            likes: state.likes - 1
        })
    case constants.recipe.RECIPE_UNLIKE_FAILURE:
        return Object.assign({}, state, {
            unliking: false
        })
    case constants.recipe.RECIPE_REPORT_REQUEST:
        return Object.assign({}, state, {
            reporting: true
        })
    case constants.recipe.RECIPE_REPORT_SUCCESS:
        return Object.assign({}, state, {
            reporting: false,
            reported: true
        })
    case constants.recipe.RECIPE_REPORT_FAILURE:
        return Object.assign({}, state, {
            reporting: false
        })
    case constants.recipe.RECIPE_GET_USER_RECIPES_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })
    case constants.recipe.RECIPE_GET_USER_RECIPES_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            userRecipes: action.payload
        })
    case constants.recipe.RECIPE_GET_USER_RECIPES_FAILURE:
        return Object.assign({}, state, {
            loading: false
        })
    case constants.recipe.RECIPE_GET_LIKED_RECIPES_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })
    case constants.recipe.RECIPE_GET_LIKED_RECIPES_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            likedRecipes: action.payload
        })
    case constants.recipe.RECIPE_GET_LIKED_RECIPES_FAILURE:
        return Object.assign({}, state, {
            loading: false
        })
    case constants.comments.COMMENTS_COMMENT_SUCCESS:
        // Until the user refreshes the page show a version of thier comment
        let newComments = JSON.parse(state.comments)

        newComments.push({
            createdBy: JSON.parse(localStorage.getItem('user')).name, // This shouldn't fail because the user can't comment without being logged in
            comment: action.payload.comment,
            createdOn: Math.floor(new Date() / 1000),
            recipeId: action.payload.recipeId,
            parent: null
        })

        return Object.assign({}, state, {
            comments: JSON.stringify(newComments)
        })
    default:
        return state
    }
}

export { recipe }
