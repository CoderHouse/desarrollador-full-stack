import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";

import Main from "./containers/Main/Main";
import Login from "./containers/Authentication/Login";

import './App.css';
import {connect} from "react-redux";

class App extends Component {

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Login} />
                <Redirect exact to="/auth" />
            </Switch>
        );

        if ( this.props.user ) {
            routes = (
                <Switch>
                    <Route path="/app" component={Main} />
                    <Redirect to="/app" />
                </Switch>
            );
        }

        return routes;
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user
    };
};

export default withRouter(connect(mapStateToProps)(App));
