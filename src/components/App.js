import React from 'react';
import Header from './Header';
import Router from './Router';
import { getRandomTagline } from "./helpers";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header tagline={getRandomTagline()} />
        <Router />
      </div>
    </div>
  );
}

export default App;
