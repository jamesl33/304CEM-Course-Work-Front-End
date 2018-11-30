import React from 'react'
import { connect } from 'react-redux'
import { RecipeList } from '../components/RecipeList'
import { actions } from '../actions'
import './Profile.css'

/**
 * @description Component which handles the rendering of the
 * users profile once it is fetched from the database.
 */
class Profile extends React.Component {
    /**
     * @description Fetch the users profile data while the component mounts
     */
    componentWillMount() {
        this.props.loadProfile(this.props.match.params.id)
    }

    /**
     * @description Render the users profile
     */
    render() {
        return (
            <React.Fragment>
                {this.props.profile &&
                 <div className="my-recipes">
                     <h1 className="headings">{`${this.props.profile.name}'s Recipes`}</h1>
                     <RecipeList recipeList={this.props.profile.recipes}/>
                 </div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.user.profile
})

const mapDispatchToProps = (dispatch) => ({
    loadProfile: (id) => {
        dispatch(actions.user.loadProfile(id))
    }
})

const connectedProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)

export { connectedProfile as Profile }
