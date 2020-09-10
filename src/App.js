import React from 'react';
import './App.css';
import Row from './Row'

function App(props) {
  return (
    <div className="App">
      <h1>Hey Lets Build Netflix Frontend</h1>
      <Row title="Netflix ORIGINALS"/>
      <Row title="Trending Now"/>
    </div>
  );
}

export default App;
