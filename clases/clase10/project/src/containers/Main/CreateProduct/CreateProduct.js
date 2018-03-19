import React, { Component } from 'react';
import ProductCard from "../../../components/Product/ProductCard/ProductCard";

import './CreateProduct.css';
import Spinner from "../../../components/UI/Spinner/Spinner";
import {connect} from "react-redux";

class CreateProduct extends Component {

    state = {
        title: '',
        description: ''
    };

    titleInput;
    descriptionInput;

    imagePlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAY1BMVEX///8AAADd3d1iYmKtra309PT5+fnx8fHu7u6CgoLZ2dmqqqrg4OBXV1dERESGhobDw8M8PDzo6OgtLS24uLgoKCh7e3uioqIcHBxra2sREREyMjJKSkqOjo4XFxfJycmYmJg+dYoYAAABmUlEQVRYhe2X2XaCMBBAwxYWjSxFaVWq//+VSsCEhBAySNuHzn1jmLnGmSTnQAiC/DHU3wyqqX1vM3xUoxrV/17NboRE9fEH1G0fpGxz9ZcIf26trkS4tkpKY8ds6qMMJ1Y1PUHVsh+EXizmhmRQ9VWGo+95M3u+N/2ytdcybFzWQPJ8H0LVjQgH8+Yd/1dnoNrbL2+QoWuGQS6cxprPsJ03e3FftwervcvpHtjOy+5VWILVOtrhYKJw2jOo2r8rj4konA4SqM4JaUaP4agyfVPdpch1s3HlZJAwdcFzxPmIlNLDO+pgSBp6Eqql+iBB6viVxdfNtFKqbVKIWp57vu5YKyU5UC07eBjn7fqDqlDB1Km8LzMlsZiYCbmC1Im4i1ODS6OGqDtfxK+Hc2SSqaiDXFD3vs5tasCE1l09NIGWk51mpnJXi9vnUBEnmKvaYXIahavaYXI6H25q+KKVQdrUibHYTuykzleYx4O0qPXPdzduDup2lXk0yHl1tl9FlS6r3wbVqIapKxZsBHO84hEEQRAEQZDf4gHcnhi7zC9XEAAAAABJRU5ErkJggg==";

    saveProduct = (event) => {
        event.preventDefault();
        const newProduct = {
            title: this.state.title,
            description: this.state.description,
            img: this.imagePlaceholder
        };

        this.props.saveHandler(newProduct);

        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.titleInput.focus();


    };

    titleChanged = (el) => {
        this.setState({
            title: el.target.value
        })
    };

    descriptionChanged = (el) => {
        this.setState({
            description: el.target.value
        })
    };

    render() {
        let content = <Spinner />;

        if (!this.props.loadingAddProduct) {
            content = <form className="product-form" onSubmit={this.saveProduct}>
                <div className="product-creation">
                    <h3>Add Product</h3>
                    <input type="text" placeholder="Title" ref={(el) => this.titleInput = el}
                           onChange={this.titleChanged}/>
                    <input type="text" placeholder="Description" ref={(el) => this.descriptionInput = el}
                           onChange={this.descriptionChanged}/>
                    <ProductCard
                        title={this.state.title || 'Title'}
                        img={this.imagePlaceholder}
                        description={this.state.description || 'Description'}
                        preview={true}
                    />
                    <button onClick={this.saveProduct}>Save</button>
                </div>
            </form>;
        }

        return content;
    }
}

const mapStateToProps = state => {
    return {
        loadingAddProduct: state.product.loadingAddProduct
    };
};

export default connect(mapStateToProps)(CreateProduct);