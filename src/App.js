import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

// we are starting with a class based component rather than a functional just to better understand how everything works
class App extends Component {
  // render is a lifecycle method
  render() {
    return (
      <div className='App'>
        <Navbar />
      </div>
    );
  }
}

export default App;
