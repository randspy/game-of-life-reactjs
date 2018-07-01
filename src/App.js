import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from "./board/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Game of life</h1>
        </header>
        <BoardComponent></BoardComponent>
      </div>
    );
  }
}

export default App;
