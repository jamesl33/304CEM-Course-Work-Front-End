import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { renderInput } from '../fields.jsx'
import { RecipeList } from '../../RecipeList'
import { actions } from '../../../actions'
import '../forms.css'
import './RecipeSearch.css'

class RecipeSearch extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="form search-container">
                    <form>
                        <Field name="search" component={renderInput} type="text" placeholder="Search"/>
                        <div className="row">
                            <div className="right-justify">
                                <button type="submit" onClick={this.props.handleSubmit(this.props.onSearch)} disabled={this.props.invalid || this.props.searching}>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                {this.props.results && this.props.results.length > 0 &&
                 <div className="search-results">
                     <h1 className="headings">Search Results</h1>
                     <RecipeList recipeList={this.props.results}/>
                 </div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    results: state.form.RecipeSearch.results
})

const mapDispatchToProps = (dispatch) => ({
    onSearch: (values) => {
        dispatch(actions.recipe.search(values.search))
        dispatch(reset('RecipeSearch'))
    }
})

const connectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeSearch)

const reduxConnectedForm = reduxForm({
    form: 'RecipeSearch'
})(connectedForm)

export { reduxConnectedForm as RecipeSearch }
