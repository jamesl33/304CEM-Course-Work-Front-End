/* eslint no-fallthrough: 0 */

import { reducer as formReducer } from 'redux-form'

const zxcvbn = require('zxcvbn')

const reducers = formReducer.plugin({
    RegisterForm: (state = { passwordStrength: undefined }, action) => {
        switch (action.type) {
        case '@@redux-form/CHANGE':
            if (action.meta.field === 'password') {
                if (action.payload === '') {
                    return Object.assign({}, state, {
                        passwordStrength: undefined
                    })
                }

                return Object.assign({}, state, {
                    passwordStrength: zxcvbn(action.payload).score + 1
                })
            }
        default:
            return state
        }
    }
})

export { reducers as formReducer }
