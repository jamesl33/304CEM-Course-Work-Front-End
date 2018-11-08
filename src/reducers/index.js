import { combineReducers } from 'redux'
import { headerReducer } from '../reducers/header'
import { formReducer } from '../reducers/form'

const rootReducer = combineReducers({
    header: headerReducer,
    form: formReducer
})

export { rootReducer }
