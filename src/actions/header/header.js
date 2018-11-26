import { constants } from '../../constants'

const toggleMenu = () => {
    return {
        type: constants.header.HEADER_TOGGLE_MENU
    }
}

const header = {
    toggleMenu
}

export { header }
