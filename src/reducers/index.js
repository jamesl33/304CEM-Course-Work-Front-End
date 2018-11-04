import { combineReducers } from 'redux'
import { navReducer } from '../reducers/nav'
import { formReducer } from '../reducers/form'

const rootReducer = combineReducers({
    nav: navReducer,
    form: formReducer
})

export { rootReducer }
