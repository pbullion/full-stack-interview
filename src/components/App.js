import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' exact component={HomePage} />
      </HashRouter>
    );
  }
}

export default App;
