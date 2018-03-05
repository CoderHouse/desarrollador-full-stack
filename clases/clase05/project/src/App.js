import React, {Component} from 'react';
import './App.css';
import ProductCard from './ProductCard/ProductCard';
import Avatar from './Avatar/Avatar';

import request from './request';

class App extends Component {

    titleInput;
    descriptionInput;

    avatarPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAMFBMVEX////NzMzQz8/x8PDKycn7+/vT0tL5+fn09PTS0dHq6urX1tba2dnu7u7i4uLe3d1ZF/sBAAAFGklEQVR4nO2d25qrIAyFBwVRQXj/t91ap9N22ukuEA5L81/10vXRhEWA8PXFMAzDMAzDMAzDMAzDoKGU0v2y9Hr9UftbiqDHxXkzyR8m490y6trflRM9O9tJKX4hZWfdfFTlizfiSfKPdGH8UvsLMzBPfym+Mc21v5IW7f4e58cxd8f5r6vZfCT6ItzMB8nto/9Y9EW4H2t/MQWfBPUjRwhxGzTU3wNua391IvrzqH7QbaAzW29iRG+Yvva3x9MHh/WNCVa36uJVC9GBTmRpqlF1K5umWgiLqNulqhbC1dYQzpKuWnRwazI9EMgWA9r0HebD/0L62jrC6ClEb2DN3slZ/AqUOycbbKzhJhtsqOFO8eK/AfLmM51qIWBqDum29B4YizoS/sdXy4JSWltIrMoVieJQHa1skAWJ8pSqhfAYwa1IViE3BhDZpBltnbkxZGvS0F6DG2P1ybJZ9vFl06oWAkP2WSewk8qO3u97jQGRfU5z+kUtu7aeDznnCuyssk9aZjip7DFxP/+RDqWWNpL6FZgSoib1KzBntWj9CopbofUrQFvclBM3yrStnKdNaR5BOO0G2A7ANhjBuaxnmh9v2jn7SvNzN+nW9o3GN7mpSwxXGp+8abe2b0xt/8t74hr5Fdn2CZY5l+y2g5u2sHInu+0pLFNGa72OeFLZxDsDN0xtZW/J4tE2htrK3nJS2RmWXzttx/ZJJ7CTujSamzHPtH5XJs+/vPH/+GnLDCctKpEf4dhAOMZBn8wbT+PfUNzufABkp3chTWs47QpG5y1JUW2yHqrFlNIk7txqgGT2AIVvad6lPENRTGy8cPgKknwOksPv6AnS+QCTxH+gOMACc2zljvQiKtD5jRsEe594GW0N7uRDeUBXt+9IDu62q6V/kRzciKG9OvNEwyKbL6m8JnE1MtX+/kjS/CmgM93RaW3iAL3KTsoqDNKr7KScp4c5Pf+ChOox3lL7RvxmQfsbAu+INuaoafybmF6+B+jmG3e9F+QS7xtiwhs7sHfm4FmsAw/sC+Hr7g5ynf0Lls2yWTbLZtnosGyWzbJZNstGh2WzbJZ9UNnhz6AdoKYUs0WAvDWwE1koh66m6XmI3PyTA9QR23tGl3R6xTjEEE8UjSl89CQ90zqkNz3VYp+fXY5DSrtgbAyNM3V717n9Ie9d3Mud75DGte3bFporIs9Mttmj5Sr8Nd4g5S0+1azW3J3pEvMVueb1tpSPc3bR38IbSm+bMykg+iK8GQ+zGNJurv+nM7XTmxpdqXG+RwpXMcrH2dYQvQu3daJcLS52VUmkfHDFfatypSP6FZ1xJYWP2brKhGML/dfjSyZ5KFGIWSN6akr0hpzyRrmabQkzFkFn8zl2l60/FgVDljKz9rXm6E+RwlMHeR03Fsrm3ghF68rO5HNWD0M24tTFsbwYmh2VEUr0hiH4p2dqQZ2X1AHXHiSoH5FpOb0l8x1GilXP0/OtDPH3TahfnS1L9Bu3cXe4WiH2Lhnt+1bliXtRK0d3v7JE9RJcGqgapdHFDHeWFpZliViK5ngEpzQRj+4gz9lXIubuvvY3UxB+GiDXUxkliehhkqvTeEnCeynmevynLMFPDdG+zliLYMOSq796WYK7uesDhPYa3KGyU7t+tUFw7zH05ddO8CLsCNN2xMR9hGk7YuI+xLQd3n0Ms1D8m2DZB1h2boTW0w5h0sKfEWPZyITKhq8f7oT2Sj1EIl9TOctm2SybZR9f9j9esF92LVSXDwAAAABJRU5ErkJggg==";

    constructor() {
        super();
        this.state = {products: []};

        request('http://localhost:4000/products')
            .then(products => {
                this.setState({products: JSON.parse(products)});
            });
    }

    deleteProduct = (index) => {
        const products = [...this.state.products];
        products.splice(index, 1);
        this.setState({products})
    };

    saveProduct = (event) => {
        event.preventDefault();
        const products = [...this.state.products];
        products.push({
            title: this.titleInput.value,
            description: this.descriptionInput.value,
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAY1BMVEX///8AAADd3d1iYmKtra309PT5+fnx8fHu7u6CgoLZ2dmqqqrg4OBXV1dERESGhobDw8M8PDzo6OgtLS24uLgoKCh7e3uioqIcHBxra2sREREyMjJKSkqOjo4XFxfJycmYmJg+dYoYAAABmUlEQVRYhe2X2XaCMBBAwxYWjSxFaVWq//+VSsCEhBAySNuHzn1jmLnGmSTnQAiC/DHU3wyqqX1vM3xUoxrV/17NboRE9fEH1G0fpGxz9ZcIf26trkS4tkpKY8ds6qMMJ1Y1PUHVsh+EXizmhmRQ9VWGo+95M3u+N/2ytdcybFzWQPJ8H0LVjQgH8+Yd/1dnoNrbL2+QoWuGQS6cxprPsJ03e3FftwervcvpHtjOy+5VWILVOtrhYKJw2jOo2r8rj4konA4SqM4JaUaP4agyfVPdpch1s3HlZJAwdcFzxPmIlNLDO+pgSBp6Eqql+iBB6viVxdfNtFKqbVKIWp57vu5YKyU5UC07eBjn7fqDqlDB1Km8LzMlsZiYCbmC1Im4i1ODS6OGqDtfxK+Hc2SSqaiDXFD3vs5tasCE1l09NIGWk51mpnJXi9vnUBEnmKvaYXIahavaYXI6H25q+KKVQdrUibHYTuykzleYx4O0qPXPdzduDup2lXk0yHl1tl9FlS6r3wbVqIapKxZsBHO84hEEQRAEQZDf4gHcnhi7zC9XEAAAAABJRU5ErkJggg=='
        });
        this.setState({products});
        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.titleInput.focus();
    };

    render() {
        return (
            <div className="App">
                <div className="app-header">
                    <Avatar url={this.avatarPlaceholder} alias="Eugenio Valeiras"></Avatar>
                </div>
                <div className="app-container">
                    <form className="product-form" onSubmit={this.saveProduct}>
                        <div className="product-creation">
                            <h3>Add Product</h3>
                            <input type="text" placeholder="Title" ref={(el) => this.titleInput = el}/>
                            <input type="text" placeholder="Description" ref={(el) => this.descriptionInput = el}/>
                            <button onClick={this.saveProduct}>Save</button>
                        </div>
                    </form>
                    <div className="products-container">
                        <div className="products-layout">
                            {
                                this.state.products.map((product, index) => (
                                    <ProductCard
                                        key={index + 1}
                                        title={product.title}
                                        img={product.img}
                                        description={product.description}
                                        handleClick={() => this.deleteProduct(index)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
