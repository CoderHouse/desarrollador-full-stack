import React, { Component } from 'react';
import './ProductCard.css';

/**
 * Props: title - img - description
 * */
class ProductCard extends Component {

    render() {
        return (
            <div className="ProductCard">
                <img align="middle" className="ProductCardImage" alt={this.props.title} src={this.props.img}/>
                <div className="ProductCardContainer">
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export default ProductCard;