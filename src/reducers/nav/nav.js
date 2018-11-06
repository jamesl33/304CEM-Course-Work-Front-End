/* eslint no-fallthrough: 0 */

const navReducer = (state = {menuOpen: false}, action) => {
    switch (action.type) {
    case 'TOGGLE_MENU':
        return Object.assign({}, state, {
            menuOpen: !state.menuOpen
        })
    default:
        return state
    }
}

export { navReducer }
