import React from 'react'
import { LoginForm } from '../components/forms/Login'

/**
 * @description The page that the user navigates to so that they can
 * login to the blog.
 */
class Login extends React.Component {
    /**
     * @description Render the Login page
     */
    render() {
        return (
            <React.Fragment>
                <LoginForm/>
            </React.Fragment>
        )
    }
}

export { Login }
