import React, {Component} from 'react';
import {connect} from "react-redux";

import './CreateList.css';
import Spinner from "../../../../components/UI/Spinner/Spinner";
import * as listActions from '../../../../store/List/List.action';

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

        this.props.saveHandler(this.props.user.userName, newItem);

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
        if (this.props.loadingAddList) {
            return <Spinner/>;
        }

        return <form className="list-form" onSubmit={this.saveList}>
            <div className="list-creation">
                <h3>LIST CREATION</h3>
                <input type="text" placeholder="Title" ref={(el) => this.titleInput = el}
                       onChange={this.titleChanged}/>
                <input type="text" placeholder="Description" ref={(el) => this.descriptionInput = el}
                       onChange={this.descriptionChanged}/>

                <button onClick={this.saveList}>Save</button>
            </div>
        </form>;
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        loadingAddList: state.list.loadingAddList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveHandler: (user, list) => dispatch(listActions.addList(user, list))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
