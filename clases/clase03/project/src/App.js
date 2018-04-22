import React, { Component } from 'react';
import './App.css';
import ItemCard from "./ItemCard/ItemCard";

class App extends Component {

    state = {
        showPear: true
    };

    pear = {
        title: "Learn ReactJS",
        description: "Learn basics of ReactJS"
    };

    togglePear = () => {
        this.setState({
            showPear: !this.state.showPear
        })
    };

    render() {
        return (
            <div className="App">
                <h2>MY TO-DO LIST APP!</h2>
                <ItemCard
                    title="Learn JSX"
                    description="Learn basics of JSX"/>
                <div>
                    {this.state.showPear ? <ItemCard
                        title={this.pear.title}
                        description={this.pear.description}/> : null}
                    <button onClick={this.togglePear}>{this.state.showPear ? 'Hide' : 'Show'} Pear</button>
                </div>
            </div>
        );
    }
}

export default App;
