import React from 'react'
import { RecipeForm } from '../components/forms/Recipe'
import './RecipeEdit.css'

class RecipeEdit extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RecipeForm match={this.props.match}/>
            </React.Fragment>
        )
    }
}

export { RecipeEdit }
