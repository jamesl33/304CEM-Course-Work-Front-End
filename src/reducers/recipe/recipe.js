/* eslint no-fallthrough: 0 */

import { constants } from '../../constants'

const recipe = (state = { loading: false }, action) => {
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
    default:
        return state
    }
}

export { recipe }
