import React from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { renderInput, renderTextarea } from '../fields.jsx'
import { required } from '../validation.js'
import '../styles.css'

const renderSteps = ({ fields, meta: { touched, error, warning }}) => (
    <ul>
        {fields.map((field, index) =>
            <li key={index}>
                <div className="row">
                    <div className="col-20">
                        <label>{'Step ' + (index + 1) + ' image'}</label>
                    </div>
                    <div className="col-80">

                    </div>
                </div>
                <div className="row">
                    <div className="col-20">
                        <label>{'Step ' + (index + 1)}</label>
                    </div>
                    <div className="col-80">
                        <Field name={'step-' + index} component={renderTextarea} rows="5" validate={required}/>
                    </div>
                </div>
            </li>
        )}
        <div className="left-justify">
            <button type="button" onClick={() => {fields.push({})}}>Add Step</button>
            <button type="button" onClick={() => {fields.pop()}}>Remove Step</button>
        </div>
    </ul>
)

class RecipeForm extends React.Component {
    render() {
        return (
            <div className="form recipe-form">
                <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <p>Recipe Upload</p>
                    <div className="row">
                        <div className="col-20">
                            <label>Title</label>
                        </div>
                        <div className="col-80">
                            <Field name="title" component={renderInput} type="text" placeholder="Title" validate={required}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Description</label>
                        </div>
                        <div className="col-80">
                            <Field name="description" component={renderInput} type="text" placeholder="Description" validate={required}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Ingredients</label>
                        </div>
                        <div className="col-80">
                            <Field name="ingredients" component={renderInput} type="text" placeholder="Ingredients" validate={required}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Preparation Steps</label>
                        </div>
                        <div className="col-80">
                            <FieldArray name="steps" component={renderSteps}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="right-justify">
                            <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid || this.props.registering}>Save</button>
                            <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid || this.props.registering}>Publish</button>
                        </div>
                    </div>
                    <div className="error">
                        <span>{this.props.error && '* ' + this.props.error}</span>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        console.log(values)
    }
})

const connectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeForm)

const reduxConnectedForm = reduxForm({
    form: 'RecipeForm'
})(connectedForm)

export { reduxConnectedForm as RecipeForm }
