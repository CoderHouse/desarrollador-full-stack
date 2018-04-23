import React, {Component} from 'react';
import {connect} from "react-redux";

import Spinner from "../../../../components/UI/Spinner/Spinner";
import * as itemAction from '../../../../store/Item/Item.action';
import ItemCard from "../../../../components/Item/ItemCard/ItemCard";

import './ListTodo.css';

class ListTodo extends Component {

    componentDidMount() {
        this.props.fetchToDos(this.props.user.userName, this.props.match.params.listId);
    }

    onEditHandler = (itemId) => {

    };

    onRemoveHandler = (itemId) => {

    };

    render() {
        let content = <Spinner/>;

        if (!this.props.loadingToDos) {
            content = this.props.toDos.map((toDo) => (
                <ItemCard
                    key={toDo.id}
                    title={toDo.title}
                    description={toDo.description}
                    handleEditClick={() => this.onEditHandler(toDo.id)}
                    handleDeleteClick={() => this.onRemoveHandler(toDo.id)}/>
            ));
        }

        return content;
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
        fetchToDos: (user, listId) => dispatch(itemAction.fetchToDos(user, listId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
