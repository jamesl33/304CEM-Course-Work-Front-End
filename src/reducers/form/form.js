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
    RecipeForm: (state = {}, action) => {
        switch (action.type) {
        case constants.recipe.RECIPE_EDIT_SUCCESS:
            return Object.assign({}, state, {
                initial: action.payload,
                values: action.payload
            })
        default:
            return state
        }
    }
})

export { reducers as form }
