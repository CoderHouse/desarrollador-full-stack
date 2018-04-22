import React, {Component} from 'react';
import './App.css';
import ItemCard from "./ItemCard/ItemCard";

class App extends Component {

    constructor() {
        super();
        this.state = {
            toDos: [
                {
                    title: "Learn JSX",
                    description: "Learn basics of JSX"
                },
                {
                    title: "Learn ReactJS",
                    description: "Learn basics of ReactJS"
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <div className="app-header">
                    <h2>MY TO-DO LIST APP!</h2>
                </div>
                <div className="app-container">
                    <div className="toDos-layout">
                        {
                            this.state.toDos.map((item, index) => (
                                <ItemCard
                                    key={index + 1}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
