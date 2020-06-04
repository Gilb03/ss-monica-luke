import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Route exactpath='/' component={Form}></Route>
      </div>
    );
  }
}

export default App;
