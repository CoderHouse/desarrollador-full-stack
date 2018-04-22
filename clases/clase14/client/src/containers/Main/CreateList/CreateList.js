import React, { Component } from 'react';
import {connect} from "react-redux";

import './CreateItem.css';

class CreateList extends Component {

    state = {
        title: '',
        description: ''
    };

    titleInput;
    descriptionInput;

    saveList = (event) => {
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
        let content = <Spinner />;

        if (!this.props.loadingAddItem) {
            content = <form className="list-form" onSubmit={this.saveList}>
                <div className="list-creation">
                    <h3>List Creation</h3>
                    <input type="text" placeholder="Title" ref={(el) => this.titleInput = el}
                           onChange={this.titleChanged}/>
                    <input type="text" placeholder="Description" ref={(el) => this.descriptionInput = el}
                           onChange={this.descriptionChanged}/>

                    <button onClick={this.saveList}>Save</button>
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

export default connect(mapStateToProps)(CreateList);
