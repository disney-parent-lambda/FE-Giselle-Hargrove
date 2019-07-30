import React, { useEffect } from 'react';
import Login from './Components/Login/Login';
import { Route } from 'react-router-dom';
import AppRouter from './Components/AppRouter.js';
import './App.css';

function App() {

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
