import React from 'react';
import Stack from './stack';
import CreateCard from './Create';
import Axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.StrictMode>
          <Stack />
          <CreateCard />
        </React.StrictMode>
      </header>
    </div>
  );
}


export default App;
