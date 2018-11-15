import { combineReducers } from 'redux'
import { authentication } from './authentication'
import { form } from './form'
import { header } from './header'

const reducers = combineReducers({
    authentication: authentication,
    form: form,
    header: header,
})

export { reducers }
