import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './AppBar';
import Login from './Login';

const AppRouter = () => {
  return (
    <Router>

      <Route path="/" component={Login} />
    </Router>
  );
};

export default AppRouter;
