import { combineReducers } from 'redux'
import { authentication } from './authentication'
import { form } from './form'
import { header } from './header'
import { recipe } from './recipe'

const reducers = combineReducers({
    authentication: authentication,
    form: form,
    header: header,
    recipe: recipe
})

export { reducers }
