import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './AppBar';
import Login from './Login';
import Home from './Home';

const AppRouter = () => {
  return (
    <Router>

      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Router>
  );
};

export default AppRouter;
