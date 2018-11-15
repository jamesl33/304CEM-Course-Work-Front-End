import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { renderInput } from '../fields.jsx'
import { email, passwordsMatch, required } from '../validation.js'
import { actions } from '../../../actions'
import '../forms.css'

class RegisterForm extends React.Component {
    render() {
        return (
            <div className="form register-form">
                <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <p>Register</p>
                    <div className="row">
                        <div className="col-20">
                            <label>User Name</label>
                        </div>
                        <div className="col-80">
                            <Field name="username" component={renderInput} type="text" placeholder="User Name" validate={required}></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Real Name</label>
                        </div>
                        <div className="col-80">
                            <Field name="name" component={renderInput} type="text" placeholder="Real Name" validate={required}></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Password</label>
                        </div>
                        <div className="col-80">
                            <Field name="password" component={renderInput} type="password" placeholder="Password" validate={required}/>
                        </div>
                    </div>
                    {this.props.passwordStrength &&
                     <div className="row password-strength">
                         <div className="col-20">
                             <label>Password Strength</label>
                         </div>
                         <div className="col-80">
                             <progress value={this.props.passwordStrength} max="5"></progress>
                         </div>
                     </div>}
                    <div className="row">
                        <div className="col-20">
                            <label>Confirm Password</label>
                        </div>
                        <div className="col-80">
                            <Field name="confirmedPassword" component={renderInput} type="password" placeholder="Confirm Password" validate={passwordsMatch}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label>Email Address</label>
                        </div>
                        <div className="col-80">
                            <Field name="email" component={renderInput} type="text" placeholder="Email Address" validate={[email, required]}></Field>
                        </div>
                    </div>
                    <div className="row">
                        <div className="right-justify">
                            <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid || this.props.registering}>Register</button>
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
    error: state.authentication.registration.error,
    passwordStrength: state.form.RegisterForm.passwordStrength,
    registering: state.authentication.registering
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(actions.user.register(values))
    }
})

const connectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm)

const reduxConnectedForm = reduxForm({
    form: 'RegisterForm'
})(connectedForm)

export { reduxConnectedForm as RegisterForm }
