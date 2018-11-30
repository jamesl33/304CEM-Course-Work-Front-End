import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import { helpers } from '../helpers'
import { Header } from '../components/Header'
import { Home } from '../Home'
import { Login } from '../Login'
import { Register } from '../Register'
import { RecipeUpload } from '../RecipeUpload'
import { RecipeEdit } from '../RecipeEdit'
import { Recipe } from '../Recipe'
import { Profile } from '../Profile'
import { NotFound } from '../NotFound'
import { Footer } from '../components/Footer'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
                <Router history={helpers.history}>
                    <React.Fragment>
                        <Header/>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/register" component={Register}/>
                                <Route exact path="/recipe/new" component={RecipeUpload}/>
                                <Route exact path="/recipe/edit/:id" component={RecipeEdit}/>
                                <Route exact path="/recipe/view/:id" component={Recipe}/>
                                <Route exact path="/profile/:id" component={Profile}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    };
}

export { App }
