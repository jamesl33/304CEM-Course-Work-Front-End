import React from 'react'
import { RecipeForm } from '../components/forms/Recipe'
import './RecipeUpload.css'

class RecipeUpload extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RecipeForm/>
            </React.Fragment>
        )
    }
}

export { RecipeUpload }
