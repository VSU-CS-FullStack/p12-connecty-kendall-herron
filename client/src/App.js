import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;