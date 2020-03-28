import React, { Component } from 'react';
import Header from './components/layout/Header';
import Home from './components/pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

export default App;
