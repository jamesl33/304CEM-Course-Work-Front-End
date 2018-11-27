import React from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { renderTextarea } from '../fields.jsx'
import { required } from '../validation.js'
import { actions } from '../../../actions'
import './CommentBox.css'

class CommentBox extends React.Component {
    componentWillMount() {
        this.props.setRecipeId(this.props.recipeId)
    }

    render() {
        return (
            <div className="comment-box">
                <form>
                    <div className="comment-content">
                        <Field name="comment" component={renderTextarea} validate={required}/>
                    </div>
                    <div className="right-justify">
                        <button type="submit" onClick={this.props.handleSubmit(this.props.onComment)} disabled={this.props.commenting || this.props.invalid}>Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    setRecipeId: (id) => {
        dispatch(actions.comments.setRecipeId(id))
    },
    onComment: (values) => {
        dispatch(actions.comments.comment(values))
    }
})

const connectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBox)

const reduxConnectedForm = reduxForm({
    form: 'CommentBox',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(connectedForm)

export { reduxConnectedForm as CommentBox }
