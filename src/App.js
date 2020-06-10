import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Form from './components/Form';
//import Location from './components/Location';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Route exactpath='/' component={Navbar}></Route>
         <Route exactpath='/' component={Form}></Route>
        {/* <Route exactpath='/' component={Location}></Route> */}
      </div>
    );
  }
}

export default App;
