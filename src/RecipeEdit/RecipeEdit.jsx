import React from 'react'
import { RecipeForm } from '../components/forms/Recipe'
import './RecipeEdit.css'

class RecipeEdit extends React.Component {
    render() {
        return (
            <>
                <RecipeForm id={this.props.match.params.id}/>
            </>
        )
    }
}

export { RecipeEdit }
