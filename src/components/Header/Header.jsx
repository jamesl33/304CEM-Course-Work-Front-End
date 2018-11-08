import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/header'
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
                    <Link to="/login" onClick={() => {this.props.menuOpen && this.props.toggleMenu()}}>Login</Link>
                    <Link to="/register" onClick={() => {this.props.menuOpen && this.props.toggleMenu()}}>Register</Link>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    menuOpen: state.header.menuOpen
})

const mapDispatchToProps = (dispatch) => ({
    toggleMenu: () => {
        return dispatch(toggleMenu())

    }
})

const connectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export { connectedHeader as Header }
