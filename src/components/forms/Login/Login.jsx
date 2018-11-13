import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../field.jsx'
import { required } from '../validation.js'
import { userActions } from '../../../actions/userActions'
import '../styles.css'

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
                            <Field name="userName" component={renderField} type="text" placeholder="Email / User Name" validate={required}/>
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
                        <div className="right-justify">
                            <button type="submit" disabled={this.props.pristine || this.props.submitting || this.props.invalid || this.props.loggingIn}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggingIn: state.login.loggingIn
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(userActions.login(values))
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
