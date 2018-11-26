import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu.js';
import pop2 from './components/Pop2.js';
import Apper from './components/Wrapper.js';
import Cart from './components/Cart.js';
import theCart from './components/theCart.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Menu}/>
          <Route path ="/theCart" component={theCart}/>

        </div>
      </Router>

    );
  }
}

export default App;
