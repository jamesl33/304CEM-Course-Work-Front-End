import React from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { renderInput, renderTextarea, renderFileInput } from '../fields.jsx'
import { required } from '../validation.js'
import { actions } from '../../../actions'
import '../forms.css'

const renderSteps = ({ fields, meta: { touched, error, warning }}) => (
    <>
        <ul>
            {fields.map((step, stepIndex) =>
                <li key={stepIndex}>
                    <div className="row">
                        <div className="row">
                            <label>{`Step ${stepIndex + 1}`}</label>
                        </div>
                        <div className="col-100">
                            <Field name={`${step}.image`} component={renderFileInput}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-100">
                            <Field name={`${step}.description`} component={renderTextarea} rows="5" validate={required}/>
                        </div>
                    </div>
                </li>
            )}
            <div className="row right-justify">
                <button type="button" onClick={() => {fields.push()}}>Add Step</button>
                <button type="button" onClick={() => {fields.pop()}} disabled={fields.length <= 1}>Remove Step</button>
            </div>
        </ul>
    </>
)

class RecipeForm extends React.Component {
    componentWillMount() {
        if (this.props.id) {
            this.props.editRecipe(this.props.id)
        }
    }

    render() {
        return (
            <div className="form recipe-form">
                <form>
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
                            <label>Image</label>
                        </div>
                        <div className="col-80">
                            <Field name="image" component={renderFileInput} validate={this.props.id ? undefined : required}/>
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
                        {(this.props.id &&
                          <div className="right-justify">
                              <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid || this.props.registering} onClick={this.props.handleSubmit(this.props.onUpdate)}>Update</button>
                          </div>) ||
                         <div className="right-justify">
                             <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid || this.props.registering} onClick={this.props.handleSubmit(this.props.onSave)}>Save</button>
                             <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid || this.props.registering} onClick={this.props.handleSubmit(this.props.onPublish)}>Publish</button>
                         </div>}
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
    editRecipe: (id) => {
        dispatch(actions.recipe.edit(id))
    },
    onSave: (values) => {
        dispatch(actions.recipe.save(values))
    },
    onPublish: (values) => {
        dispatch(actions.recipe.publish(values))
    },
    onUpdate: (values) => {
        dispatch(actions.recipe.update(values))
    }
})

const connectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeForm)

const reduxConnectedForm = reduxForm({
    form: 'RecipeForm',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    initialValues: { steps: [{}] }
})(connectedForm)

export { reduxConnectedForm as RecipeForm }
