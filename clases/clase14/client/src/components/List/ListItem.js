import React from 'react';
import './ListItem.css';
import ProgressBar from "../UI/ProgressBar/ProgressBar";

const ListItem = (props) => {
    if (props.loading) {
        return (
            <div className="list-card">
                <ProgressBar/>
            </div>
        )
    }
    return (
        <div className="list-card">
            <span className="list-title">{props.title}</span>
            <span className="list-description"><b>Description: </b>{props.description}</span>
            <span className="list-counter"><b>Items: </b>{props.counter}</span>
            <div className="list-actions">
                <button onClick={props.onView}>View</button>
                <button className="danger" onClick={props.onRemove}>Remove</button>
            </div>
        </div>
    );
};

export default ListItem;

