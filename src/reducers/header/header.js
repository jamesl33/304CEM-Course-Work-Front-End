/* eslint no-fallthrough: 0 */

import { constants } from '../../constants'

const header = (state = { menuOpen: false }, action) => {
    switch (action.type) {
    case constants.header.HEADER_TOGGLE_MENU:
        return Object.assign({}, state, {
            menuOpen: !state.menuOpen
        })
    default:
        return state
    }
}

export { header }
