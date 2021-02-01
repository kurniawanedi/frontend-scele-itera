import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Home, Login } from '../../pages';
import Home from "../../pages/Home/Home"
import Login from "../../pages/Login/Login"


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
