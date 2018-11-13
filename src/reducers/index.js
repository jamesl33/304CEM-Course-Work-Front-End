import { combineReducers } from 'redux'
import { formReducer } from '../reducers/formReducer'
import { headerReducer } from '../reducers/headerReducer'
import { registrationReducer } from '../reducers/registrationReducer'
import { loginReducer } from '../reducers/loginReducer'
import { logoutReducer } from '../reducers/logoutReducer'

const rootReducer = combineReducers({
    form: formReducer,
    header: headerReducer,
    registration: registrationReducer,
    login: loginReducer,
    logout: logoutReducer
})

export { rootReducer }
