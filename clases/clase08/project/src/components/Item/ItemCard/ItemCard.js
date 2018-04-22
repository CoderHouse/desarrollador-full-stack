import React, { Component } from 'react';
import './ItemCard.css';
import {ItemCardTitle} from './ItemCardTitle';

/**
 * Props: title - description
 * */
class ItemCard extends Component {

    render() {
        return (
            <div className="ItemCard">
                {this.props.preview ? <span className="ItemPreviewSpan">Preview</span> : null}
                <ItemCardTitle title={this.props.title}/>
                <div className="ItemCardContainer">
                    <span>{this.props.description}</span>
                </div>
                {this.props.handleEditClick ? <button onClick={this.props.handleEditClick}>Edit</button> : null}
                {this.props.handleDeleteClick ? <button className="danger" onClick={this.props.handleDeleteClick}>Delete</button> : null}
            </div>
        );
    }
}

export default ItemCard;
