import React from 'react'
import { RegisterForm } from '../components/forms/Register'
import './Register.css'

class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RegisterForm/>
            </React.Fragment>
        )
    }
}

export { Register }
