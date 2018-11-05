import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../field.jsx'
import { required } from '../validation.js'
import '../styles.css'

class RegisterForm extends React.Component {
    render() {
        return (
            <div className="form register-form">
                <form onSubmit={this.props.handleSubmit}>
                    <p>Register</p>
                    <div className="row">
                        <div className="col-20">
                            <label>User Name</label>
                        </div>
                        <div className="col-80">
                            <Field name="userName" component={renderField} type="text" placeholder="User Name" validate={required}></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Real Name</label>
                        </div>
                        <div className="col-80">
                            <Field name="realName" component={renderField} type="text" placeholder="Real Name" validate={required}></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Password</label>
                        </div>
                        <div className="col-80">
                            <Field name="userPassword" component={renderField} type="password" placeholder="Password" validate={required}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Confirm Password</label>
                        </div>
                        <div className="col-80">
                            <Field name="confirmedUserPassword" component={renderField} type="password" placeholder="Confirm Password" validate={required}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Email Address</label>
                        </div>
                        <div className="col-80">
                            <Field name="emailAddress" component={renderField} type="text" placeholder="Email Address" validate={required}></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="right-justify">
                            <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid}>Register</button>
                        </div>
                    </div>
                </form>
            </div>
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
