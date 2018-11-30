import React from 'react'
import './NotFound.css'

/**
 * @description This component is rendered whenever the user tries
 * to navigate to a url that doesn't exist.
 */
class NotFound extends React.Component {
    /**
     * @description Render the 404 page.
     */
    render() {
        return (
            <React.Fragment>
                <h1>404</h1>
            </React.Fragment>
        )
    }
}

export { NotFound }
