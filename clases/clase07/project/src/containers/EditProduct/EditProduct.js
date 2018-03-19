import React, { Component } from 'react';
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import {connect} from "react-redux";
import * as productAction from "../../store/product/product.action";

import './EditProduct.css';

class EditProduct extends Component {

    state = {
        product: {
            title: '',
            description: ''
        }
    };

    componentDidMount() {
        this.fetchProduct();
    }

    componentWillReceiveProps(nextProps) {
        this.fetchProduct(nextProps);
    }

    fetchProduct(props = this.props) {
        const productId = props.match.params.id;
        const product = props.products.find(product => product.id === productId);
        this.setState({ product });
    }

    handleTitleChange = (event) => {
        const product = {
            ...this.state.product,
            title: event.target.value
        };
        this.setState({ product })
    };

    handleDescriptionChange = (event) => {
        const product = {
            ...this.state.product,
            description: event.target.value
        };
        this.setState({ product })
    };

    handleEditClick = () => {
        this.props.onEditProductById(this.state.product);
        this.props.history.push('/');
    };

    render() {
        const {title, description, img} = this.state.product;

        return (
            <div className="edit-product-form">
                <input placeholder="Title"
                       value={title || ''}
                       onChange={this.handleTitleChange} />

                <input placeholder="Description"
                       value={description || ''}
                       onChange={this.handleDescriptionChange} />

                <ProductCard
                    title={title}
                    img={img}
                    description={description}
                />
                <button onClick={this.handleEditClick}>Edit</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEditProductById: (product) => dispatch(productAction.editProduct(product)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);