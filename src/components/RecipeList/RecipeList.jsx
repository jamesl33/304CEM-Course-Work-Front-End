import React from 'react'
import { constants } from '../../constants'
import './RecipeList.css'

class RecipeList extends React.Component {
    render() {
        return (
            <div className="recipes">
                <ul>
                    {this.props.recipeList.map((recipe, recipeIndex) =>
                        <li key={recipeIndex}>
                            <div className="recipe-card">
                                <div className="recipe-preview left-justify">
                                    <img src={constants.api.url + recipe.image.replace(/public/, '')} alt="Recipe preview"/>
                                </div>
                                <div className="recipe-meta right-justify">
                                    <h1>{recipe.title}</h1>
                                    <p>{recipe.description}</p>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export { RecipeList }
