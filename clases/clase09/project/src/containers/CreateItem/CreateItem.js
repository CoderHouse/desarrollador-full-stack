import React, { Component } from 'react';
import ItemCard from "../../components/Item/ItemCard/ItemCard";

import './CreateItem.css';

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

        this.props.saveHandler(newItem);

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
        return (
            <form className="item-form" onSubmit={this.saveItem}>
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
            </form>
        );
    }
}

export default CreateItem;
