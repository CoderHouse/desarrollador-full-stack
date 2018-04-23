import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    return (
        <div className="list-card">
            <span className="list-title">{props.title}</span>
            <span className="list-description">{props.description}</span>
            <div className="list-actions">
                <button onClick={props.onView}>View</button>
                <button onClick={props.onEdit}>Edit</button>
                <button onClick={props.onRemove}>Remove</button>
            </div>
        </div>
    );
};

export default ListItem;
