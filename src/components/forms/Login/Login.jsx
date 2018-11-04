import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../field.jsx'
import { required } from '../validation.js'

class LoginForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <div>
                        <Field name="userName" component={renderField} type="text" placeholder="Email / User Name" validate={required}/>
                    </div>
                    <label>Password</label>
                    <div>
                        <Field name="userPassword" component={renderField} type="password" placeholder="Password" validate={required}/>
                    </div>
                    <div>
                        <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid}>Login</button>
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
)(LoginForm)

const reduxConnectedForm = reduxForm({
    form: 'LoginForm'
})(connectedForm)

export { reduxConnectedForm as LoginForm }
