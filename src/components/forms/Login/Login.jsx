import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { renderInput } from '../fields.jsx'
import { required } from '../validation.js'
import { actions } from '../../../actions'
import '../forms.css'

class LoginForm extends React.Component {
    render() {
        return (
            <div className="form login-form">
                <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <p>Log In</p>
                    <div className="row">
                        <div className="col-20">
                            <label>User Name</label>
                        </div>
                        <div className="col-80">
                            <Field name="username" component={renderInput} type="text" placeholder="Email / User Name" validate={required}/>
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
                    <div className="row">
                        <div className="right-justify">
                            <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid || this.props.loggingIn}>Login</button>
                        </div>
                    </div>
                    <div className="errors">
                        <span>{this.props.error && '* ' + this.props.error}</span>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.authentication.login.error,
    loggingIn: state.authentication.loggingIn
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(actions.user.login(values))
    }
})

const connectedForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

const reduxConnectedForm = reduxForm({
    form: 'LoginForm'
})(connectedForm)

export { reduxConnectedForm as LoginForm }
