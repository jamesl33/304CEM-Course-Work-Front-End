import React from 'react'
import { LoginForm } from '../components/forms/Login'
import './Login.css'

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LoginForm/>
            </React.Fragment>
        )
    }
}

export { Login }
