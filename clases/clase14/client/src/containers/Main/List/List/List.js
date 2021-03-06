import React, {Component} from 'react';
import {connect} from "react-redux";

import './List.css';
import Spinner from "../../../../components/UI/Spinner/Spinner";
import * as listAction from '../../../../store/List/List.action';
import ListItem from "../../../../components/List/ListItem";

class List extends Component {

    componentDidMount() {
        this.props.fetchLists(this.props.user.userName);
    }

    onViewHandler = (listId) => {
        this.props.history.push(`/app/${listId}`);
    };

    onRemoveHandler = (listId) => {
        this.props.removeList(this.props.user.userName, listId);
    };

    render() {
        if (this.props.loadingLists) {
            return (
                <div className="loading-container">
                    <Spinner/>
                </div>
            );
        }

        const items = this.props.lists.map((item) => (
            <ListItem
                key={item.id}
                loading={item.loading}
                counter={item.items.length}
                title={item.title}
                description={item.description}
                onView={() => this.onViewHandler(item.id)}
                onRemove={() => this.onRemoveHandler(item.id)}/>
        ));

        return (
            <div className="list-container">
                {items}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
        loadingLists: state.list.loadingLists,
        lists: state.list.lists
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: user => dispatch(listAction.fetchLists(user)),
        removeList: (user, listId) => dispatch(listAction.removeList(user, listId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
