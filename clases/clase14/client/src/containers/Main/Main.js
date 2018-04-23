import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import CreateItem from './ToDo/CreateItem/CreateItem';
import EditItem from "./ToDo/EditItem/EditItem";
import Avatar from '../../components/Avatar/Avatar';

import * as authenticationAction from '../../store/authentication/authentication.action';
import axios from '../../axios-api';
import withErrorHandler from "../../hoc/withErrorHandler";

import './Main.css';
import Spinner from "../../components/UI/Spinner/Spinner";
import CreateList from "./List/CreateList/CreateList";
import List from "./List/List/List";
import ListTodo from "./ToDo/ListTodo/ListTodo";

class Main extends Component {
    state = {
        title: '',
        description: ''
    };

    avatarPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAMFBMVEX////NzMzQz8/x8PDKycn7+/vT0tL5+fn09PTS0dHq6urX1tba2dnu7u7i4uLe3d1ZF/sBAAAFGklEQVR4nO2d25qrIAyFBwVRQXj/t91ap9N22ukuEA5L81/10vXRhEWA8PXFMAzDMAzDMAzDMAzDoKGU0v2y9Hr9UftbiqDHxXkzyR8m490y6trflRM9O9tJKX4hZWfdfFTlizfiSfKPdGH8UvsLMzBPfym+Mc21v5IW7f4e58cxd8f5r6vZfCT6ItzMB8nto/9Y9EW4H2t/MQWfBPUjRwhxGzTU3wNua391IvrzqH7QbaAzW29iRG+Yvva3x9MHh/WNCVa36uJVC9GBTmRpqlF1K5umWgiLqNulqhbC1dYQzpKuWnRwazI9EMgWA9r0HebD/0L62jrC6ClEb2DN3slZ/AqUOycbbKzhJhtsqOFO8eK/AfLmM51qIWBqDum29B4YizoS/sdXy4JSWltIrMoVieJQHa1skAWJ8pSqhfAYwa1IViE3BhDZpBltnbkxZGvS0F6DG2P1ybJZ9vFl06oWAkP2WSewk8qO3u97jQGRfU5z+kUtu7aeDznnCuyssk9aZjip7DFxP/+RDqWWNpL6FZgSoib1KzBntWj9CopbofUrQFvclBM3yrStnKdNaR5BOO0G2A7ANhjBuaxnmh9v2jn7SvNzN+nW9o3GN7mpSwxXGp+8abe2b0xt/8t74hr5Fdn2CZY5l+y2g5u2sHInu+0pLFNGa72OeFLZxDsDN0xtZW/J4tE2htrK3nJS2RmWXzttx/ZJJ7CTujSamzHPtH5XJs+/vPH/+GnLDCctKpEf4dhAOMZBn8wbT+PfUNzufABkp3chTWs47QpG5y1JUW2yHqrFlNIk7txqgGT2AIVvad6lPENRTGy8cPgKknwOksPv6AnS+QCTxH+gOMACc2zljvQiKtD5jRsEe594GW0N7uRDeUBXt+9IDu62q6V/kRzciKG9OvNEwyKbL6m8JnE1MtX+/kjS/CmgM93RaW3iAL3KTsoqDNKr7KScp4c5Pf+ChOox3lL7RvxmQfsbAu+INuaoafybmF6+B+jmG3e9F+QS7xtiwhs7sHfm4FmsAw/sC+Hr7g5ynf0Lls2yWTbLZtnosGyWzbJZNstGh2WzbJZ9UNnhz6AdoKYUs0WAvDWwE1koh66m6XmI3PyTA9QR23tGl3R6xTjEEE8UjSl89CQ90zqkNz3VYp+fXY5DSrtgbAyNM3V717n9Ie9d3Mud75DGte3bFporIs9Mttmj5Sr8Nd4g5S0+1azW3J3pEvMVueb1tpSPc3bR38IbSm+bMykg+iK8GQ+zGNJurv+nM7XTmxpdqXG+RwpXMcrH2dYQvQu3daJcLS52VUmkfHDFfatypSP6FZ1xJYWP2brKhGML/dfjSyZ5KFGIWSN6akr0hpzyRrmabQkzFkFn8zl2l60/FgVDljKz9rXm6E+RwlMHeR03Fsrm3ghF68rO5HNWD0M24tTFsbwYmh2VEUr0hiH4p2dqQZ2X1AHXHiSoH5FpOb0l8x1GilXP0/OtDPH3TahfnS1L9Bu3cXe4WiH2Lhnt+1bliXtRK0d3v7JE9RJcGqgapdHFDHeWFpZliViK5ngEpzQRj+4gz9lXIubuvvY3UxB+GiDXUxkliehhkqvTeEnCeynmevynLMFPDdG+zliLYMOSq796WYK7uesDhPYa3KGyU7t+tUFw7zH05ddO8CLsCNN2xMR9hGk7YuI+xLQd3n0Ms1D8m2DZB1h2boTW0w5h0sKfEWPZyITKhq8f7oT2Sj1EIl9TOctm2SybZR9f9j9esF92LVSXDwAAAABJRU5ErkJggg==";

    handleEditItem = (itemId) => {
        this.props.history.push(`/app/edit/${itemId}`);
    };

    handleLogoutClick = () => {
        this.props.onRemoveAuthentication();
        this.props.history.push(`/auth`);
    };

    render() {
        let content = (
            <div className="center">
                <Spinner/>
            </div>
        );

        if (!this.props.loadingToDos) {
            content = (
                <Switch>
                    <Route
                        path="/app"
                        exact
                        render={(props) => ( <List {...props} />) }/>

                    <Route
                        path="/app/:listId"
                        render={(props) => ( <ListTodo {...props} /> )}/>
                </Switch>
            );
        }

        if (this.props.errorFetchToDos || this.props.errorRemoveItem || this.props.errorAddItem) {
            content = (
                <div className="error-form">
                    <h1>Something Wrong Happened</h1>
                </div>
            )
        }

        return (
            <div className="Main">
                <div className="main-header">
                    <Avatar url={this.avatarPlaceholder} alias={this.props.user.userName}/>
                    <button className="logout-button" onClick={this.handleLogoutClick}>Log out</button>
                </div>
                <div className="main-container">
                    <div className="panel">
                        <Switch>
                            <Route
                                path="/app"
                                exact
                                render={(props) => ( <CreateList {...props} />) }/>
                            <Route
                                path="/app/:listId"
                                exact
                                component={(props) => ( <CreateItem {...props} /> )}/>
                            <Route path="/app/:listId/:id"
                                   exact
                                   render={(props) => ( <EditItem {...props} />) }/>
                        </Switch>
                    </div>
                    <div className="toDos-container">
                        <div>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        errorFetchToDos: state.item.errorFetchToDos,
        errorRemoveItem: state.item.errorRemoveItem,
        errorAddItem: state.item.errorAddItem,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveAuthentication: () => dispatch(authenticationAction.removeAuthentication())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Main, axios));
