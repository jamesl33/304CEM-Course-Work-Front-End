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
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
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
