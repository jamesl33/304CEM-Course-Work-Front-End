import React from 'react'
import { Nav } from '../components/Nav'
import { LoginForm } from '../components/forms/Login'
import './Login.css'

class Login extends React.Component {
    render() {
        return (
            <>
                <Nav/>
                <LoginForm/>
            </>
        )
    }
}

export { Login }
