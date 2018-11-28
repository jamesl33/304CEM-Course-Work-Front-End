import React from 'react'
import { connect } from 'react-redux'
import { RecipeList } from '../components/RecipeList'
import { RecipeSearch } from '../components/forms/RecipeSearch'
import { actions } from '../actions'
import './Home.css'

class Home extends React.Component {
    componentWillMount() {
        if (this.props.loggedIn) {
            const user = JSON.parse(localStorage.getItem('user'))

            this.props.loadUserRecipes(user.id)
            this.props.loadLikedRecipes(user.id)
        }

        this.props.loadRecent()
        this.props.loadTop()
    }

    render() {
        return (
            <>
                <RecipeSearch/>

                {this.props.loggedIn &&
                 <>
                     {(this.props.userRecipes && this.props.userRecipes.length > 0) &&
                      <div className="user-recipes">
                          <h1 className="headings">My Recipes</h1>
                          <RecipeList recipeList={this.props.userRecipes}/>
                      </div>}
                     {(this.props.likedRecipes && this.props.likedRecipes.length > 0) &&
                      <div className="liked-recipes">
                          <h1 className="headings">Liked Recipes</h1>
                          <RecipeList recipeList={this.props.likedRecipes}/>
                      </div>}
                 </>}
                <>
                    {this.props.recent &&

                     <div className="recent-recipes">
                         <h1 className="headings">Recent</h1>
                         <RecipeList recipeList={this.props.recent}/>
                     </div>}
                    {this.props.top &&

                     <div className="top-recipes">
                         <h1 className="headings">Top Rated</h1>
                         <RecipeList recipeList={this.props.top}/>
                     </div>}
                </>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    recent: state.recipe.recent,
    top: state.recipe.top,
    userRecipes: state.recipe.userRecipes,
    likedRecipes: state.recipe.likedRecipes,
    loggedIn: state.authentication.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
    loadRecent: () => {
        dispatch(actions.recipe.recent())
    },
    loadTop: () => {
        dispatch(actions.recipe.top())
    },
    loadUserRecipes: (id) => {
        dispatch(actions.recipe.userRecipes(id))
    },
    loadLikedRecipes: (id) => {
        dispatch(actions.recipe.likedRecipes(id))
    }
})

const connectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export { connectedHome as Home }
