import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chess from 'react-chess'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <main style={{maxWidth: '90vmin', margin: '1vmin auto'}}>
        <Chess />
      </main>
    );
  }
}

export default App;
