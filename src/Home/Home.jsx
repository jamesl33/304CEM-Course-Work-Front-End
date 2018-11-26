import React from 'react'
import { connect } from 'react-redux'
import { constants } from '../constants'
import { actions } from '../actions'
import './Home.css'

class Home extends React.Component {
    componentWillMount() {
        this.props.loadRecent()
        this.props.loadTop()
    }

    render() {
        return (
            <div className="recipes">
                <div className="recent-recipes">
                    <h1>Recent Recipes</h1>
                    <ul>
                        {this.props.recent.map((recipe, recipeIndex) =>
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
                <div className="top-rated-recipes">
                    <h1>Top Rated Recipes</h1>
                    <ul>
                        {this.props.top.map((recipe, recipeIndex) =>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recent: state.recipe.recent,
    top: state.recipe.top
})

const mapDispatchToProps = (dispatch) => ({
    loadRecent: () => {
        dispatch(actions.recipe.recent())
    },
    loadTop: () => {
        dispatch(actions.recipe.top())
    }
})

const connectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export { connectedHome as Home }
