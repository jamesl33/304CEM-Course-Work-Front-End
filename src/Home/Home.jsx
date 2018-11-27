import React from 'react'
import { connect } from 'react-redux'
import { RecipeList } from '../components/RecipeList'
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
            <>
                <div className="recent-recipes">
                    <h1 className="headings">Recent</h1>
                    <RecipeList recipeList={this.props.recent}/>
                </div>
                <div className="top-recipes">
                    <h1 className="headings">Top Rated</h1>
                    <RecipeList recipeList={this.props.top}/>
                </div>
            </>
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
