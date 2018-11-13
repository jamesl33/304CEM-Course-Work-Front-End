import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/headerActions'
import { userActions } from '../../actions/userActions'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className={this.props.menuOpen ? 'responsive' : ''}>
                <div className="left-justify">
                    <Link to="" className="menu-icon" onClick={(e) => {e.preventDefault(); this.props.toggleMenu()}}>
                        <i className={'fa' + (this.props.menuOpen ? ' fa-times' : ' fa-bars')}></i>
                    </Link>
                    <Link to="/" onClick={() => {this.props.menuOpen && this.props.toggleMenu()}}>Home</Link>
                </div>
                <div className="right-justify">
                    {(!this.props.loggedIn &&
                      <>
                          <Link to="/login" onClick={() => {this.props.menuOpen && this.props.toggleMenu()}}>Login</Link>
                          <Link to="/register" onClick={() => {this.props.menuOpen && this.props.toggleMenu()}}>Register</Link>
                      </>) ||
                     <>
                         <Link to="/profile">{JSON.parse(localStorage.getItem('user')).userName}</Link>
                         <Link to="/logout" onClick={() => {!this.props.loggingOut && this.props.logout()}}>Logout</Link>
                     </>}
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    menuOpen: state.header.menuOpen,
    loggedIn: state.login.loggedIn,
    loggingOut: state.logout.loggingOut
})

const mapDispatchToProps = (dispatch) => ({
    toggleMenu: () => {
        return dispatch(toggleMenu())
    },
    logout: () => {
        return dispatch(userActions.logout())
    }
})

const connectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export { connectedHeader as Header }
