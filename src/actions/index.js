/**
 * @module actions
 */

import { user } from './user'
import { header } from './header'
import { recipe } from './recipe'
import { comments } from './comments'

const actions = {
    user: user,
    header: header,
    recipe: recipe,
    comments: comments
}

export { actions }
