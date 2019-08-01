import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const AppRouter = () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          if(localStorage.getItem('token')) {
            return <Redirect to="/home" />
          } else {
            return <Login />
          }
        }}  />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
    </Router>
  );
};

export default AppRouter;
