import React, { Component } from 'react';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null
        };

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState( { error: null } );
                return req;
            } );
            this.resInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState( { error: error } );
            } );
        }

        componentWillUnmount () {
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        errorConfirmedHandler = () => {
            this.setState( { error: null } );
        }

        render () {
            const error = (
                <div className="error-form">
                    <span>{this.state.error ? this.state.error.message : ''}</span>
                    <button className="danger" onClick={this.errorConfirmedHandler}>Clear</button>
                </div>
            );
            const component = <WrappedComponent {...this.props} />;

            return this.state.error ? error : component;
        }
    }
}

export default withErrorHandler;