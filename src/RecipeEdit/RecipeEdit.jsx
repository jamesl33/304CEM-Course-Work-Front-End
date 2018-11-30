import React from 'react'
import { RecipeForm } from '../components/forms/Recipe'
import './RecipeEdit.css'

/**
 * @description This component is very simmilar to the RecipeUpload component
 * in that it just displays RecipeForm, however, this component passes
 * the match property to the RecipeForm component.
 */
class RecipeEdit extends React.Component {
    /**
     * @description Render the recipe editing form.
     */
    render() {
        return (
            <React.Fragment>
                <RecipeForm match={this.props.match}/>
            </React.Fragment>
        )
    }
}

export { RecipeEdit }
