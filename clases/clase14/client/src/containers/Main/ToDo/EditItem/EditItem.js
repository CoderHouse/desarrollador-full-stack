import React, { Component } from 'react';
import ItemCard from "../../../../components/Item/ItemCard/ItemCard";
import {connect} from "react-redux";
import * as itemAction from "../../../../store/Item/Item.action";

import './EditItem.css';

class EditItem extends Component {

    getUserName = () => this.props.user.userName;
    getListId = () => this.props.match.params.listId;
    getItemId = () => this.props.match.params.id;

    state = {
        item: {
            title: '',
            description: ''
        }
    };

    componentDidMount() {
        this.fetchItem();
    }

    componentWillReceiveProps(nextProps) {
        this.fetchItem(nextProps);
    }

    fetchItem(props = this.props) {
        const itemId = this.getItemId();
        const item = props.toDos.find(item => item.id === itemId);
        this.setState({ item: item || {} });
    }

    handleTitleChange = (event) => {
        const item = {
            ...this.state.item,
            title: event.target.value
        };
        this.setState({ item })
    };

    handleDescriptionChange = (event) => {
        const item = {
            ...this.state.item,
            description: event.target.value
        };
        this.setState({ item })
    };

    handleEditClick = () => {
        const userName = this.getUserName();
        const listId = this.getListId();
        const itemId = this.getItemId();
        this.props.onEditItem(userName, listId, this.state.item);
        this.props.history.push(`/app/${listId}`);
    };

    render() {
        const {title, description} = this.state.item;

        return (
            <div className="edit-item-form">
                <input placeholder="Title"
                       value={title || ''}
                       onChange={this.handleTitleChange} />

                <input placeholder="Description"
                       value={description || ''}
                       onChange={this.handleDescriptionChange} />

                <ItemCard
                    title={title}
                    description={description}
                    preview
                />
                <button onClick={this.handleEditClick}>Edit</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        toDos: state.item.toDos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEditItem: (userName, listId, item) => dispatch(itemAction.editItem(userName, listId, item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
