import React from 'react'
import { Router, Route } from 'react-router-dom'
import { helpers } from '../helpers'
import { Header } from '../components/Header'
import { Home } from '../Home'
import { Login } from '../Login'
import { Register } from '../Register'
import { RecipeUpload } from '../RecipeUpload'
import { RecipeEdit } from '../RecipeEdit'
import { Footer } from '../components/Footer'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
                <Router history={helpers.history}>
                    <>
                        <Header/>
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/recipe/new" component={RecipeUpload}/>
                            <Route exact path="/recipe/edit/:id" component={RecipeEdit}/>
                        </div>
                        <Footer/>
                    </>
                </Router>
            </>
        )
    };
}

export { App }
