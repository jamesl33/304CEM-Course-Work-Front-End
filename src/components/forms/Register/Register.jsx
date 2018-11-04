import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../field.jsx'
import { required } from '../validation.js'

class RegisterForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <div>
                        <Field name="userName" component={renderField} type="text" placeholder="User Name" validate={required}></Field>
                    </div>
                    <label>Email Address</label>
                    <div>
                        <Field name="emailAddress" component={renderField} type="text" placeholder="Email Address" validate={required}></Field>
                    </div>
                    <label>Confirm Email Address</label>
                    <div>
                        <Field name="confirmedEmailAddress" component={renderField} type="text" placeholder="Confirm Email Address" validate={required}></Field>
                    </div>
                    <label>Password</label>
                    <div>
                        <Field name="userPassword" component={renderField} type="password" placeholder="Password" validate={required}/>
                    </div>
                    <label>Confirm Password</label>
                    <div>
                        <Field name="confirmedUserPassword" component={renderField} type="password" placeholder="Confirm Password" validate={required}/>
                    </div>
                    <div>
                        <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid}>Register</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: () => {
        // TODO
    }
})

const connectedForm = connect(
    mapDispatchToProps
)(RegisterForm)

const reduxConnectedForm = reduxForm({
    form: 'RegisterForm'
})(connectedForm)

export { reduxConnectedForm as RegisterForm }
