import React, {Component} from 'react';
import {connect} from "react-redux";

import Spinner from "../../../../components/UI/Spinner/Spinner";
import * as itemAction from '../../../../store/Item/Item.action';
import ItemCard from "../../../../components/Item/ItemCard/ItemCard";

import './ListTodo.css';

class ListTodo extends Component {

    getUserName = () => this.props.user.userName;
    getListId = () => this.props.match.params.listId;

    componentDidMount() {
        const userName = this.getUserName();
        const listId = this.getListId();
        this.props.fetchToDos(userName, listId);
    }

    onEditHandler = (itemId) => {
        const listId = this.getListId();
        this.props.history.push(`/app/${listId}/${itemId}`);
    };

    onRemoveHandler = (itemId) => {
        const userName = this.getUserName();
        const listId = this.getListId();
        this.props.deleteToDo(userName, listId, itemId);
    };

    render() {
        if (this.props.loadingToDos) {
            return (
                <div className="loading-container">
                    <Spinner/>
                </div>
            );
        }

        let content = this.props.toDos.map((toDo) => (
            <ItemCard
                key={toDo.id}
                loading={toDo.loading}
                title={toDo.title}
                description={toDo.description}
                handleEditClick={() => this.onEditHandler(toDo.id)}
                handleDeleteClick={() => this.onRemoveHandler(toDo.id)}/>
        ));

        return (
            <div className="toDos-container">
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        loadingToDos: state.item.loadingToDos,
        toDos: state.item.toDos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchToDos: (user, listId) => dispatch(itemAction.fetchToDos(user, listId)),
        deleteToDo: (userName, listId, itemId) => dispatch(itemAction.removeItem(userName, listId, itemId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);

