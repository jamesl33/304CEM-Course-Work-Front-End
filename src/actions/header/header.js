/**
 * @module actions:header
 */

import { constants } from '../../constants'

/**
 * @description The action which is dispatched when the user wants to toggle the
 * headers responsive naviation menu.
 */
const toggleMenu = () => {
    return {
        type: constants.header.HEADER_TOGGLE_MENU
    }
}

const header = {
    toggleMenu
}

export { header }
