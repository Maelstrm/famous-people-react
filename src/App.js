import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Star from './components/Star/Star'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Star />
      </div>
    );
  }
}

export default App;
