import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'

function App(props) {
  return (
    <div className="App">
      <h1>Hey Lets Build Netflix Frontend</h1>
      <Row title="Netflix ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
