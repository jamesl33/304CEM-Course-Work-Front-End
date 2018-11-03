import React from 'react'
import { Router, Route } from 'react-router-dom'
import { history } from '../helpers'
import { Home } from '../Home'
import { Login } from '../Login'
import { Register } from '../Register'

class App extends React.Component {
    render() {
        return (
            <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    </div>
                </Router>
            </>
        )
    };
}

export { App }
