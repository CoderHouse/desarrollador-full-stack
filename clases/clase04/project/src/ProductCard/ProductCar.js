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
                <button onClick={this.props.handleClick}>Delete</button>
            </div>
        );
    }
}

export default ProductCard;
//