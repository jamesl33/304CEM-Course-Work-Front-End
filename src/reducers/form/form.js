/* eslint no-fallthrough: 0 */

import { reducer as formReducer } from 'redux-form'
import { constants } from '../../constants'

const zxcvbn = require('zxcvbn')

const reducers = formReducer.plugin({
    RegisterForm: (state = { passwordStrength: undefined }, action) => {
        switch (action.type) {
        case '@@redux-form/CHANGE':
            if (action.meta.field === 'password') {
                if (action.payload === '') {
                    return Object.assign({}, state, {
                        passwordStrength: undefined
                    })
                }

                return Object.assign({}, state, {
                    passwordStrength: zxcvbn(action.payload).score + 1
                })
            }
        default:
            return state
        }
    },
    RecipeForm: (state = { saving: false, editing: false, publishing: false, togglingPublishedState: false, updaing: false, loading: false }, action) => {
        switch (action.type) {
        case constants.recipe.RECIPE_SAVE_REQUEST:
            return Object.assign({}, state, {
                saving: true
            })
        case constants.recipe.RECIPE_SAVE_SUCCESS:
            return Object.assign({}, state, {
                saving: false
            })
        case constants.recipe.RECIPE_SAVE_FAILURE:
            return Object.assign({}, state, {
                saving: false
            })
        case constants.recipe.RECIPE_EDIT_REQUEST:
            return Object.assign({}, state, {
                editing: true
            })
        case constants.recipe.RECIPE_EDIT_SUCCESS:
            return Object.assign({}, state, {
                initial: action.payload.recipe,
                values: action.payload.recipe,
                published: action.payload.published,
                editing: false
            })
        case constants.recipe.RECIPE_EDIT_FAILURE:
            return Object.assign({}, state, {
                editing: false
            })
        case constants.recipe.RECIPE_PUBLISH_REQUEST:
            return Object.assign({}, state, {
                publishing: true
            })
        case constants.recipe.RECIPE_PUBLISH_SUCCESS:
            return Object.assign({}, state, {
                publishing: false
            })
        case constants.recipe.RECIPE_PUBLISH_FAILURE:
            return Object.assign({}, state, {
                publishing: false
            })
        case constants.recipe.RECIPE_TOGGLE_PUBLISHED_REQUEST:
            return Object.assign({}, state, {
                togglingPublishedState: true
            })
        case constants.recipe.RECIPE_TOGGLE_PUBLISHED_SUCCESS:
            return Object.assign({}, state, {
                togglingPublishedState: false,
                published: !state.published
            })
        case constants.recipe.RECIPE_TOGGLE_PUBLISHED_FAILURE:
            return Object.assign({}, state, {
                togglingPublishedState: false
            })
        case constants.recipe.RECIPE_UPDATE_REQUEST:
            return Object.assign({}, state, {
                updating: true
            })
        case constants.recipe.RECIPE_UPDATE_SUCCESS:
            return Object.assign({}, state, {
                updating: false,
                values: state.values,
                initial: state.values
            })
        case constants.recipe.RECIPE_UPDATE_FAILURE:
            return Object.assign({}, state, {
                updating: false
            })
        default:
            return state
        }
    },
    CommentBox: (state = { commenting: false, replying: false }, action) => {
        switch (action.type) {
        case constants.comments.COMMENTS_COMMENT_REQUEST:
            return Object.assign({}, state, {
                commenting: true
            })
        case constants.comments.COMMENTS_COMMENT_SUCCESS:
            return Object.assign({}, state, {
                commenting: false
            })
        case constants.comments.COMMENTS_COMMENT_FAILURE:
            return Object.assign({}, state, {
                commenting: false
            })
        case constants.comments.COMMENTS_REPLY_REQUEST:
            return Object.assign({}, state, {
                replying: true
            })
        case constants.comments.COMMENTS_REPLY_SUCCESS:
            return Object.assign({}, state, {
                replying: false
            })
        case constants.comments.COMMENTS_REPLY_FAILURE:
            return Object.assign({}, state, {
                replying: false
            })
        default:
            return state
        }
    }
})

export { reducers as form }
