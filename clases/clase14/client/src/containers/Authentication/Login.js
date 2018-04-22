import React, {Component} from 'react';
import {connect} from "react-redux";

import * as authenticationType from "../../store/authentication/authentication.action";

import './Login.css';
import {Redirect, withRouter} from "react-router-dom";

class Login extends Component {

    usernameInput;

    handleLoginClick = () => {
        this.props.onAuthenticate(this.usernameInput.value);
        this.props.history.push('/app');
    }

    render() {
        if (this.props.user) {
            return <Redirect to="/app"/>
        }

        return (
            <div className="login-form">
                <img alt="coderhouse" src={require('../../assets/iso.png')}/>
                <div className="login-form-container">
                    <label htmlFor="username" className="username-label">Username:</label>
                    <input id="username" placeholder="Username" ref={(input) => this.usernameInput = input}/>
                    <button onClick={this.handleLoginClick}>Login</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuthenticate: (userName) => dispatch(authenticationType.authenticate(userName))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


