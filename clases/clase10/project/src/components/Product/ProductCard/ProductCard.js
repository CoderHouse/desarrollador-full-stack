import React, {Component} from 'react';

import {ProductCardTitle} from './ProductCardTitle';
import Spinner from "../../UI/Spinner/Spinner";

import './ProductCard.css';
import Virtual from "../../../hoc/Virtual";

/**
 * Props: title - img - description
 * */
class ProductCard extends Component {

    render() {
        let content = <Spinner/>;
        if (!this.props.loading) {
            content = (
                <Virtual>
                    {this.props.preview ? <span className="ProductPreviewSpan">Preview</span> : null}
                    <ProductCardTitle title={this.props.title}/>
                    <img align="middle" className="ProductCardImage" alt={this.props.title} src={this.props.img}/>
                    <div className="ProductCardContainer">
                        <span>{this.props.description}</span>
                    </div>
                    {this.props.handleEditClick ? <button onClick={this.props.handleEditClick}>Edit</button> : null}
                    {this.props.handleDeleteClick ?
                        <button className="danger" onClick={this.props.handleDeleteClick}>Delete</button> : null}
                </Virtual>);
        }

        return (
            <div className="ProductCard">
                {content}
            </div>
        );
    }
}

export default ProductCard;