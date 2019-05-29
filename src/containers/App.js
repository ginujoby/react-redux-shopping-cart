import React, { Component } from 'react';
import './App.css';
import ProductListContainer from '../containers/ProductListContainer';
import CartContainer from '../containers/CartContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Shopping Cart</h1>
                <hr />
                <ProductListContainer />
                <hr />
                <CartContainer />
            </div>
        );
    }
}

export default App;
