import React from 'react';
import { Redirect, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';

const App = () => (
  <div>
    <Link to="/home">Home</Link>
    <Link to="/contact">Contact</Link>

    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Redirect to="/home" />
    </Switch>
  </div>
);

export default App;
