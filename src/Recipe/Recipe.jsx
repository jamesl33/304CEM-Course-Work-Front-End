import React from 'react'
import { connect } from 'react-redux'
import { constants } from '../constants'
import { actions } from '../actions'
import './Recipe.css'

class Recipe extends React.Component {
    componentWillMount() {
        this.props.loadRecipe(this.props.match.params.id)
    }

    render() {
        return (
            <div className="recipe">
                <div className="recipe-header">
                    <div className="preview-image left-justify">
                        <img src={this.props.recipe.image && constants.api.url + this.props.recipe.image.replace(/public/, '')} alt="Recipe preview"/>
                    </div>
                    <div className="meta right-justify">
                        <div>
                            <h1>{this.props.recipe.title}</h1>
                            <p>{this.props.recipe.description}</p>
                        </div>
                    </div>
                </div>
                <ul className="steps">
                    {this.props.recipe.steps && JSON.parse(this.props.recipe.steps).map((step, stepIndex) =>
                        <li key={stepIndex}>
                            <div className="step">
                                {(step.image &&
                                  <>
                                      <div className="step-image left-justify">
                                          <img src={constants.api.url + step.image.replace(/public/, '')} alt="Step preview"/>
                                      </div>
                                      <div className="step-description right-justify">
                                          <p>{step.description}</p>
                                      </div>
                                  </>) ||
                                 <div className="step-description-no-image">
                                     <p>{step.description}</p>
                                 </div>}
                            </div>
                        </li>
                    )}
                </ul>
                <div className="user-actions">
                    {(!this.props.recipe.liked &&
                     <button onClick={() => this.props.likeRecipe(this.props.match.params.id)} disabled={this.props.recipe.liked || this.props.recipe.liking}>
                         <i className="fa fa-thumbs-up"></i>
                     </button>) ||
                     <button onClick={() => this.props.unlikeRecipe(this.props.match.params.id)} disabled={this.props.recipe.unliking}>
                         <i className="fa fa-thumbs-down"></i>
                     </button>}
                    <button onClick={() => this.props.reportRecipe(this.props.match.params.id)} disabled={this.props.recipe.reported || this.props.recipe.reporting}>
                        <i className="fa fa-ban"></i>
                    </button>
                </div>
                <ul className="comments">
                    {this.props.recipe.comments && JSON.parse(this.props.recipe.comments).map((comment, commentIndex) =>
                        <li key={commentIndex}>
                            {/* TODO - Handle recipe comments */}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recipe: state.recipe
})

const mapDispatchToProps = (dispatch) => ({
    loadRecipe: (id) => {
        dispatch(actions.recipe.load(id))
    },
    likeRecipe: (id) => {
        dispatch(actions.recipe.like(id))
    },
    unlikeRecipe: (id) => {
        dispatch(actions.recipe.unlike(id))
    },
    reportRecipe: (id) => {
        dispatch(actions.recipe.report(id))
    }
})

const connectedRecipe = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipe)

export { connectedRecipe as Recipe }
