import React from 'react';
import './Avatar.css';

const avatar = (props) => {
    return (
        <div className="avatar-box">
            <img alt={props.alias} src={props.url} className="avatar-img"/>
            <div className="container">
                <h4><b>{props.alias}</b></h4>
            </div>
        </div>
    );
};

export default avatar;