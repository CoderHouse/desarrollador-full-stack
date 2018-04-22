import React, { Component } from 'react';
import ItemCard from "../../../components/Item/ItemCard/ItemCard";

import './CreateItem.css';
import Spinner from "../../../components/UI/Spinner/Spinner";
import {connect} from "react-redux";

import * as itemAction from "../../../store/Item/Item.action";

class CreateItem extends Component {

    state = {
        title: '',
        description: ''
    };

    titleInput;
    descriptionInput;

    saveItem = (event) => {
        event.preventDefault();
        const newItem = {
            title: this.state.title,
            description: this.state.description,
        };

        this.props.onItemAdded(newItem);

        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.titleInput.focus();


    };

    titleChanged = (el) => {
        this.setState({
            title: el.target.value
        })
    };

    descriptionChanged = (el) => {
        this.setState({
            description: el.target.value
        })
    };

    render() {
        let content = <Spinner />;

        if (!this.props.loadingAddItem) {
            content = <form className="item-form" onSubmit={this.saveItem}>
                <div className="item-creation">
                    <h3>ADD ITEM TO YOUR TO-DO LIST</h3>
                    <input type="text" placeholder="Title" ref={(el) => this.titleInput = el}
                           onChange={this.titleChanged}/>
                    <input type="text" placeholder="Description" ref={(el) => this.descriptionInput = el}
                           onChange={this.descriptionChanged}/>
                    <ItemCard
                        title={this.state.title || 'Title'}
                        description={this.state.description || 'Description'}
                        preview={true}
                    />
                    <button onClick={this.saveItem}>Save</button>
                </div>
            </form>;
        }

        return content;
    }
}

const mapStateToProps = state => {
    return {
        loadingAddItem: state.item.loadingAddItem
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItemAdded: (user, item) => dispatch(itemAction.addItem(user, item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
