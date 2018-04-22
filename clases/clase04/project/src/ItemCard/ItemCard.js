import React, { Component } from 'react';
import './ItemCard.css';

/**
 * Props: title - description
 * */
class ItemCard extends Component {

    render() {
        return (
            <div className="ItemCard">
                <h2 className="ItemCardTitleTitle">{this.props.title}</h2>
                <div className="ItemCardContainer">
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export default ItemCard;
