import React from 'react'
import { RecipeForm } from '../components/forms/Recipe'

/**
 * @description Display a form so that the user can upload new recipes to
 * the service.
 */
class RecipeUpload extends React.Component {
    /**
     * @description Render RecipeUpload component
     */
    render() {
        return (
            <React.Fragment>
                <RecipeForm/>
            </React.Fragment>
        )
    }
}

export { RecipeUpload }
