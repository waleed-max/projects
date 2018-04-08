import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
//import Home from './pages/Home.jsx';
//<Route path="/Result" component={Result}/>
 import Result from './pages/Result.js';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Result}/>

      </div>
      </Router>
    );
  }
}

export default App;
