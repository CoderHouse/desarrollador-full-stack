import React, {Component} from 'react';

import {ItemCardTitle} from './ItemCardTitle';
import Spinner from "../../UI/Spinner/Spinner";

import './ItemCard.css';
import Virtual from "../../../hoc/Virtual";

/**
 * Props: title - description
 * */
class ItemCard extends Component {

    render() {
        let content = <Spinner/>;
        if (!this.props.loading) {
            content = (
                <Virtual>
                    {this.props.preview ? <span className="ItemPreviewSpan">Preview</span> : null}
                    <ItemCardTitle title={this.props.title}/>
                    <div className="ItemCardContainer">
                        <span>{this.props.description}</span>
                    </div>
                    <div className="ItemCardActions">
                    {this.props.handleEditClick ? <button onClick={this.props.handleEditClick}>Edit</button> : null}
                    {this.props.handleDeleteClick ?
                        <button className="danger" onClick={this.props.handleDeleteClick}>Delete</button> : null}
                    </div>
                </Virtual>
            );
        }

        return (
            <div className="ItemCard">
                {content}
            </div>
        );
    }
}

export default ItemCard;
