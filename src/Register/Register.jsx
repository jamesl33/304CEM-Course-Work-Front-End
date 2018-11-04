import React from 'react'
import { Nav } from '../components/Nav'
import { RegisterForm } from '../components/forms/Register'
import './Register.css'

class Register extends React.Component {
    render() {
        return (
            <>
                <Nav/>
                <RegisterForm/>
            </>
        )
    }
}

export { Register }
