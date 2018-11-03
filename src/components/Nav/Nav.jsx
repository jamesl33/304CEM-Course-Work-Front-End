import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/nav'
import './Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className={'nav' + (this.props.menuOpen ? ' responsive' : '')}>
                    <div className="left-justify">
                        <Link to="" className="menu-icon" onClick={(e) => {e.preventDefault(); this.props.toggleMenu()}}>
                            <i className="fa fa-bars"></i>
                        </Link>
                        <Link to="/" onClick={() => {this.props.menuOpen && this.props.toggleMenu()}}>Home</Link>
                    </div>
                    <div className="right-justify">
                        <Link to="/login" onClick={() => {this.props.menuOpen && this.props.toggleMenu()}}>Login</Link>
                        <Link to="/register" onClick={() => {this.props.menuOpen && this.props.toggleMenu()}}>Register</Link>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    menuOpen: state.nav.menuOpen
})

const mapDispatchToProps = (dispatch) => ({
    toggleMenu: () => {
        return dispatch(toggleMenu())

    }
})

const connectedNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export { connectedNav as Nav }
