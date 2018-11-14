import { combineReducers } from 'redux'
import { formReducer } from '../reducers/formReducer'
import { headerReducer } from '../reducers/headerReducer'
import { authenticationReducer } from '../reducers/authenticationReducer'

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    form: formReducer,
    header: headerReducer,
})

export { rootReducer }
