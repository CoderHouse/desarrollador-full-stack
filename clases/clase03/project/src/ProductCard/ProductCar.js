import React, { Component } from 'react';
import './ProductCar.css';

/**
 * Props: img - description
 * */
class ProductCard extends Component {

    render() {
        return (
            <div className="ProductCard">
                <img src={this.props.img}/>
                <div className="container">
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export default ProductCard;
//