import React from 'react';
import Stack from './stack';
import Axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.StrictMode>
          <Stack />
        </React.StrictMode>
      </header>
    </div>
  );
}

export default App;
