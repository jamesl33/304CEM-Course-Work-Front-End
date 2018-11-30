import React from 'react'
import { RegisterForm } from '../components/forms/Register'

/**
 * @description Component which represents the page the user visits so that
 * they can register an account for the blog.
 */
class Register extends React.Component {
    /**
     * @description Render the Register page component.
     */
    render() {
        return (
            <React.Fragment>
                <RegisterForm/>
            </React.Fragment>
        )
    }
}

export { Register }
