import React from 'react'
import { connect } from 'react-redux'
import { RecipeList } from '../components/RecipeList'
import { actions } from '../actions'
import './Profile.css'

class Profile extends React.Component {
    componentWillMount() {
        this.props.loadProfile(this.props.match.params.id)
    }

    render() {
        return (
            <>
                {this.props.profile &&
                 <div className="my-recipes">
                     <h1 className="headings">{`${this.props.profile.name}'s Recipes`}</h1>
                     <RecipeList recipeList={this.props.profile.recipes}/>
                 </div>}
            </>
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
