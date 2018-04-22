import React, { Component } from 'react';
import ItemCard from "../../../components/Item/ItemCard/ItemCard";
import {connect} from "react-redux";
import * as itemAction from "../../../store/Item/Item.action";

import './EditItem.css';

class EditItem extends Component {

    state = {
        item: {
            title: '',
            description: ''
        }
    };

    componentDidMount() {
        this.fetchitem();
    }

    componentWillReceiveProps(nextProps) {
        this.fetchitem(nextProps);
    }

    fetchitem(props = this.props) {
        const itemId = props.match.params.id;
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
        this.props.oneditItemById(this.state.item);
        this.props.history.push('/app');
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
        toDos: state.item.toDos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        oneditItemById: (item) => dispatch(itemAction.editItem(item)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
