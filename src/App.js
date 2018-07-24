import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChessBoard from 'react-chess'
import { Container } from 'semantic-ui-react'
var Chess = require('chess.js');
var chess = new Chess();

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { pieces: ChessBoard.getDefaultLineup() }
    this.handleMovePiece = this.handleMovePiece.bind(this)
  }

  handleMovePiece(piece, fromSquare, toSquare) {
    const newPieces = this.state.pieces
      .map((curr, index) => {
        if (piece.index === index) {
          return `${piece.name}@${toSquare}`
        } else if (curr.indexOf(toSquare) === 2) {
          return false // To be removed from the board
        }
        return curr
      })
      .filter(Boolean)

    this.setState({ pieces: newPieces })
  }

  render() {
    const {pieces} = this.state
    return (
      <main style={{ maxWidth: '90vmin', margin: '1vmin auto' }}>
        <ChessBoard pieces={pieces} onMovePiece={this.handleMovePiece} />
      </main>
    );
  }
}

export default App;
