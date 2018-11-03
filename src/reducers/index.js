import { combineReducers } from 'redux'
import { navReducer } from '../reducers/nav'

const rootReducer = combineReducers({
    nav: navReducer
})

export { rootReducer }
