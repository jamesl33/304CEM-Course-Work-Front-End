import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { renderTextarea } from '../fields.jsx'
import { required } from '../validation.js'
import { actions } from '../../../actions'
import './CommentBox.css'

class CommentBox extends React.Component {
    render() {
        return (
            <div className="comment-box">
                <form>
                    <div className="comment-content">
                        <Field name="comment" component={renderTextarea} validate={required}/>
                    </div>
                    <div className="right-justify">
                        <button type="submit" onClick={this.props.handleSubmit(data => this.props.onComment(data, this.props.recipeId))} disabled={this.props.commenting || this.props.invalid}>Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    commenting: state.form.CommentBox.commenting
})

const mapDispatchToProps = (dispatch) => ({
    onComment: (values, id) => {
        dispatch(actions.comments.comment(Object.assign({}, values, {
            recipeId: id
        })))
        dispatch(reset('CommentBox')) // Once the user has commented reset the form
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
